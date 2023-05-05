class Estudiante{
    constructor(nombre,asignaturas){
        this.nombre=nombre
        this.asignaturas=asignaturas
    }
    obtenDatos(){
        console.log(`Hola mi nombre es ${this.nombre} y estudio las siguientes asignaturas:  ${this.asignaturas}`)
    }
    
}


const student=new Estudiante("Eliana", ["Javascript", "HTML","CSS"])
console.log(student.obtenDatos())
