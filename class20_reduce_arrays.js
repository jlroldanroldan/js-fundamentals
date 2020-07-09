var jorge = {
  nombre: 'Jorge',
  apellido: 'Roldan-Roldan',
  altura: 1.85,
  cantidadDeLibros: 180
}

var pedro = {
  nombre: 'pedro',
  apellido: 'asfasd',
  altura: 1.85,
  cantidadDeLibros: 153
}

var felipe = {
  nombre: 'Felipe',
  apellido: 'asfasd',
  altura: 1.90,
  cantidadDeLibros: 110
}

var carolina = {
  nombre: 'Carolina',
  apellido: 'asfasd',
  altura: 1.12,
  cantidadDeLibros: 87
}

var andres = {
  nombre: 'Andres',
  apellido: 'asfasd',
  altura: 1.60,
  cantidadDeLibros: 20
}

const esAlta = ({ altura }) => altura > 1.8

var personas = [jorge, pedro, felipe, carolina, andres] 

var personasAltas = personas.filter(esAlta)
// var personasAltas = personas.filter(function (persona) {
//   return persona.altura > 1.8
// })

// const pasarAlturaACms = persona => {
//   return {
//     ...persona, 
//     altura: persona.altura *= 100
//   } 
// }
var personas = [jorge, pedro, felipe, carolina, andres] 

const pasarAlturaACms = persona => ({
  ...persona, 
  altura: persona.altura *= 100
}) 


var personasCms = personas.map(pasarAlturaACms)


// var acum = 0

// for (var i = 0; i < personas.length; i++){
//   acum = acum + personas[i].cantidadDeLibros;
// }

// console.log(`En total todos tienen ${acum} libros`)

// Other way of doing the same but with reduce() function
// const reducer = (acum, persona) =>  acum + persona.cantidadDeLibros
const reducer = (acum, { cantidadDeLibros }) =>  acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)