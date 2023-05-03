const compra = ["banana", "manzana", "pera", "naranja", "limon"]

compra.push("Aceite de Girasol")

// console.log(compra)

compra.splice(5)

// console.log(compra)

const peliculas = [
    {
        titulo: "tres metros sobre el cielo",
        director: "Marquez",
        fecha: 2009

    },

    {
        titulo: "Hachi",
        director: "Unknown",
        fecha: 2001

    },

    {
        titulo: "Esperanza mia",
        director: "Tele",
        fecha: 2015

    }
]

const filtradoPeliculas=peliculas.filter(ob=> ob.fecha < 2010)
// console.log(filtradoPeliculas)


const filtradorDirector=peliculas.map(obj=> obj.director)
// console.log(filtradorDirector)

const filtradorTitulos=peliculas.map(obj=> obj.titulo)
// console.log(filtradorTitulos)

const concatenacionArrays= filtradorDirector.concat(filtradorTitulos)
// console.log(concatenacionArrays)

const nuevaLista= [...filtradorDirector, ...filtradorTitulos]

console.log(nuevaLista)

