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

var personas = [jorge, pedro, felipe, carolina, andres]

for (var i = 0; i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts.`)
}