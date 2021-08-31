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

window.addEventListener('DOMContentLoaded', e => {

    if(sessionStorage.getItem("producto")) {

        let producto = sessionStorage.getItem("producto")
        let stringSrc = "./img/" + producto + ".jpg"
        document.querySelector('h1').innerHTML = productos[producto]
        document.querySelector(".camisa__imagen").src = stringSrc
        
    }

    sessionStorage.clear()
});