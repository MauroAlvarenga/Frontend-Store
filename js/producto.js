const productos = {
    "1": "VueJS",
    "2": "AngularJS",
    "3": "ReactJS",
    "4": "Redux", 
    "5": "NodeJS",
    "6": "SASS",
    "7": "HTML5",
    "8": "GitHub",
    "9": "BulmaCSS",
    "10": "TypeScript",
    "11": "Drupal",
    "12": "JavaScript",
    "13": "GraphQL",
    "14": "WordPress"
}

const precio = document.querySelector(".camisa__precio")
const cantidad = document.querySelector("#cantidad")
const agregar = document.querySelector(".formulario__submit")

const actualizarPrecio = (valorActual) => {
    let nuevoPrecio = valorActual * 25
    precio.innerHTML = "$" + nuevoPrecio
}

window.addEventListener('DOMContentLoaded', e => {

    if(sessionStorage.getItem("producto")) {

        let producto = sessionStorage.getItem("producto")
        let stringSrc = "./img/" + producto + ".jpg"
        document.querySelector('h1').innerHTML = productos[producto]
        document.querySelector(".camisa__imagen").src = stringSrc

    }

    cantidad.addEventListener('input', e => {
        actualizarPrecio(cantidad.value)
    })

    agregar.addEventListener('click', e => {
        e.preventDefault()
        swal({
            title: "Agregado al Carrito!",
            text: "Agregaste cosas al carro!",
            icon: "success",
          });
    })

    sessionStorage.clear()
});