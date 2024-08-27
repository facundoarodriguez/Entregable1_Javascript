let persona = 0
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

    localStorage.setItem('Persona', JSON.stringify(persona));
}

function convertirDatos(){
    personaJSON = localStorage.getItem('persona')
    persona = JSON.parse(personaJSON)
    persona.mostrarDatos();
}