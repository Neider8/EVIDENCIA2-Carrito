/** 
 * SELECTORES DOM
*/
const vaciarCarrito = document
    .querySelector("#vaciar-carrito")

const listaCursos = document
    .querySelector("#lista-cursos")

const carrito = document
    .querySelector("#carrito")

const contenedorCarrito =document
    .querySelector("#lista-carrito tbody")


/**
 * FUNCIONES DEL CARRITO
 */

function leerDatosCurso(curso){

    //crear objeto curso
    const cursoElegido = {
        nombre : curso.children[0].textContent,
        precio : curso.children[3].textContent,
        imagen : curso.children[2]
    }

    console.log(cursoElegido)

}

//Crear evento para click instaCursos:
const agregarCurso = function(evt){
    evt.preventDefault()
    if(evt.target.classList.contains("button-primary")){
        
        console.log("...agregando al carrito")
        leerDatosCurso(evt.target.parentElement)

    }
}

listaCursos.addEventListener("click", agregarCurso)
console.log(listaCursos)
