//Agregar al carrito




const productosEnElCarrito = [];

const productosHot = [
    {id: 01, producto1:'Notebook DELL', precio: 180000, hayStock: 15},
    {id: 02, producto2:'Notebook HP', precio: 190000, hayStock: 15},
    {id: 03, producto3:'Notebook Acer', precio: 225000, hayStock: 15},
    {id: 04, producto4:'Notebook Asus', precio: 280000, hayStock: 15},
    {id: 05, producto5:'Notebook Lenovo', precio: 150000, hayStock: 15},
    {id: 06, producto6:'Notebook Exo', precio: 175000, hayStock: 15},
    {id: 07, producto7:'Notebook Banghó', precio: 240000, hayStock: 15},
    {id: 08, producto8:'Notebook Alienware', precio: 320000, hayStock: 15},


];


function agregarAlCarrito(idDeProducto) {
    const indiceEncontrado = productosHot.findIndex(producto => producto.id == idDeProducto);
    productosEnElCarrito.push(productosHot[indiceEncontrado]);

    console.log('Tenes ' + productosEnElCarrito.length + 'en el carrito');
    console.log(productosEnElCarrito)
    
}

const validarStock = (hayStock) => {
    
    if (hayStock > 0) {
        return true;
    } else {
        return false;
    }
}

/*function agregarAlCarrito() {
    
    validarStock(hayStock);
    if(hayStock){
        actualizarCarrito();
        restarStock();
        return alert(`Agregaste ${producto} a tu carrito`)
        
    }else{
        alert(`Lo lamentamos, pero no contamos con ${producto}, seguro podemos ofrecerte otra solución`)
    }

}
*/
