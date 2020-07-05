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


imprimirProfesiones(sacha)