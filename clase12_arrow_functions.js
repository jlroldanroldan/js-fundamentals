var sacha = { 
  nombre: 'Sasha',
  apellido: 'Lifszyc',
  edad: 28,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  drone: true
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 13
}

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es:`)

  if (persona.ingeniero === true){
    console.log('Ingeniero')
  } else {
    console.log('No es ingeniero')
  }

  if (persona.cocinero === true){
    console.log('Cocinero')
  }

  if (persona.dj === true){
    console.log('DJ')
  }

  if (persona.cantante === true){
    console.log('Cantante')
  }

  if (persona.guitarrista === true){
    console.log('Guitarrista')
  }

  if (persona.drone === true){
    console.log('Vuela drone')
  }
}

const MAYORIA_DE_EDAD = 18

// FUNCTION esMajorEdad - 1 WAY
// const esMajorDeEdad = function (persona){
//   return persona.edad >= MAYORIA_DE_EDAD 
// }

// FUNCTION esMajorEdad - 2 WAY
// const esMayorDeEdad = (persona) => {
//   return persona.edad >= MAYORIA_DE_EDAD 
// }

// FUNCTION esMajorEdad - 3 WAY
// const esMayorDeEdad = persona => {
//   return persona.edad >= MAYORIA_DE_EDAD 
// }

// FUNCTION esMajorEdad - 4 WAY
// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD 

// FUNCTION esMajorEdad - 5 WAY
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD 

function imprimirSiEsMajorDeEdad(persona){
  if (esMayorDeEdad(persona)){
    console.log(`${persona.nombre} es major de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

function permitirAcceso(persona) {
  if (!esMayorDeEdad(persona)){
    console.log('ACCESO DENEGADO')
  }
}