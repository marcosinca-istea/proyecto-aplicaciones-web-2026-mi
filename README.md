# Neo Domino Cards 🎴

Un catálogo web responsivo y dinámico para una tienda de cartas coleccionables, desarrollado como trabajo práctico final para la materia **Aplicaciones Web Cliente 2026**.

Este proyecto simula un E-commerce completo (flujo de navegación punta a punta), construido estrictamente con tecnologías frontend nativas (Vanilla JS, HTML5 y CSS3) sin la utilización de frameworks externos.

## 🚀 Tecnologías y Conceptos Aplicados

- **HTML5 Semántico:** Estructura de vistas, formularios con validaciones nativas (`required`, `type="email"`) y paso de parámetros por URL (`?id=...`).
- **CSS3 Moderno:** - **Sistemas de Diseño:** Uso intensivo de Variables (`:root`) para paletas de colores y espaciados.
  - **Layouts Avanzados:** Combinación de CSS Grid (`auto-fill`, `minmax()`) para el catálogo y Flexbox para alineaciones.
  - **Posicionamiento y Animaciones:** Uso de `position: sticky` para la barra de filtros lateral, `position: fixed` para el navbar/carrito, transiciones suaves y `@keyframes`.
- **Vanilla JavaScript (ES6+):**
  - **Modularidad:** Separación de lógica en archivos distintos (`productos.js` como base de datos y `carrito.js` para lógica compartida).
  - **Métodos Funcionales:** Uso intensivo de `.map()`, `.filter()`, `.find()` y `.reduce()` para el manejo de la información.
  - **Persistencia de Datos:** Implementación de `localStorage` para mantener el estado del carrito entre distintas páginas.
  - **Manipulación del DOM:** Inyección dinámica de HTML (Template Literals) y eventos integrados.

## ✨ Características Principales

1. **Catálogo con Filtros Múltiples:** Sistema de búsqueda avanzada que permite cruzar filtros por nombre, rango de precio y nivel/estrellas de las cartas de forma simultánea.
2. **Vistas Dinámicas (Plantillas):** Un único archivo `detalle.html` que lee la URL para inyectar dinámicamente la información, imagen y precio de la carta seleccionada.
3. **Carrito "Off-Canvas":** Panel lateral deslizable que permite visualizar los productos agregados, calcular subtotales y totales, y gestionar el contenido desde cualquier parte del sitio.
4. **Flujo de Checkout y Contacto:** Interfaces preparadas para simular el cierre de una compra (con vaciado de memoria) y un formulario de contacto validado.
5. **Diseño Mobile-First:** Totalmente adaptable a dispositivos móviles, reorganizando la grilla y el panel de filtros lateral.

## 📁 Estructura del Proyecto

```text
/app
 ├── img/                 # Imágenes optimizadas (.webp) de los productos
 ├── style/
 │    └── style.css       # Hoja de estilos centralizada y modular
 ├── carrito.js           # Lógica global del carrito y DOM 
 ├── productos.js         # Base de datos local (Array de objetos)
 ├── index.html           # Catálogo principal y filtros
 ├── detalle.html         # Plantilla dinámica de producto
 ├── checkout.html        # Resumen de compra y formulario de envío
 └── contacto.html        # Formulario de soporte al cliente