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

function imprimirNombreEnMinusculas({ nombre }) {
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMinusculas(sasha)
imprimirNombreEnMinusculas(dario)
imprimirNombreEnMinusculas({ nombre: 'Pepito'})