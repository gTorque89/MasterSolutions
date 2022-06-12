//Agregar al carrito
const productosHot = [
    {producto1:'Notebook DELL', precio: 180000, hayStock: 15},
    {producto2:'Notebook HP', precio: 190000, hayStock: 15},
    {producto3:'Notebook Acer', precio: 220000, hayStock: 15}
];

const validarStock = (hayStock) => {
    
    if (hayStock > 0) {
        return true;
    } else {
        return false;
    }
}

/*let acumulador = 0;
for (let i = 0; i < 2; i++) {
    if(productosHot[i].hayStock){
        acumulador += 1;
    }
}
*/
const actualizarCarrito = (carrito) => {
    
}

const restarStock = () => {

}

function agregarAlCarrito(producto, precio, hayStock) {
    validarStock(hayStock);
    if(hayStock){
        actualizarCarrito();
        restarStock();
        return alert(`Agregaste ${producto} a tu carrito`)
    }else{
        alert(`Lo lamentamos, pero no contamos con ${producto}, seguro podemos ofrecerte otra solución`)
    }

}



//actualizarCarrito
//restarStock
//validarStock


/*const productosEnElCarrito = [];

const productos = [
    {id:1, titulo:'Zapatilla niky', precio: 900, hayStock: true},
    {id:2, titulo:'Zapatilla Adidas', precio: 200, hayStock:false},
    {id:3, titulo:'Zapatilla Jagguar', precio: 200, hayStock:false}
];

let acumulador = ``;
for (let i = 0; i < productos.length; i++){
    acumulador += `<div>
    ${productos[i].titulo} - $${productos[i].precio}<br>
        <button onclick="agregarAlCarrito(${productos[i].id})">Agregar</button>
    </div>`;
}
document.write(acumulador);


function agregarAlCarrito(idDeProducto){
    const indiceEncontrado = productos.findIndex(producto => producto.id == idDeProducto);
    productosEnElCarrito.push(productos[indiceEncontrado]);
    console.log(productosEnElCarrito);
}

// nombreDelArray.reverse();
*/