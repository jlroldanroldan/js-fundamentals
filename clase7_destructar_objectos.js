var sacha = {
  nombre: 'Sasha',
  apellido: 'Lifszyc',
  edad: 28
} 

var dario = {
  nombre: 'Dario',
  apellido: 'Susniskyk',
  edad: 27
}

function imprimirNombreEnMinusculas(persona) {
  var nombre = persona.nombre
  // var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMinusculas(sacha)
imprimirNombreEnMinusculas(dario)


function imprimirNombreYEdad(persona){
  var { nombre } = persona 
  var { edad } = persona 
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(sacha)
imprimirNombreYEdad(dario)