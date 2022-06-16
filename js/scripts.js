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

let acumulador = ``;
for (let i = 0;i < 1; i++ ){
    if(productosHot[i].hayStock) {
        acumulador += `<div class="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div class="card product-item border-0 mb-4">
            <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img class="img-fluid w-100" src="img/productsStart/notebookDell.webp" alt="notebook DELL">
            </div>
            <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">${productosHot[i].titulo}</h6>
                <div class="d-flex justify-content-center">
                    <h6>$190000</h6><h6 class="text-muted ml-2"><del>$${productosHot[i].precio}</del></h6>
                </div>
            </div>
            <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>Ver detalle</a>
                <a href="" onclick ="agregarAlCarrito(${productosHot[i].id})" class="btn btn-sm text-dark p-0" ><i  class="fas fa-shopping-cart text-primary mr-1"></i>Agregar al carrito</a>
            </div>
        </div>`
    }
}
document.write(acumulador)

function agregarAlCarrito(idDeProducto) {
    console.log(idDeProducto);
    productosHot.indexOf()
    productosEnElCarrito.push(idDeProducto);
}





/*const validarStock = (hayStock) => {
    
    if (hayStock > 0) {
        return true;
    } else {
        return false;
    }
}
*/

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

/*function agregarAlCarrito(idDeProducto){
    const indiceEncontrado = productos.findIndex(producto => producto.id == idDeProducto);
    productosEnElCarrito.push(productos[indiceEncontrado]);
    console.log(productosEnElCarrito);
}

// nombreDelArray.reverse();
*/