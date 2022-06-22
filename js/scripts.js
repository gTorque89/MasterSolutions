//Función para aplicar descuento de 10 off
function descuento10Off(){
    let descuento = 10 / 100;
    return descuento * precio;
}

//Función para crear productos

class Productos {
    constructor(nombre, id, precio, descuentos, tipoDeProducto, stock){
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.descuentos = descuentos;
        this.tipoDeProducto = tipoDeProducto;
        this.stock = stock;
    }
    calcularPrecio() {
        return this.precio - descuento10Off();
    }

}

//listado de productos

const producto1 = new Productos('Laptop DELL', 01, 180000, 2, 'Laptops', 15 );
const producto2 = new Productos('Laptop HP', 02, 190000, 3, 'Laptops', 20 );
const producto3 = new Productos('Laptop Acer', 03, 225000, 0, 'Laptops', 10);
const producto4 = new Productos('Laptop Asus', 04, 280000, 4, 'Laptops', 15);
const producto5 = new Productos('Laptop Lenovo', 05, 150000, 3, 'Laptops', 12);
const producto6 = new Productos('Laptop Exo', 06, 175000, 2, 'Laptops',18);
const producto7 = new Productos('Laptop Banghó', 07, 240000, 5, 'Laptops', 25);
const producto8 = new Productos('Laptop Alienware', 08, 320000, 6, 'Laptops', 10);

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8];

//sección carrito

let carrito =[];

const agregarProductoAlCarrito = (id) => {
    const productoEncontrado = productos.find(producto => producto.id == id)
    carrito.push(productoEncontrado)
}

//mostrar productos en el carrito

const mostrarCarritoActual = () => {
    alert(`Agregaste \n al carrito`)
}
const mostrarProductos = () => {
    let productosAMostrar = '¿Que computadora desea elegir?\n';
    productos.forEach(producto => {
        productosAMostrar += `${producto.id}) ${producto.nombre} - ${producto.precio}\n`
    })
    let respuesta = prompt(productosAMostrar);
    return respuesta;
}

const confirmarCompra = () => {
    const respuesta = prompt('Desea agragar productos al carrito?');
    if (respuesta == '1' || respuesta == 'Si' || respuesta == 'SI' || respuesta == 'si') {
        return true;
    } else {
        return false;
    }
}

const comprarProducto  = () => {
    while (confirmarCompra()) {
        let productoSeleccionado = mostrarProductos();
        agregarProductoAlCarrito(productoSeleccionado);
        console.log(carrito);
        mostrarCarritoActual();

    }
}

comprarProducto();