function heradaDe(prototipoHijo, prototipoPadre) {
  var fn = function () {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
  // return this: We dont have to write "return this" it is implicit! when using "new" keyword. 
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.esAlta  = function () {
  return this.altura > 1.8
} 

function Desarrollador(nommbre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

heradaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

