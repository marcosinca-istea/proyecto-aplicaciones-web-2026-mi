const StorageDB = {
    // Lee un dato, lo parsea, y si falla te devuelve el valor "porDefecto" que le digas
    leer: (clave, porDefecto = []) => {
        try {
            const dato = localStorage.getItem(clave);
            return dato ? JSON.parse(dato) : porDefecto;
        } catch (error) {
            console.error(`Error leyendo la clave ${clave}:`, error);
            return porDefecto;
        }
    },
    
    // Guarda un dato pasándolo a texto automáticamente
    guardar: (clave, valor) => {
        try {
            localStorage.setItem(clave, JSON.stringify(valor));
        } catch (error) {
            console.error(`Error guardando la clave ${clave}:`, error);
        }
    },

    // Borra un dato
    borrar: (clave) => {
        localStorage.removeItem(clave);
    }
};