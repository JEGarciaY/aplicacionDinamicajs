# 🧠 Aplicación Dinámica con JavaScript

Este proyecto es una aplicación **dinámica de lista de tareas o contactos** desarrollada con **HTML, CSS y JavaScript**, que utiliza el **LocalStorage del navegador** como base de datos local.  
Permite **crear, actualizar y eliminar registros**, manteniendo los datos incluso al recargar la página.

---

## 🚀 Características principales

- 📦 **Persistencia de datos** usando `localStorage`.
- 🧩 **Manipulación del DOM** para crear una interfaz 100% dinámica.
- ✏️ **CRUD completo** (Crear, Leer, Actualizar, Eliminar).
- 🎨 **Diseño moderno y minimalista** con CSS puro.
- ⚡ **Sin frameworks**, solo HTML, CSS y JavaScript nativo.
- 🌐 **Desplegable fácilmente en GitHub Pages.**

---

## 🧰 Tecnologías utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **LocalStorage API**

---

## 🧩 Investigación: Manejo del DOM en JavaScript

El **DOM (Document Object Model)** es una representación estructurada del documento HTML en forma de árbol, donde cada etiqueta (elemento) del documento se convierte en un **nodo** que puede ser accedido y manipulado mediante **JavaScript**.

Gracias al DOM, los desarrolladores pueden **interactuar dinámicamente con una página web**, modificando su contenido, estructura y estilo sin recargarla.

### 🔍 ¿Para qué sirve?

El manejo del DOM permite:
- **Acceder** a elementos del documento HTML.  
- **Modificar** el contenido, atributos o estilos de los elementos.  
- **Agregar o eliminar** nodos dinámicamente.  
- **Escuchar eventos** del usuario (como clics, teclas o desplazamientos).  

### 🧠 Conceptos clave

- **Nodo:** cada elemento del HTML (etiqueta, texto, atributo, etc.).  
- **Árbol DOM:** estructura jerárquica donde `document` es la raíz.  
- **Eventos:** acciones del usuario que pueden disparar funciones.  

### 🧰 Métodos comunes del DOM

| Método | Descripción |
|--------|--------------|
| `document.getElementById("id")` | Obtiene un elemento por su ID. |
| `document.querySelector(".clase")` | Selecciona el primer elemento que cumpla el selector CSS. |
| `document.createElement("div")` | Crea un nuevo elemento HTML. |
| `element.appendChild(nodo)` | Agrega un nuevo nodo dentro de otro. |
| `element.remove()` | Elimina un elemento del DOM. |
| `element.addEventListener("click", función)` | Escucha eventos del usuario. |

### 📚 Conclusión

El **manejo del DOM** es esencial en el desarrollo web moderno, ya que permite crear **interfaces dinámicas e interactivas** mediante la manipulación directa del contenido y los estilos desde **JavaScript**, mejorando la experiencia del usuario sin necesidad de recargar la página.

---

## 🗂️ Estructura del proyecto

```
aplicacionDinamicajs/
│
├── index.html          # Estructura principal de la aplicación
├── style.css           # Estilos visuales de la interfaz
├── app.js              # Lógica principal con manejo del DOM y LocalStorage
└── README.md           # Documentación del proyecto
```

---

## ⚙️ Cómo ejecutar el proyecto localmente

1. **Clona este repositorio:**
   ```
   git clone https://github.com/JEGarciaY/aplicacionDinamicajs.git
   ```

2. **Abre la carpeta del proyecto:**
   ```
   cd aplicacionDinamicajs
   ```

3. **Abre el archivo `index.html`** en tu navegador.

---

## ✨ Autor

👨‍💻 **Johan García**  
📎 [GitHub: JEGarciaY](https://github.com/JEGarciaY)
