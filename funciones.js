const funcion=(a = true)=>{
console.log(a)
}

funcion()

 const promesaCumplida=true
 const miPromesa= new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        if (promesaCumplida){
            resolve ('Hola soy una promesa')
        }else{
            reject ('Promesa rechazada')
        }
    },5000)
    
})
miPromesa.then((valor)=>{
    console.log(valor)
})



function* generarIndicesPares(){
    let indicePares=0
    while(true){
        indicePares= indicePares+2
        if(indicePares === 10){
            return
        } yield indicePares
    }

}


const gen=generarIndicesPares()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
