//Listado de productos
let productos = [
    {titulo: 'Laptop DELL', id: 01, precio: 180000, categoria: 'Laptops', stock: 20},
    {titulo: 'Laptop HP', id: 02, precio: 190000, categoria: 'Laptops', stock: 15},
    {titulo: 'Laptop Acer', id: 03, precio: 225000, categoria: 'Laptops', stock: 10},
    {titulo: 'Laptop Asus', id: 04, precio: 280000, categoria: 'Laptops', stock: 12},
    {titulo: 'Laptop Lenovo', id: 05, precio: 150000, categoria: 'Laptops', stock: 18},
    {titulo: 'Laptop Exo', id: 06, precio: 175000, categoria: 'Laptops', stock: 15},
    {titulo: 'Laptop Banghó', id: 07, precio: 240000, categoria: 'Laptops', stock: 25},
    {titulo: 'Laptop Alienware', id: 08, precio: 320000, categoria: 'Laptops', stock: 10},
    {titulo: 'Tablet Atom', id: 09, precio: 20000, categoria: 'Tablets', stock: 8},
    {titulo: 'Tablet DELL', id: 10, precio: 15000, categoria: 'Tablets', stock: 10},
    {titulo: 'Tablet Lenovo', id: 11, precio: 18000, categoria: 'Tablets', stock: 10},
    {titulo: 'Tablet Samsung', id: 12, precio: 15000, categoria: 'Tablets', stock: 6},
    {titulo: 'Tablet Exo', id : 13, precio: 18500, categoria: 'Tablets', stock: 18},
    {titulo: 'Tablet Samsung Tab', id: 14, precio: 17000, categoria: 'Tablets', stock: 14},
    {titulo: 'Tablet Asus', id: 15, precio: 25000, categoria: 'Tablets', stock: 7},
    {titulo: 'Tablet Banghó', id: 16, precio: 13000, categoria: 'Tablets', stock: 25},
    {titulo: 'Pc Gamer Ryzen 5', id: 17, precio: 255000, categoria: 'Desktop', stock: 7},
    {titulo: 'Pc Oficina Ryzen 3', id: 18, precio: 130200, categoria: 'Desktop', stock: 25}

];

//Cards generator
const generadorDeCards = (productoARecorrer) => {
let acumuladorCardsProductos = ``;
productos.forEach((producto) => {
    acumuladorCardsProductos += `
    <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="card product-item border-0 mb-4">
                    <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img class="img-fluid w-100" src="img/product-8.jpg" alt="">
                    </div>
                    <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 class="text-truncate mb-3">${producto.titulo}</h6>
                        <div class="d-flex justify-content-center">
                            <h6>${producto.precio}</h6><h6 class="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light border">
                        <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a onclick ="agregarProductoAlCarrito(${producto.id})" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>`
})

document.getElementById('card-container').innerHTML = acumuladorCardsProductos;
}
generadorDeCards(productos);
//Filtrar categoria
const filtrarPorCategoria = (categoria) => {
    const listadoFiltrado = productos.filter((producto) => producto.categoria == categoria);
    generadorDeCards(listadoFiltrado)
}


//sección carrito




const agregarProductoAlCarrito = (id) => {
    const productoSeleccionado = productos.find((producto) => producto.id === id);
    carritoAcumulado.push(productoSeleccionado)
    const totalCarrito = carritoAcumulado.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    //Mostrar productos en el carrito
document.getElementById('total-carrito').innerHTML = carritoAcumulado.length + " - $" + totalCarrito;

}
let carritoAcumulado =[];




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
//ordenar por nombre



//Dom
//document.getElementById('carrito-total').innerHTML = carrito.reduce;

