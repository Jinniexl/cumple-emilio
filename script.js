const portada = document.getElementById("portada");
const introduccion = document.getElementById("introduccion");
const regalo = document.getElementById("regalo");
const cancion = document.getElementById("cancion");
const final = document.getElementById("final");

const comenzar = document.getElementById("comenzar");
const continuarIntroduccion = document.getElementById("continuarIntroduccion");
const continuarRegalo = document.getElementById("continuarRegalo");
const continuarCancion = document.getElementById("continuarCancion");
const volverInicio = document.getElementById("volverInicio");


comenzar.addEventListener("click", function() {

    portada.classList.remove("activa");
    introduccion.classList.add("activa");

});


continuarIntroduccion.addEventListener("click", function() {

    introduccion.classList.remove("activa");
    regalo.classList.add("activa");

});


continuarRegalo.addEventListener("click", function() {

    regalo.classList.remove("activa");
    cancion.classList.add("activa");

});


continuarCancion.addEventListener("click", function() {

    cancion.classList.remove("activa");
    final.classList.add("activa");

});


volverInicio.addEventListener("click", function() {

    final.classList.remove("activa");
    portada.classList.add("activa");

});

const caja = document.getElementById("caja");
const abrirRegalo = document.getElementById("abrirRegalo");
const carta = document.getElementById("carta");

abrirRegalo.addEventListener("click", function() {

    caja.classList.add("abierta");
    abrirRegalo.style.display = "none";
    carta.classList.add("mostrar");

setTimeout(function() {
    continuarRegalo.classList.add("aparecer");
}, 1500);

});

function lanzarConfeti() {

    for (let i = 0; i < 60; i++) {

        const confeti = document.createElement("span");

        confeti.classList.add("confeti");

        confeti.style.left = Math.random() * 100 + "vw";
        confeti.style.animationDelay = Math.random() * 0.8 + "s";

        document.body.appendChild(confeti);

        setTimeout(function() {
            confeti.remove();
        }, 4000);
    }
}
continuarCancion.addEventListener("click", function() {
    cancion.classList.remove("activa");
    final.classList.add("activa");

    lanzarConfeti();
});