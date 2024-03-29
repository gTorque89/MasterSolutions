
//Declaración de variables globales
const carritoAcumulado = JSON.parse(localStorage.getItem('carrito')) || [];
const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
let productos = [];

//Listado de productos

const API_URL = './productos.json';
async function obtenerProductos() {
    productos = await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data);
    return productos;

}

//Generador de cards

function mostrarProductos(productos) {
    const listado = document.getElementById("card-container-ofertas");
    listado.innerHTML = "";
    
    productos.forEach((producto) => {
        const { titulo, precio, img, id } = producto;
        const productoHTML = `
        <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div class="card product-item border-0 mb-4">
                        <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img class="img-fluid w-100" src="${producto.img}" alt="${producto.titulo}">
                        </div>
                        <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 class="text-truncate mb-3">${producto.titulo}</h6>
                            <div class="d-flex justify-content-center">
                                <h6>${producto.precio}</h6><h6 class="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between bg-light border">
                            <a href="detail.html" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>Ver detalle</a>
                            <a onclick ="agregarProductoAFavoritos(${producto.id})" class="btn btn-sm text-dark p-0"><i class="fas fa-heart text-primary mr-1"></i>Añadir a favoritos</a>
                            <a onclick ="agregarProductoAlCarrito(${producto.id})" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                        </div>
                    </div>
                </div>`;
    listado.innerHTML += productoHTML;
    });
}

function escuchadorBotonMostrarProductos() {
    document.getElementById("mostrar-productos").addEventListener("click", async () => {
    productos = await obtenerProductos();
    mostrarProductos(productos);
    });
    
}
escuchadorBotonMostrarProductos();



//Filtrar categoria
    
const obtenerProductosPorCategoria = (categoria) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productosParaResolver = productos.filter((producto) => producto.categoria === categoria);
            resolve(productosParaResolver)
        }, 2000)
    })
} 

obtenerProductosPorCategoria('Laptops').then((productos) => {
    const nuevoListadoFiltrado = productos;
    generadorDeCards(nuevoListadoFiltrado)
})

