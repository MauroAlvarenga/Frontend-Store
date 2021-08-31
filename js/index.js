const productos = document.querySelectorAll(".producto")

const enviarProducto = (producto) => {
    sessionStorage.setItem("producto", producto)
}

window.addEventListener('DOMContentLoaded', e => {
    console.log('DOM fully loaded and parsed');
    //recorrer la lista de productos
    //el bucle for se elige aproposito, para enviar el numero de producto
    for (let i = 0; i < productos.length ; i++) {
        const element = productos[i];
        element.addEventListener('click', e => {
            enviarProducto(i+1)
        });
    }

});