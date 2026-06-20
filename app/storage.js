// storage.js - Wrapper seguro para Web Storage
const StorageDB = {
    leer: (clave, porDefecto = []) => {
        try {
            const dato = localStorage.getItem(clave);
            return dato ? JSON.parse(dato) : porDefecto;
        } catch (e) {
            return porDefecto;
        }
    },
    guardar: (clave, valor) => {
        try { localStorage.setItem(clave, JSON.stringify(valor)); } catch (e) {}
    },
    borrar: (clave) => localStorage.removeItem(clave)
};