var jorge = {
  nombre: 'Jorge',
  apellido: 'Roldan-Roldan',
  altura: 1.85
}

var pedro = {
  nombre: 'pedro',
  apellido: 'asfasd',
  altura: 1.85
}

var felipe = {
  nombre: 'Felipe',
  apellido: 'asfasd',
  altura: 1.90
}

var carolina = {
  nombre: 'Carolina',
  apellido: 'asfasd',
  altura: 1.12
}

var andres = {
  nombre: 'Andres',
  apellido: 'asfasd',
  altura: 1.60
}

const esAlta = ({ altura }) => persona.altura > 1.8

var personas = [jorge, pedro, felipe, carolina, andres] 

var personasAltas = personas.filter(esAlta)
// var personasAltas = personas.filter(function (persona) {
//   return persona.altura > 1.8
// })

console.log(personasAltas)