var nueva = "Hola" //var variable constante
console.log(nueva) //carga la variable y la imprime
/*
let nueva1 = "Hola Mundo" //let variable

document.write(nueva) //la escribe y la muestra en el navegador
*/

if (true){
    let nueva = "Hola Mundo"
    console.log(nueva)
}
console.log(nueva)
const server = "192.168.1.1"
console.log(server)

let numero = 1.5;
let dogs = "puppy";
let boll = true;


// crear funciones
function fnueva(num1, num2, stade = false){
    result = num1*num2
    if (stade == false){
        console.log(result)
    }else{
        alert(result)
    }
}