//Declaración de variables globales
const carritoAcumulado = JSON.parse(localStorage.getItem('carrito')) || [];
const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

//Listado de productos
let productos = [
    {titulo: 'Laptop DELL', id: 01, precio: 180000, categoria: 'Laptops', stock: 20, img: "./img/productsStart/notebookDell.webp", descuento: 8},
    {titulo: 'Laptop HP', id: 02, precio: 190000, categoria: 'Laptops', stock: 15, img: './img/productsStart/notebookHp.jpg', descuento: 5},
    {titulo: 'Laptop Acer', id: 03, precio: 225000, categoria: 'Laptops', stock: 10, img: './img/productsStart/notebookAcer.webp', descuento: 6},
    {titulo: 'Laptop Asus', id: 04, precio: 280000, categoria: 'Laptops', stock: 12, img: './img/productsStart/notebookAsus.webp', descuento: 2},
    {titulo: 'Laptop Lenovo', id: 05, precio: 150000, categoria: 'Laptops', stock: 18, img: './img/productsStart/notebookLenovo.jpg', descuento: 4},
    {titulo: 'Laptop Exo', id: 06, precio: 175000, categoria: 'Laptops', stock: 15, img: './img/productsStart/notebookExo.webp', descuento: 8},
    {titulo: 'Laptop Banghó', id: 07, precio: 240000, categoria: 'Laptops', stock: 25, img: './img/productsStart/notebookBangho.jpg', descuento: 9},
    {titulo: 'Laptop Alienware', id: 08, precio: 320000, categoria: 'Laptops', stock: 10, img: './img/productsStart/notebookAlienware.jpg', descuento: 12},
    {titulo: 'Tablet Atom', id: 09, precio: 20000, categoria: 'Tablets', stock: 8, img: './img/productsStart/notebookHp.jpg', descuento: 2},
    {titulo: 'Tablet DELL', id: 10, precio: 15000, categoria: 'Tablets', stock: 10, img: './img/productsStart/notebookHp.jpg', descuento: 10},
    {titulo: 'Tablet Lenovo', id: 11, precio: 18000, categoria: 'Tablets', stock: 10, img: './img/productsStart/notebookHp.jpg', descuento: 7},
    {titulo: 'Tablet Samsung', id: 12, precio: 15000, categoria: 'Tablets', stock: 6, img: './img/productsStart/notebookHp.jpg', descuento: 4},
    {titulo: 'Tablet Exo', id : 13, precio: 18500, categoria: 'Tablets', stock: 18, img: './img/productsStart/notebookHp.jpg', descuento: 15}, 
    {titulo: 'Tablet Samsung Tab', id: 14, precio: 17000, categoria: 'Tablets', stock: 14, img: './img/productsStart/notebookHp.jpg', descuento: 16},
    {titulo: 'Tablet Asus', id: 15, precio: 25000, categoria: 'Tablets', stock: 7, img: './img/productsStart/notebookHp.jpg', descuento: 2},
    {titulo: 'Tablet Banghó', id: 16, precio: 13000, categoria: 'Tablets', stock: 25, img: './img/productsStart/notebookHp.jpg', descuento: 8},
    {titulo: 'Pc Gamer Ryzen 5', id: 17, precio: 255000, categoria: 'Desktop', stock: 7, img: './img/productsStart/notebookHp.jpg', descuento: 4},
    {titulo: 'Pc Oficina Ryzen 3', id: 18, precio: 130200, categoria: 'Desktop', stock: 25, img: './img/productsStart/notebookHp.jpg', descuento: 7}

];
//Generador de cards index
const generadorDeCards = (productoARecorrer) => {
    let acumuladorCardsProductos = ``;
    productos.forEach((producto) => {
        acumuladorCardsProductos += `
        <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div class="card product-item border-0 mb-4">
                        <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img class="img-fluid w-100" src="${producto.img}" alt="${producto.titulo}">
                        </div>
                        <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 class="text-truncate mb-3">${producto.titulo}</h6>
                            <div class="d-flex justify-content-center">
                                <h6>${producto.precio}</h6><h6 class="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between bg-light border">
                            <a href="detail.html" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>Ver detalle</a>
                            <a onclick ="agregarProductoAFavoritos(${producto.id})" class="btn btn-sm text-dark p-0"><i class="fas fa-heart text-primary mr-1"></i>Añadir a favoritos</a>
                            <a onclick ="agregarProductoAlCarrito(${producto.id})" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                        </div>
                    </div>
                </div>
                `
    })
    
    document.getElementById('card-container-ofertas').innerHTML = acumuladorCardsProductos;
}
    generadorDeCards();



