//Agregar al carrito
const PRODUCTO1 = 'Notebook DELL';
const PRODUCTO2 = 'Notebook HP'
const PRODUCTO3 = 'Notebook Acer'

const agregarAlCarrito = (producto, precio, stock) => {
    const consultarStock = (stock) => {
        stockDisponible = 15;
        if (stockDisponible > 0) {
            const restarStock = () => {
                for (stockDisponible <= 15;stockDisponible <= 0; stockDisponible -= 1){
                    return alert('Producto agregado al carrito')  
                }
            }; 
            return restarStock()
        }else {
            return alert('Sin stock disponible')
        }
    };
    consultarStock()
};
agregarAlCarrito(PRODUCTO1, 200000, 15)




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