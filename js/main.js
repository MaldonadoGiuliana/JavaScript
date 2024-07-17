let num1 = parseInt(prompt("Ingresa el primer numero"));
let num2 = parseInt(prompt("Ingresa el segundo numero"));
let operacion = prompt (`
    Seleccione una operacion: 
    1. suma
    2. resta
    3. Multiplicacion
    4. Division
    5. Promedio
    `);

function calcular(numero1, numero2, operacionMatematica){
    switch (operacionMatematica) {
        case "1":
            return numero1 + numero2;
        case "2":
            return numero1 - numero2;
        case "3":
            return numero1 * numero2;
        case "4":
            if (numero1 !== 0) {
                return numero1 / numero2;
            }else{
                return "No se puede dividir por 0";
            }
        case "5":
            return (numero1 + numero2) / 2;
        default:
            return "Operacion invalida";    
    }
}
let resultado = calcular(num1, num2 , operacion);
alert("El resultado es: " + resultado)