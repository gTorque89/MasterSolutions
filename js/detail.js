function mostrarProducto(producto) {
    const productoMostrado = document.getElementById("detalle-producto");
    productoMostrado.innerHTML = ``;

    
}


`<div class="col-lg-5 pb-5">
<div id="product-carousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner border">
        <div class="carousel-item active">
            <img class="w-100 h-100" src="img/product-1.jpg" alt="Image">
        </div>
        <div class="carousel-item">
            <img class="w-100 h-100" src="img/product-2.jpg" alt="Image">
        </div>
    </div>
    <a class="carousel-control-prev" href="#product-carousel" data-slide="prev">
        <i class="fa fa-2x fa-angle-left text-dark"></i>
    </a>
    <a class="carousel-control-next" href="#product-carousel" data-slide="next">
        <i class="fa fa-2x fa-angle-right text-dark"></i>
    </a>
</div>
</div>
<div class="col-lg-7 pb-5">
<h3 class="font-weight-semi-bold">Colorful Stylish Shirt</h3>
<div class="d-flex mb-3">
    <div class="text-primary mr-2">
        <small class="fas fa-star"></small>
        <small class="fas fa-star"></small>
        <small class="fas fa-star"></small>
        <small class="fas fa-star-half-alt"></small>
        <small class="far fa-star"></small>
    </div>
    <small class="pt-1">(50 Reviews)</small>
</div>
<h3 class="font-weight-semi-bold mb-4">$150.00</h3>
<p class="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.</p>
<div class="d-flex align-items-center mb-4 pt-2">
    <div class="input-group quantity mr-3" style="width: 130px;">
        <div class="input-group-btn">
            <button class="btn btn-primary btn-minus" >
            <i class="fa fa-minus"></i>
            </button>
        </div>
        <input type="text" class="form-control bg-secondary text-center" value="1">
        <div class="input-group-btn">
            <button class="btn btn-primary btn-plus">
                <i class="fa fa-plus"></i>
            </button>
        </div>
    </div>
    <button class="btn btn-primary px-3"><i class="fa fa-shopping-cart mr-1"></i>Agregar al carrito</button>
</div>`