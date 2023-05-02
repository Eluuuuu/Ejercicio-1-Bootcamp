const nombre= "Eliana";
const apellido="Cabral";


const estudiante=`${nombre} ${apellido}`

console.log(estudiante)

const mayus= estudiante.toLocaleUpperCase()

console.log(mayus)

const minus= estudiante.toLocaleLowerCase()

console.log(minus)

const numLetras= estudiante.length

console.log(numLetras)

const primeraLetraNombre= nombre.charAt(0)

console.log(primeraLetraNombre)

const ultimaLetraApellido= apellido.charAt(5)

 console.log(ultimaLetraApellido)

const noEspacios= estudiante.trim()
const result= noEspacios.length

console.log(result)

const boolean= estudiante.includes(nombre)

console.log(boolean)

