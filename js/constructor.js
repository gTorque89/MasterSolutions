//Nuevo algoritmo aplicando lo visto hasta ahora en el curso
class Empresa {
    constructor(nombre, anioDeCreacion, fundador) {
        this.nombre = nombre;
        this.anioDeCreacion = anioDeCreacion;
        this.fundador = fundador;

        this.cuentas =[];
    }
    agregarCuenta(cuenta){
        this.cuentas.push(cuenta);
    }
}

class Usuarios {
    constructor(nombreTitular, fechaIngreso, cantidadDeCompras){
        this.nombreTitular = nombreTitular;
        this.fechaIngreso = fechaIngreso;
        this.cantidadDeCompras = cantidadDeCompras;

        this.historialDeCompras = [];
    }
    historialDeCompras(compras){
        this.compras.push(compras)
    }
}

class Productos {
    constructor(producto, id, precio, descuentos, tipoDeProducto, stock) {
        this.producto = producto;
        this.id = id;
        this.precio = precio;
        this.descuentos = descuentos;
        this.tipoDeProducto = tipoDeProducto;
        this.stock = stock;

        this.productos = [];
    }
    listadoDeProductos(productos){
        this.productos.push(productos)
    }
}
//Creación de listado de productos

const producto1 = new Productos('Laptop DELL', 01, 180000, 2, 'Laptops', 15 );
const producto2 = new Productos('Laptop HP', 02, 190000, 3, 'Laptops', 20 );
const producto3 = new Productos('Laptop Acer', 03, 225000, 0, 'Laptops', 10);
const producto4 = new Productos('Laptop Asus', 04, 280000, 4, 'Laptops', 15);
const producto5 = new Productos('Laptop Lenovo', 05, 150000, 3, 'Laptops', 12);
const producto6 = new Productos('Laptop Exo', 06, 175000, 2, 'Laptops',18);
const producto7 = new Productos('Laptop Banghó', 07, 240000, 5, 'Laptops', 25);
const producto8 = new Productos('Laptop Alienware', 08, 320000, 6, 'Laptops', 10)

//Agregar productos al listado


const productos = Productos.listadoDeProductos(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8)

class Carrito{
    constructor(id, producto, precio, descuentos){
        this.id = id;
        this.producto = producto;
        this.precio = precio;
        this.descuentos = descuentos;
        
        this.productosEnElCarrito = [];
    }
}
//Creación de la empresa
const masterSolutions = new Empresa('Master Solutions', 2015,'Victor Gabriel Leguizamón');

//Creación de usuarios
const usuario1 = new Usuarios('Victor Gabriel Leguizamón', 2018, 5);
const usuario2 = new Usuarios('Mora Leguizamón',2021, 2)
const usuario3 = new Usuarios('Nahiara Leguizamón', 2019, 10)

//Agregar cuentas de usuario
masterSolutions.agregarCuenta(usuario1);
masterSolutions.agregarCuenta(usuario2);  
masterSolutions.agregarCuenta(usuario3);

console.log(masterSolutions)


//Algoritmo de cuentas con descuentos basados en el historial de compras que efectuó el usuario

/*let cuentasConDescuentos = Empresa.cuentas.forEach(historialDeCompras => {
    if (historialDeCompras.length > 3){
        descuento = 15;
    }else{
        descuento = 6;
    }
})
*/


/*
const IVA = 1.21;

class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }

  calcularPrecio() {
    return this.precio * IVA;
  }
}

const producto1 = new Producto("1","Leche", 100);
const producto2 = new Producto("2","Cerveza", 200);
const producto3 = new Producto("3", "Jugo", 300);

const productos = [producto1, producto2, producto3];
let carrito = []

function agregarProductoAlCarrito(id) {
  //  buscar producto en el arreglo de producto y agregarlo al carrito
  const productoEncontrado = productos.find(producto => producto.id == id)
  carrito.push(productoEncontrado)
}

function mostrarCarritoActual() {
  // 
}

function confirmarCompra() {
  const respuesta = prompt("¿Desea comprar algo?\n1) Si \n2) No");
  if (respuesta == "1") {
    return true;
  } else {
    return false;
  }
}

function mostrarProductos() {
  let menuAMostrar = "¿Que producto desea comprar?\n";
  productos.forEach(producto => {
    menuAMostrar += `${producto.id}) ${producto.nombre} - ${producto.precio}\n`;
  })
  let respuesta = prompt(menuAMostrar);
  return respuesta;
}

function comprarProducto() {
  while (confirmarCompra()) {
    let productoSeleccionado = mostrarProductos();
    //  Ahora que eligio un producto queremos agregarlo al carrito
    agregarProductoAlCarrito(productoSeleccionado);
    console.log(carrito);
    //  Ahora que agrego el carrito quiero ver lo que fue comprando
    mostrarCarritoActual();
  }
}

comprarProducto();
*/
