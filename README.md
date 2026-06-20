# Neo Domino Cards 🎴

Un catálogo web responsivo y dinámico para una tienda de cartas coleccionables. Este proyecto simula un E-commerce completo (flujo de navegación punta a punta) implementando una arquitectura sin servidor (Serverless) mediante un BaaS.

## 🚀 Tecnologías y Conceptos Aplicados

- **Arquitectura y Backend (BaaS):** 
  - Integración con **Supabase (PostgreSQL)** para persistencia de datos en la nube.
  - Consumo asíncrono de base de datos (`async/await`, promesas) utilizando el SDK de Supabase para operaciones CRUD (`.select()`, `.insert()`).
- **Web Storage API & Seguridad:**
  - Desarrollo de un módulo seguro (`storage.js`) como *wrapper* con bloques `try/catch` para manejar `localStorage` previniendo errores de parseo JSON.
  - Uso de `sessionStorage` para proteger la vista de administración mediante un login validado en el cliente.
- **Frontend y UI/UX:**
  - **Dark Mode Persistente:** Sistema de cambio de tema mediante alternancia de clases en el DOM, memorizando la preferencia del usuario.
  - **Layouts Avanzados:** CSS Grid responsivo (`auto-fill`, `minmax`) y Flexbox.
  - **Componentes:** Carrito de compras "Off-Canvas" lateral y tarjetas de producto animadas.

## ✨ Características Principales

1. **Catálogo Dinámico y Filtros:** Grilla renderizada asincrónicamente desde la nube. Permite cruzar filtros por nombre, rango de precio y nivel/estrellas simultáneamente.
2. **Panel de Administración Protegido:** Ruta exclusiva para dar de alta nuevos productos directamente en la tabla de Supabase.
3. **Carrito Persistente:** Cálculo en tiempo real de subtotales/totales y memoria a largo plazo entre sesiones del navegador.
4. **Checkout Simulado:** Cierre de compra con validación de datos de envío y vaciado automático de memoria tras procesar la orden.

## 📁 Estructura del Proyecto

```text
/app
 ├── img/                 # Imágenes optimizadas de los productos
 ├── style/
 │    └── style.css       # Hoja de estilos centralizada con variables y Dark Mode
 ├── storage.js           # Módulo seguro para interacción con Web Storage
 ├── carrito.js           # Lógica global de compras y cálculo de totales
 ├── darkmode.js          # Lógica para alternancia y persistencia de temas visuales
 ├── index.html           # Landing page promocional
 ├── catalogo.html        # Grilla dinámica de productos y barra de filtros
 ├── admin.html           # Formulario para altas en base de datos (Protegido)
 └── checkout.html        # Resumen del pedido y simulación de pago