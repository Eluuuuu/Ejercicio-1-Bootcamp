const fecha1= new Date()
console.log(fecha1)

const fecha2=new Date(2001,03,21)
console.log(fecha2)

const comparacion= fecha1.getTime() > fecha2.getTime()
console.log(comparacion)

console.log(fecha2.getDate())
console.log(fecha2.getMonth())
console.log(fecha2.getFullYear())
