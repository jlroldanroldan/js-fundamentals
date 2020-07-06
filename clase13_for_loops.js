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

const aumentarDePeso = (persona, incremento) => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO 

for (var i = 1; i < DIAS_DEL_ANO; i++){
  var random = Math.random()
  if (random < 0.25) {
    aumentarDePeso(sasha)
  } else if (random < 0.5) {
    adelgazar(sasha) 
  }
}

console.log(`Al final del año ${sasha.nombre} pesa ${sasha.peso.toFixed(1)} kg`)