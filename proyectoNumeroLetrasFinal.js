numero = parseInt(prompt("Proporciona el numero que quieres convertir a letras"))
let letrasNumeros = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let residuo = []
while (true) {b = Math.trunc(numero % 26)
        residuo.push(letrasNumeros[b] + "<br>") // para obtener la priemra letra
        a = Math.trunc((numero / 26) - 1)
        b = a % 26 // para obtener  el valor del residuo
        numero = a // aqui se guarda el resulrado de a = Math.trunc((numero / 26) - 1), para que se actualize el valor y siga con el bucle
        if (a < 26) {break}} 
    document.write(letrasNumeros[a] + "<br>")
    document.write(residuo.reverse())  