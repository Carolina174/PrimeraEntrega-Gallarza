alert("Este es un sitio web para mayores de edad, si usted no lo es por favor no continúe en el mismo");
let edad = prompt("Ingrese su edad");
if (edad >= 18) {
    let simular = prompt("¡Bienvenido a Bancar, el mejor prestamista del mercado! Si desea comenzar a calcular un prestamo presione la tecla s");
    while (simular == "s" || simular == "S") {
        let monto = Number(prompt("Ingrese el monto del prestamo a solicitar"));
        let cuotas = Number(prompt("Ingrese la cantidad de cuotas en las que desea pagar el préstamo solicitado"));
        const tasa = 0.02;
        let intereses = tasa * monto;
        function pagoTotal(monto, intereses, cuotas) {
            return ((monto + intereses) / cuotas);
        }
        let resultado = pagoTotal(monto, intereses, cuotas);
        alert("Según los datos proporcionados usted deberá pagar " + cuotas + " cuotas de " + resultado + " pesos.");
        simular = prompt("Si desea comenzar a calcular un prestamo presione la tecla s");
    }
} else {
    alert("¡Usted es menor de edad, por favor salga de este sitio web");
}