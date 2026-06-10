// Capturamos el botón y el cuerpo del documento
const btnDarkMode = document.getElementById('btn-dark-mode');
const body = document.body;

const temaGuardado = localStorage.getItem('tema');

if (temaGuardado === 'dark') {
    body.classList.add('dark-mode');
    if (btnDarkMode) btnDarkMode.textContent = '☀️'; // Cambiamos el ícono a un sol
}

if (btnDarkMode) {
    btnDarkMode.addEventListener('click', () => {
        // La función toggle agrega la clase si no está, y la saca si ya está
        body.classList.toggle('dark-mode');
        
        // Guardamos la decisión actual en el localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('tema', 'dark');
            btnDarkMode.textContent = '☀️';
        } else {
            localStorage.setItem('tema', 'light');
            btnDarkMode.textContent = '🌙';
        }
    });
}