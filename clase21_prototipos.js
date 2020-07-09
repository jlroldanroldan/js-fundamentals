function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
  // return this: We dont have to write "return this" it is implicit! when using "new" keyword. 
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.esAlta  = function() {
  if (this.altura >= 1.8){
    console.log(`${this.nombre} ${this.apellido} es alta y mide ${this.altura} m`)
  } else {
    console.log(`${this.nombre} ${this.apellido} no es alt@ porque mide ${this.altura} m`)
  }
}


var sasha = new Persona('Sasha', 'Lifszyc', '1.82')
var erika = new Persona('Erika', 'Luna', '1.80' )
var arturo =  new Persona('Arturo', 'Martinez', '1.62')