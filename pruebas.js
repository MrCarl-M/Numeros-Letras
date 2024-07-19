numero = parseInt(prompt("Proporciona el numero que quieres convertir a letras"))

let letrasNumeros = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let numerosDivididos = []
let residuo = []



    while (true) {
        a = Math.trunc((numero / 26) - 1)
        numero = a
        numerosDivididos.push(a)
        if (a < 26) {
            break
        } 
    } console.log(numerosDivididos)
      console.log(residuo)



                    // while(true) {
                    //     let division = (numero / 26) - 1
                    //  if (division >= 26) {
                    //     residuo = 0
                    //     residuo = numero % 26
                    //         document.write(letrasNumeros[residuo] + "<br>")
                    //                 if (division <= 25) {
                    //                     break;
                    //                 } document.write(letrasNumeros[division] + "<br>")
            
                    //             }}

                    
// const dividir = (num1,num2)=>{
//     return parseInt(num1) / parseInt(num2);
// }

// resultado = dividir(numero,26)

// console.log(resultado)