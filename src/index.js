const tabla = document.getElementById("ListaProductos");
const status = document.getElementById("status");
const searchInput = document.getElementById("searchInput");


async function cargarProductos() {

    status.textContent = "Cargando productos...";

    const res = await fetch("http://localhost:4000/api/productos/listarProductos");
    const data = await res.json();

    CrearTabla(data);
    status.textContent = "";
}



async function buscarProductos() {

    try{
        const texto = document.getElementById("searchInput").value;

        if (!texto) return;

        status.textContent = "Buscando...";

        const res = await fetch(`${"http://localhost:4000/api/productos/buscarProducto"}/${texto}`);

        if (res.status === 400) {
            status.textContent = "Debe escribir algo";
            return;
        }

        const data = await res.json();

        if (data.length === 0) {
            tabla.innerHTML = "";
            status.textContent = `No encontramos productos que coincidan con "${texto}"`;
            return;
        }

        CrearTabla(data);
        status.textContent = "";
    }catch(error){
        console.log(`Error: ${error}`);
        status.textContent = "Ocurrió un error al buscar los productos";
    }
};



function limpiarBusqueda() {
    try{
        document.getElementById("searchInput").value = "";
        cargarProductos();
    }catch(error){
        console.log(`Error: ${error}`);
        status.textContent = "Ocurrió un error al limpiar la búsqueda";
    }
};


function CrearTabla(productos) {

    tabla.innerHTML = "";

    productos.forEach(p => {

        tabla.innerHTML += `
            <tr>
                <td>${p.nombre}</td>
                <td>${p.descripcion}</td>
                <td>${p.categoria}</td>
                <td>${p.precio}</td>
                <td>${p.stock}</td>
            </tr>
        `;
    });
};

cargarProductos();
