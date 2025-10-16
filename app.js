const STORAGE_KEY = 'contacts_v3';

const contactForm = document.getElementById('contact-form');
const inputId = document.getElementById('contact-id');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('phone');

const contactsTbody = document.getElementById('contacts-tbody');
const noContacts = document.getElementById('no-contacts');
const searchInput = document.getElementById('search');
const clearAllBtn = document.getElementById('clear-all');
const cancelBtn = document.getElementById('cancel-btn');
const formHeader = document.getElementById('form-header');
const saveBtn = document.getElementById('save-btn');

let contacts = [];
let editingId = null;
let locked = false;

function loadContacts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    contacts = raw ? JSON.parse(raw) : [];
  } catch {
    contacts = [];
  }
}

function saveContacts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

inputPhone.addEventListener('input', () => {
  inputPhone.value = inputPhone.value.replace(/\D/g, '');
});

function renderContacts(filter = '') {
  const q = filter.trim().toLowerCase();
  const visible = contacts.filter(c =>
    !q ||
    c.name.toLowerCase().includes(q) ||
    c.email.toLowerCase().includes(q) ||
    c.phone.toLowerCase().includes(q)
  );

  contactsTbody.innerHTML = '';

  if (visible.length === 0) {
    noContacts.style.display = 'block';
    return;
  }
  noContacts.style.display = 'none';

  for (const contact of visible) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${contact.name}</td>
      <td>${contact.email}</td>
      <td>${contact.phone}</td>
      <td>
        <button class="btn btn-warning btn-sm me-2" onclick="startEdit('${contact.id}')" ${locked ? 'disabled' : ''}>
          <i class="bi bi-pencil-square"></i> Editar
        </button>
        <button class="btn btn-danger btn-sm" onclick="removeContact('${contact.id}')" ${locked ? 'disabled' : ''}>
          <i class="bi bi-trash3"></i> Eliminar
        </button>
      </td>
    `;
    if (editingId === contact.id) tr.classList.add('editing-row');
    contactsTbody.appendChild(tr);
  }
}

function addContact({ name, email, phone }) {
  contacts.unshift({
    id: generateId(),
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim()
  });
  saveContacts();
  renderContacts(searchInput.value);
  clearForm();
}

function updateContact(id, { name, email, phone }) {
  const idx = contacts.findIndex(c => c.id === id);
  if (idx === -1) return;
  contacts[idx] = { ...contacts[idx], name, email, phone };
  saveContacts();
  renderContacts(searchInput.value);
  clearForm();
}

function removeContact(id) {
  if (locked) return;
  const contact = contacts.find(c => c.id === id);
  if (!contact) return;
  if (!confirm(`¿Eliminar contacto "${contact.name}"?`)) return;
  contacts = contacts.filter(c => c.id !== id);
  saveContacts();
  renderContacts(searchInput.value);
}

function removeAllContacts() {
  if (!contacts.length) return alert('No hay contactos.');
  if (!confirm('¿Eliminar TODOS los contactos?')) return;
  contacts = [];
  saveContacts();
  renderContacts();
}

function startEdit(id) {
  if (locked) return;
  const c = contacts.find(ct => ct.id === id);
  if (!c) return;
  editingId = id;
  locked = true;
  inputId.value = id;
  inputName.value = c.name;
  inputEmail.value = c.email;
  inputPhone.value = c.phone;
  saveBtn.textContent = 'Actualizar';
  formHeader.textContent = 'Editando Contacto';
  formHeader.classList.replace('bg-primary', 'bg-warning');
  renderContacts(searchInput.value);
}

function clearForm() {
  editingId = null;
  locked = false;
  inputId.value = '';
  contactForm.reset();
  saveBtn.textContent = 'Agregar';
  formHeader.textContent = 'Agregar Contacto';
  formHeader.classList.replace('bg-warning', 'bg-primary');
  renderContacts(searchInput.value);
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = inputName.value.trim();
  const email = inputEmail.value.trim();
  const phone = inputPhone.value.trim();
  if (!name || !email || !phone) return alert('Completa todos los campos.');

  if (editingId) updateContact(editingId, { name, email, phone });
  else addContact({ name, email, phone });
});

cancelBtn.onclick = clearForm;
searchInput.oninput = (e) => renderContacts(e.target.value);
clearAllBtn.onclick = removeAllContacts;

(function init() {
  loadContacts();
  renderContacts();
})();
