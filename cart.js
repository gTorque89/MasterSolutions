//Lista de productos ficticios
let productos = [
    {titulo: 'Laptop DELL', id: 01, precio: 180000, categoria: 'Laptops', stock: 20, img: "./img/productsStart/notebookDell.webp", descuento: 8},
    {titulo: 'Laptop HP', id: 02, precio: 190000, categoria: 'Laptops', stock: 15, img: './img/productsStart/notebookHp.jpg', descuento: 5},
    {titulo: 'Laptop Acer', id: 03, precio: 225000, categoria: 'Laptops', stock: 10, img: './img/productsStart/notebookAcer.webp', descuento: 6},
    {titulo: 'Laptop Asus', id: 04, precio: 280000, categoria: 'Laptops', stock: 12, img: './img/productsStart/notebookAsus.webp', descuento: 2},
    {titulo: 'Laptop Lenovo', id: 05, precio: 150000, categoria: 'Laptops', stock: 18, img: './img/productsStart/notebookLenovo.jpg', descuento: 4},
    {titulo: 'Laptop Exo', id: 06, precio: 175000, categoria: 'Laptops', stock: 15, img: './img/productsStart/notebookExo.webp', descuento: 8},
    {titulo: 'Laptop Banghó', id: 07, precio: 240000, categoria: 'Laptops', stock: 25, img: './img/productsStart/notebookBangho.jpg', descuento: 9},
    {titulo: 'Laptop Alienware', id: 08, precio: 320000, categoria: 'Laptops', stock: 10, img: './img/productsStart/notebookAlienware.jpg', descuento: 12}
];

//Carrito
const agregarProductoAlCarrito = (id) => {
    let carrito = [];

    const productoSeleccionado = productos.find((producto) => producto.id === id);
    carrito.push(productoSeleccionado)
    const totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);

    localStorage.setItem('carrito', JSON.stringify(carrito))

document.getElementById('total-carrito').innerHTML = carrito.length + " - $" + totalCarrito;
}
agregarProductoAlCarrito()

const eliminarDelCarrito = () => {
    
}

//Generador de cards carrito

const cardsCarrito = () => {
    let acumuladorCardsProductos = ``;
    productos.forEach((producto) => {
        acumuladorCardsProductos += `              
                            <tr>
                                <td class="align-middle"><img src="${producto.img}" alt="${producto.titulo}" style="width: 50px;">${producto.titulo}</td>
                                <td class="align-middle">$${producto.precio}</td>
                                <td class="align-middle">
                                    <div class="input-group quantity mx-auto" style="width: 100px;">
                                        <div class="input-group-btn">
                                            <button class="btn btn-sm btn-primary btn-minus" >
                                            <i class="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text" class="form-control form-control-sm bg-secondary text-center" value="1">
                                        <div class="input-group-btn">
                                            <button class="btn btn-sm btn-primary btn-plus">
                                                <i class="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td class="align-middle">$${producto.precio}</td>
                                <td class="align-middle"><button class="btn btn-sm btn-primary"><i class="fa fa-times"></i></button></td>
                            </tr>
                            `
        
            
        
        document.getElementById('tarjeta-detalle').innerHTML = acumuladorCardsProductos;
        })
}                        
cardsCarrito(productos) 