//Filtrar categoria
    
const obtenerProductosPorCategoria = (categoria) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productosParaResolver = productos.filter((producto) => producto.categoria === categoria);
            resolve(productosParaResolver)
        }, 2000)
    })
} 

obtenerProductosPorCategoria('Laptops').then((productos) => {
    const nuevoListadoFiltrado = productos;
    generadorDeCards(nuevoListadoFiltrado)
})

//Sección agregar a favoritos
function popUpAgregasteAFavoritos () {
    Toastify({
        text: "Agregaste tu proxima compra a favoritos ",
        duration: 3000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #419ebe, #212529)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
}

const agregarProductoAFavoritos = (id) => {
    
        const favoritoSeleccionado = productos.find((producto) => producto.id === id);
        favoritos.push(favoritoSeleccionado)
        const listaFavoritos = favoritos.reduce((acumulador, producto) => acumulador + producto, 0);
    
        localStorage.setItem('favoritos', JSON.stringify(favoritos))

    document.getElementById('total-favoritos').innerHTML = favoritos.length + " - Fav";
    
    popUpAgregasteAFavoritos()
};
//Sección agregar al carrito

function popUpAgregasteAlCarrito () {
    Toastify({
        text: "Agregaste un producto al carrito",
        duration: 3000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #419ebe, #212529)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
}

function agregarProductoAlCarrito(id) {
    const productoSeleccionado = productos.find((producto) => producto.id === id);
    carritoAcumulado.push(productoSeleccionado)
    
    localStorage.setItem('carrito', JSON.stringify(carritoAcumulado))

    popUpAgregasteAlCarrito()
    actualizarDom()  
}

function actualizarDom() {
    const subtotalCarrito = carritoAcumulado.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    const totalCarrito = carritoAcumulado.reduce((acumulador, producto) => acumulador + producto.precio, 500);
    document.getElementById('subtotal-carrito').innerHTML = " $" + subtotalCarrito;
    document.getElementById('total-carrito-modal').innerHTML = " $" + totalCarrito;
    document.getElementById('total-carrito').innerHTML = carritoAcumulado.length + " - $" + subtotalCarrito;
}   
    actualizarDom()


    //Función para cargar cards en el modal 

const eliminarItemDeCarrito = (id) => {

    const productoSeleccionado = carritoAcumulado.findIndex((producto) => producto.id === id);
    carritoAcumulado.splice(productoSeleccionado, 1);
    const totalCarrito = carritoAcumulado.reduce((acumulador, producto) => acumulador - producto.precio, 0);
    document.getElementById('total-carrito').innerHTML = carritoAcumulado.length + " - $" + totalCarrito;
    console.log(carritoAcumulado);

    const btnEliminarItemDeCarrito = document.getElementById('eliminar-item');
    btnEliminarItemDeCarrito.onclick = () => {
        eliminarItemDeCarrito(id)
    };
    localStorage.setItem('carrito', JSON.stringify(carritoAcumulado))
    cardsCarrito()
    actualizarDom()
    cardsCarrito()
}

function cardsCarrito() {
    let acumuladorCardsModal = ``;
    carritoAcumulado.forEach((producto) => {
    acumuladorCardsModal += `              
                        <tr>
                            <td class="align-middle"><img src="${producto.img}" alt="${producto.titulo}" style="width: 50px;">${producto.titulo}</td>
                            <td class="align-middle">$${producto.precio}</td>
                            <td class="align-middle"><button  onclick="eliminarItemDeCarrito(${producto.id}) "id="eliminar-item" class="btn btn-sm btn-primary" id="eliminar-item" ><i class="fa fa-times"></i></button></td>
                        </tr>
                        `
    //DOM cards de modal                  
    document.getElementById('tarjeta-detalle').innerHTML = acumuladorCardsModal;
    const btnEliminarItemDeCarrito = document.getElementById('eliminar-item');
    
    btnEliminarItemDeCarrito.onclick = () => {
        eliminarItemDeCarrito()
    };   
    })
}
cardsCarrito(carritoAcumulado)

//Abrir modal
    const btnAbrirModal = document.getElementById('abrir-modal');
    const btnCerrarModal = document.getElementById('cerrar-modal');
    const modal = document.getElementById('modal-carrito');
    
    

    btnAbrirModal.addEventListener("click", () => {
        modal.showModal();
        actualizarDom()
        cardsCarrito(carritoAcumulado)
    })

    btnCerrarModal.addEventListener('click', () => {
        modal.close();
    })