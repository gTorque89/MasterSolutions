//Declaración de variables globales

let carritoDeCompras = [];

let stockDeProductos = []

//Listado de productos
let productos = [
    {titulo: 'Laptop DELL', id: 01, precio: 180000, categoria: 'Laptops', stock: 20, img: "./img/productsStart/notebookDell.webp"},
    {titulo: 'Laptop HP', id: 02, precio: 190000, categoria: 'Laptops', stock: 15, img: './img/productsStart/notebookHp.jpg'},
    {titulo: 'Laptop Acer', id: 03, precio: 225000, categoria: 'Laptops', stock: 10, img: './img/productsStart/notebookAcer.webp'},
    {titulo: 'Laptop Asus', id: 04, precio: 280000, categoria: 'Laptops', stock: 12, img: './img/productsStart/notebookAsus.webp'},
    {titulo: 'Laptop Lenovo', id: 05, precio: 150000, categoria: 'Laptops', stock: 18, img: './img/productsStart/notebookLenovo.jpg'},
    {titulo: 'Laptop Exo', id: 06, precio: 175000, categoria: 'Laptops', stock: 15, img: './img/productsStart/notebookExo.webp'},
    {titulo: 'Laptop Banghó', id: 07, precio: 240000, categoria: 'Laptops', stock: 25, img: './img/productsStart/notebookBangho.jpg'},
    {titulo: 'Laptop Alienware', id: 08, precio: 320000, categoria: 'Laptops', stock: 10, img: './img/productsStart/notebookAlienware.jpg'},
    {titulo: 'Tablet Atom', id: 09, precio: 20000, categoria: 'Tablets', stock: 8, img: './img/productsStart/notebookHp.jpg'},
    {titulo: 'Tablet DELL', id: 10, precio: 15000, categoria: 'Tablets', stock: 10, img: './img/productsStart/notebookHp.jpg'},
    {titulo: 'Tablet Lenovo', id: 11, precio: 18000, categoria: 'Tablets', stock: 10, img: './img/productsStart/notebookHp.jpg'},
    {titulo: 'Tablet Samsung', id: 12, precio: 15000, categoria: 'Tablets', stock: 6, img: './img/productsStart/notebookHp.jpg'},
    {titulo: 'Tablet Exo', id : 13, precio: 18500, categoria: 'Tablets', stock: 18, img: './img/productsStart/notebookHp.jpg'},
    {titulo: 'Tablet Samsung Tab', id: 14, precio: 17000, categoria: 'Tablets', stock: 14, img: './img/productsStart/notebookHp.jpg'},
    {titulo: 'Tablet Asus', id: 15, precio: 25000, categoria: 'Tablets', stock: 7, img: './img/productsStart/notebookHp.jpg'},
    {titulo: 'Tablet Banghó', id: 16, precio: 13000, categoria: 'Tablets', stock: 25, img: './img/productsStart/notebookHp.jpg'},
    {titulo: 'Pc Gamer Ryzen 5', id: 17, precio: 255000, categoria: 'Desktop', stock: 7, img: './img/productsStart/notebookHp.jpg'},
    {titulo: 'Pc Oficina Ryzen 3', id: 18, precio: 130200, categoria: 'Desktop', stock: 25, img: './img/productsStart/notebookHp.jpg'}

];

const generadorDeCards = (productoARecorrer) => {
    let acumuladorCardsProductos = ``;
    productos.forEach((producto) => {
        acumuladorCardsProductos += `
        <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div class="card product-item border-0 mb-4">
                        <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img class="img-fluid w-100" src="${producto.img}" alt="">
                        </div>
                        <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 class="text-truncate mb-3">${producto.titulo}</h6>
                            <div class="d-flex justify-content-center">
                                <h6>${producto.precio}</h6><h6 class="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between bg-light border">
                            <a href="#" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>Ver detalle</a>
                            <a onclick ="agregarProductoAFavoritos(${producto.id})" class="btn btn-sm text-dark p-0"><i class="fas fa-heart text-primary mr-1"></i>Añadir a favoritos</a>
                            <a onclick ="agregarProductoAlCarrito(${producto.id})" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                        </div>
                    </div>
                </div>
                `
    })
    
    document.getElementById('card-container-ofertas').innerHTML = acumuladorCardsProductos;
    }
    generadorDeCards(productos);

//Filtrar categoria
    const filtrarPorCategoria = (categoria) => {
        const listadoFiltrado = productos.filter((producto) => producto.categoria == categoria);
        generadorDeCards(listadoFiltrado)
    }

//Sección agregar a favoritos

const agregarProductoAFavoritos = (id) => {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        const favoritoSeleccionado = productos.find((producto) => producto.id === id);
        favoritos.push(favoritoSeleccionado)
        const listaFavoritos = favoritos.reduce((acumulador, producto) => acumulador + producto, 0);
    
        localStorage.setItem('favoritos', JSON.stringify(favoritos))

    document.getElementById('total-favoritos').innerHTML = favoritos.length + " - Fav";
    
};

const agregarProductoAlCarrito = (id) => {
    let carritoAcumulado = JSON.parse(localStorage.getItem('carrito')) || [];

    const productoSeleccionado = productos.find((producto) => producto.id === id);
    carritoAcumulado.push(productoSeleccionado)
    const totalCarrito = carritoAcumulado.reduce((acumulador, producto) => acumulador + producto.precio, 0);

    localStorage.setItem('carrito', JSON.stringify(carritoAcumulado))

document.getElementById('total-carrito').innerHTML = carritoAcumulado.length + " - $" + totalCarrito;


}



//ordenar por categoria, precio, nombre
//const ordenarPrecio = productos.filter(producto => producto.precio)

//Ordenar por precio con
const ordenarPrecio2 = productos.sort((a, b) => {
    if (a.precio > b.precio) {
        return 1;
    }
    if (a.precio < b.precio) {
        return -1;
    }
    return 0;
})


//console.log(ordenarPrecio)
console.log(ordenarPrecio2)