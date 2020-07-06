var sasha = {
  nombre: 'Sasha',
  apellido: 'Lifszyc',
  edad: 28,
  peso: 75
}

console.log(`Al inicio del año ${sasha.nombre} pesa ${sasha.peso} kg`)

// function aumentarDePeso(persona) {
//   return persona.peso += 200
// }

const INCREMENTO_PESO = 0.2 
const DIAS_DEL_ANO = 365 

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO 
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = sasha.peso - 3
var dias = 0

while (sasha.peso > META) { 
  // debugger
  if (comeMucho()) {
    aumentarDePeso(sasha)  
  }

  if (realizaDeporte()){
    adelgazar(sasha)
  }
  dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${sasha.nombre} adelgazo 3kg.`)