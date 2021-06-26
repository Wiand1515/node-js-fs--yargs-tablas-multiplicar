//Usamos esta constante para acceder al file system
const fs = require('fs');
//Nuestra funcion la volvemos asincrona con la palabra reservada "async",de esta menera podemos trabajar como si retornara una promesa por defecto.
const colors = require('colors');

const tabla = async(number, listar, times) => {
        //En nuestro bloque de codigo Catch, ejecutamos la parte positiva del codigo
        try {
            
            if(listar !== true ) {
                return `tabla-${number}.txt creada`
            } else{ 

            console.log("============================");
            console.log(`         Tabla del ${number}  `);
            console.log("============================");
            
            //Asignamos salida a un string vacio, para luego concatenar con el resultado que tendremos dentro del ciclo for
            let salida = "", 
            consola = "";
            
        
        
            for(let i = 1; i <= times; i++){
                //Concatenamos a salida el resultado de la funcion (en este caso imprimir una tabla de multiplicar), para luego pasarla a nuestra funcion del fs.
                salida +=`${number} x ${i} = ${number * i}\n`
                consola +=` ${colors.blue(number)} ${"x".green} ${colors.blue(i)} ${"=".red} ${colors.blue(number * i)}\n `
            }
            
        
        
        
            
            console.log(consola);
            
            //Ejecutamos la funcion, fs la cual recibe como argumento, el nombre del archivo y como segundo argumento lo que contendra el mismo
            fs.writeFileSync( `./salida/tabla-${number}.txt`, salida);
        

            
            return `tabla-${number}.txt creada`}


            //En caso de existir un error el bloque catch sera el encargado de ejecutar la parte negativa del codigo
        } catch (err) {

            //con la palabra reservada throw arrojamos el error con el que trabajaremos
            throw err
        }
        

}

//utilizaremos la siguiente sintaxis para poder exportar un modulo.
module.exports = {
    tabla
}

