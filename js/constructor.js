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
    constructor(producto, id, precio, descuentos, tipoDeProducto) {
        this.producto = producto;
        this.id = id;
        this.precio = precio;
        this.descuentos = descuentos;
        this.tipoDeProducto = tipoDeProducto;
    
        this.carrito = [];
    }
    
    
}
//Creación de la empresa
const masterSolutions = new Empresa('Master Solutions', 2022,'Victor Gabriel Leguizamón');

//Creación de usuarios
const usuario1 = new Usuarios('Victor Gabriel Leguizamón', 2018, 5);
const usuario2 = new Usuarios('Mora Leguizamón',2021, 2)
const usuario3 = new Usuarios('Nahiara Leguizamón', 2019, 10)

//Agregar cuentas de usuario
masterSolutions.agregarUsuario(usuario1);
masterSolutions.agregarUsuario(usuario2);  
masterSolutions.agregarUsuario(usuario3);

console.log(masterSolutions)


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