//Sección agregar a favoritos
function popUpAgregasteAFavoritos () {
    Toastify({
        text: "Agregaste tu proxima compra a favoritos ",
        duration: 3000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #419ebe, #212529)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
}


function agregarProductoAFavoritos (id) {
    const favoritoSeleccionado = productos.find((producto) => producto.id === id);
    favoritos.push(favoritoSeleccionado)
    
    localStorage.setItem('favoritos', JSON.stringify(favoritos))

    popUpAgregasteAFavoritos()
    actualizarDomFavoritos ()
    cardsFavoritos(favoritos)
};


function actualizarDomFavoritos () {
    let totalFavoritos = favoritos.reduce((acumulador, producto) => acumulador + producto, 0);
    document.getElementById('total-favoritos').innerHTML = favoritos.length + " - Fav";
}

function eliminarItemDeFavorito (id) {
    const favoritoSeleccionado = favoritos.findIndex((producto) => producto.id === id);
    favoritos.splice(favoritoSeleccionado, 1);
    let totalFavoritos = favoritos.reduce((acumulador, producto) => acumulador - producto, 0);
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
    document.getElementById('total-favoritos').innerHTML = favoritos.length + " - Fav";
    
    const btnEliminarItemDeFavorito = document.getElementById('eliminar-item');
    
    btnEliminarItemDeFavorito.onclick = () => {
        eliminarItemDeFavorito(id)
    };  
    cardsFavoritos()
    actualizarDomFavoritos() 
}
function cardsFavoritos() {
    let acumuladorCardsFavoritos = ``;
    favoritos.forEach((producto) => {
    acumuladorCardsFavoritos += `              
                        <tr>
                            <td class="align-middle"><img src="${producto.img}" alt="${producto.titulo}" style="width: 50px;">${producto.titulo}</td>
                            <td class="align-middle">$${producto.precio}</td>
                            <td class="align-middle"><button  onclick="eliminarItemDeFavorito(${producto.id}) "id="eliminar-item" class="btn btn-sm btn-primary" id="eliminar-item" ><i class="fa fa-times"></i></button></td>
                        </tr>
                        `
    //DOM cards de modal                  
    document.getElementById('tarjeta-detalle-favoritos').innerHTML = acumuladorCardsFavoritos;
    const btnEliminarItemDeCarrito = document.getElementById('eliminar-item');
    
    btnEliminarItemDeCarrito.onclick = () => {
        eliminarItemDeFavorito()
    };   
    })
}
cardsFavoritos()




//Sección agregar al carrito

function popUpAgregasteAlCarrito () {
    Toastify({
        text: "Agregaste un producto al carrito",
        duration: 3000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #419ebe, #212529)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
}

function agregarProductoAlCarrito(id) {
    const productoSeleccionado = productos.find((producto) => producto.id === id);
    carritoAcumulado.push(productoSeleccionado)
    
    localStorage.setItem('carrito', JSON.stringify(carritoAcumulado))

    popUpAgregasteAlCarrito()
    actualizarDomCarrito()  
}

function actualizarDomCarrito() {
    const subtotalCarrito = carritoAcumulado.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    const totalCarrito = carritoAcumulado.reduce((acumulador, producto) => acumulador + producto.precio, 500);
    document.getElementById('subtotal-carrito').innerHTML = " $" + subtotalCarrito;
    document.getElementById('total-carrito-modal').innerHTML = " $" + totalCarrito;
    document.getElementById('total-carrito').innerHTML = carritoAcumulado.length + " - $" + subtotalCarrito;
}   
    actualizarDomCarrito()

const eliminarItemDeCarrito = (id) => {

    const productoSeleccionado = carritoAcumulado.findIndex((producto) => producto.id === id);
    carritoAcumulado.splice(productoSeleccionado, 1);
    const totalCarrito = carritoAcumulado.reduce((acumulador, producto) => acumulador - producto.precio, 0);
    document.getElementById('total-carrito').innerHTML = carritoAcumulado.length + " - $" + totalCarrito;

    const btnEliminarItemDeCarrito = document.getElementById('eliminar-item');
    btnEliminarItemDeCarrito.onclick = () => {
        eliminarItemDeCarrito(id)
    };
    localStorage.setItem('carrito', JSON.stringify(carritoAcumulado))
    cardsCarrito()
    actualizarDomCarrito()
}
//Función para cargar cards en el modal 
function cardsCarrito() {
    let acumuladorCardsModal = ``;
    carritoAcumulado.forEach((producto) => {
    acumuladorCardsModal += `              
                        <tr>
                            <td class="align-middle"><img src="${producto.img}" alt="${producto.titulo}" style="width: 50px;">${producto.titulo}</td>
                            <td class="align-middle">$${producto.precio}</td>
                            <td class="align-middle"><button  onclick="eliminarItemDeCarrito(${producto.id}) "id="eliminar-item" class="btn btn-sm btn-primary" id="eliminar-item" ><i class="fa fa-times"></i></button></td>
                        </tr>
                        `
    //DOM cards de modal                  
    document.getElementById('tarjeta-detalle').innerHTML = acumuladorCardsModal;
    const btnEliminarItemDeCarrito = document.getElementById('eliminar-item');
    
    btnEliminarItemDeCarrito.onclick = () => {
        eliminarItemDeCarrito()
    };   
    })
}
cardsCarrito(carritoAcumulado)

//Abrir modal de carrito /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    const btnAbrirModal = document.getElementById('abrir-modal');
    const btnCerrarModal = document.getElementById('cerrar-modal');
    const modal = document.getElementById('modal-carrito');
    
    

    btnAbrirModal.addEventListener("click", () => {
        modal.showModal();
        actualizarDomCarrito()
        cardsCarrito(carritoAcumulado)
    })

    btnCerrarModal.addEventListener('click', () => {
        modal.close();
        
    })

//Abrir modal de favoritos ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const btnAbrirFavoritos = document.getElementById('abrir-favoritos');
const btnCerrarFavoritos = document.getElementById('cerrar-modal-favoritos');
const modalFavoritos = document.getElementById('modal-favoritos');

btnAbrirFavoritos.addEventListener('click', () => {
    modalFavoritos.showModal();
    actualizarDomFavoritos()
    cardsFavoritos()
})

btnCerrarFavoritos.addEventListener('click', () => {
    modalFavoritos.close()
    cardsCarrito()
})



function ordenarPrecio() {
const ordenarPorPrecio = productos.sort((a, b) => {
    if (a.precio > b.precio) {
        return 1;
    }
    if (a.precio < b.precio) {
        return -1;
    }
    return 0;
})
}
