// 1. Inicialización de la memoria
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// 2. Capturamos los elementos del DOM (Panel Lateral)
const cartCounter = document.getElementById('cart-counter');
const sidebarCarrito = document.getElementById('carrito-sidebar');
const btnCerrarCarrito = document.getElementById('cerrar-carrito');
const contenedorItems = document.getElementById('carrito-items');
const displayTotal = document.getElementById('carrito-total-precio');
const btnVaciar = document.getElementById('vaciar-carrito');
const btnContinuarCompra = document.getElementById('btn-continuar-compra');

// 3. Funciones principales
const actualizarContadorCarrito = () => {
    if (!cartCounter) return;
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    cartCounter.textContent = `🛒 (${totalItems})`;
};

const renderizarCarrito = () => {
    if (!contenedorItems) return;
    contenedorItems.innerHTML = '';
    if (carrito.length === 0) {
        contenedorItems.innerHTML = '<p style="text-align:center; color:var(--color-texto-mutado); margin-top:20px;">Tu carrito está vacío.</p>';
        displayTotal.textContent = '$0 ARS';
        return;
    }

    let totalAPagar = 0;
    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        totalAPagar += subtotal;
        contenedorItems.insertAdjacentHTML('beforeend', `
            <div class="carrito-item">
                <img src="${item.imagen}" alt="${item.nombre}" class="carrito-item-img">
                <div class="item-info">
                    <h4>${item.nombre}</h4>
                    <span style="font-size: 0.85rem;">Cant: ${item.cantidad}</span>
                </div>
                <div class="item-precio">$${subtotal.toLocaleString('es-AR')}</div>
            </div>
        `);
    });
    displayTotal.textContent = `$${totalAPagar.toLocaleString('es-AR')} ARS`;
};

// Función global para ser usada desde el Index o desde el Detalle
const agregarItemAlCarrito = (nombre, precio, imagen, botonDOM) => {
    const itemExistente = carrito.find(item => item.nombre === nombre);
    if (itemExistente) {
        itemExistente.cantidad += 1;
    } else {
        carrito.push({ nombre, precio, cantidad: 1, imagen });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();

    // Feedback visual en el botón
    const textoOriginal = botonDOM.textContent;
    botonDOM.textContent = '¡Agregado!';
    botonDOM.style.backgroundColor = 'var(--color-exito)';
    setTimeout(() => { 
        botonDOM.textContent = textoOriginal; 
        botonDOM.style.backgroundColor = ''; 
    }, 1000);
};

// 4. Eventos del panel (Solo se ejecutan si el panel existe en la página)
if (cartCounter) {
    cartCounter.addEventListener('click', () => {
        sidebarCarrito.classList.add('abierto');
        renderizarCarrito();
    });
}

if (btnCerrarCarrito) btnCerrarCarrito.addEventListener('click', () => sidebarCarrito.classList.remove('abierto'));

if (btnVaciar) {
    btnVaciar.addEventListener('click', () => {
        carrito = [];
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarContadorCarrito();
        renderizarCarrito();
    });
}

if (btnContinuarCompra) {
    btnContinuarCompra.addEventListener('click', () => {
        if (carrito.length === 0) alert("Tu carrito está vacío.");
        else window.location.href = 'checkout.html';
    });
}

// Inicializamos el contador al cargar cualquier página
actualizarContadorCarrito();