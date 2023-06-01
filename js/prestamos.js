const opciones = document.querySelector("#prestamos");

fetch("../js/prestamos.json")
    .then(response => response.json())
    .then(data => {
        prestamos(data);
    })

function prestamos(prestamos) {
    prestamos.forEach(prestamo => {
        const li = document.createElement("li");
        li.innerText = prestamo.nombre + " - " + prestamo.detalle;
        opciones.append(li);
    });
}