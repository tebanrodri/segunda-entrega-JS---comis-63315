
const productos = [
    { id: 1, nombre: "Televisor", categoria: "Electrónica", precio: 300000 },
    { id: 2, nombre: "Lámpara", categoria: "Hogar", precio: 25000 },
    { id: 3, nombre: "Camiseta", categoria: "Ropa", precio: 5000 },
    { id: 4, nombre: "Laptop", categoria: "Electrónica", precio: 1800000 },
    { id: 5, nombre: "Sofá", categoria: "Hogar", precio: 200000 },
    { id: 6, nombre: "Pantalón", categoria: "Ropa", precio: 40000 },
    { id: 7, nombre: "Auriculares", categoria: "Electrónica", precio: 50000 },
    { id: 8, nombre: "Mesa ratona", categoria: "Hogar", precio: 120000 },
    { id: 9, nombre: "Vestido", categoria: "Ropa", precio: 60000 },
    { id: 10, nombre: "Celular", categoria: "Electrónica", precio: 600000 },
    { id: 11, nombre: "Toalla", categoria: "Hogar", precio: 10000 },
    { id: 12, nombre: "Zapatos", categoria: "Ropa", precio: 75000 },
    { id: 13, nombre: "Impresora", categoria: "Electrónica", precio: 150000 },
    { id: 14, nombre: "Reloj de Pared", categoria: "Hogar", precio: 35000 },
    { id: 15, nombre: "Pantalon Jean", categoria: "Ropa", precio: 45000 },
    { id: 16, nombre: "Tablet", categoria: "Electrónica", precio: 250000 },
    { id: 17, nombre: "Cuchillos de Cocina", categoria: "Hogar", precio: 40000},
    { id: 18, nombre: "Campera", categoria: "Ropa", precio: 95000 },
    { id: 19, nombre: "Parlante Bluetooth", categoria: "Electrónica", precio: 70000 },
    { id: 20, nombre: "Almohada", categoria: "Hogar", precio: 15000 },
    { id: 21, nombre: "Bufanda", categoria: "Ropa", precio: 20000 },
    { id: 22, nombre: "luz led", categoria: "Electrónica", precio: 10000 },
    { id: 23, nombre: "Sartén", categoria: "Hogar", precio: 30000 },
    { id: 24, nombre: "Medias", categoria: "Ropa", precio: 3500 },
    { id: 25, nombre: "Monitor PC", categoria: "Electrónica", precio: 200000 },
    { id: 26, nombre: "Repisas", categoria: "Hogar", precio: 90000 },
    { id: 27, nombre: "Pollera", categoria: "Ropa", precio: 35000 },
    { id: 28, nombre: "Cámara de fotos", categoria: "Electrónica", precio: 400000 },
    { id: 29, nombre: "Plancha", categoria: "Hogar", precio: 50000 },
    { id: 30, nombre: "gorro", categoria: "Ropa", precio: 25 }
];



let carrito = [];


mostrarProductos(productos);


function mostrarProductos(lista) {
    const listaProductos = document.getElementById("listaProductos");
    listaProductos.innerHTML = ""; 

  
    lista.sort((a, b) => a.nombre.localeCompare(b.nombre));
    lista.forEach(producto => {
        const div = document.createElement("div");
        div.innerHTML = `
            <p>${producto.nombre} - $${producto.precio} - ${producto.categoria}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        listaProductos.appendChild(div);
    });
}


function buscarProducto() {
    const busqueda = document.getElementById("buscarProducto").value.toLowerCase();
    const resultado = productos.find(prod => prod.nombre.toLowerCase() === busqueda);
    
    if (resultado) {
        mostrarProductos([resultado]); 
    } else {
        alert("Producto no encontrado.");
    }
}


function filtrarProductos() {
    const categoria = document.getElementById("filtroCategoria").value;
    const productosFiltrados = categoria
        ? productos.filter(prod => prod.categoria === categoria)
        : productos;

    mostrarProductos(productosFiltrados); 
}


function agregarAlCarrito(idProducto) {
    const producto = productos.find(prod => prod.id === idProducto);
    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
    }
}


function actualizarCarrito() {
    const carritoDiv = document.getElementById("carrito");
    carritoDiv.innerHTML = ""; 
    let totalGasto = 0;

   
    carrito.forEach(item => {
        const div = document.createElement("div");
        div.textContent = `${item.nombre} - $${item.precio}`;
        carritoDiv.appendChild(div);
        totalGasto += item.precio;
    });

    document.getElementById("totalGasto").textContent = totalGasto;
}


function finalizarCompra() {
    if (carrito.length > 0) {
        const totalGasto = document.getElementById("totalGasto").textContent;
        
        
        document.getElementById("mensajeCompra").textContent = `Compra finalizada. Total: $${totalGasto}`;
        document.getElementById("modalCompra").style.display = "block";
        
       
        carrito = [];
        actualizarCarrito();
    } else {
        alert("El carrito está vacío.");
    }
}


function cerrarModal() {
    document.getElementById("modalCompra").style.display = "none";
}
