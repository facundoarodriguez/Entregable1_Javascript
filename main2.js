const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')



button.addEventListener('click', (element) => {
    element.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    console.log(data);
})

const cursor = document.getElementById('cursor');

setInterval(() => {
    cursor.classList.toggle('visible');
}, 500);






















/* let persona = 0
let personaJSON = 0

function Persona(nombre, apellido, edad) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad
    this.mostrarDatos = function() {
        console.log('Nombre:' +persona.nombre);
        console.log('Apellido:' +persona.apellido);
        console.log('Edad:' +persona.edad)
    }
}

function pedirDatos(){
    let nombreUsuario = prompt('Ingrese su nombre:')
    let apellidoUsuario = prompt('Ingrese su apellido:')
    let edadUsuario = parseInt(prompt('Ingrese su edad:'))

    persona = new Persona(nombreUsuario, apellidoUsuario, edadUsuario);

    /* persona.mostrarDatos(); */

/*   localStorage.setItem('Persona', JSON.stringify(persona));
}

function convertirDatos(){
    personaJSON = localStorage.getItem('persona')
    persona = JSON.parse(personaJSON)
    persona.mostrarDatos();
} */ 