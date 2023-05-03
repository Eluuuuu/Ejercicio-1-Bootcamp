const objeto = {
    nombre: "Eliana",
    apellido: "Cabral",
    edad: 22,
    altura: 1.72,
    isDeveloper: "true"
}

const edad = objeto.edad
console.log(edad)

const lista = [{
    nombre: "Eliana",
    apellido: "Cabral",
    edad: 22,
    altura: 1.72,
    isDeveloper: "true"
},

{
    nombre: "Candela",
    apellido: "Cabral",
    edad: 18,
    altura: 1.72,
    isDeveloper: "false"
},
{
    nombre: "Ivan",
    apellido: "Cabral",
    edad: 24,
    altura: 1.80,
    isDeveloper: "true"
}
]


const listaNueva= lista.sort((a,b)=> a.edad - b.edad)
console.log(listaNueva)
