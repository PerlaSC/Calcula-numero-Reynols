var regimen = [
    "El régimen del fluido es laminar",
    "El régimen del fluido es de transición",
    "El régimen del fluido es tubulento",
];

function reynolds() {
    var d = document.getElementById("diametro");
    var v = document.getElementById("velocidad");
    var r = document.getElementById("densidad");
    var m = document.getElementById("viscosidad");
    diametro = parseFloat(d.value);
    velosidad = parseFloat(v.value);
    densidad = parseFloat(r.value);
    viscosidad = parseFloat(m.value);
    for (i = 0; i < 2; i++) {
        var reynolds = (diametro * velosidad * densidad) / viscosidad;
    }
    if (reynolds <= 1200) {
        resultado.innerHTML =
            "El número de Reynolds del fluido es " +
            reynolds.toFixed(4) +
            "<br>" +
            regimen[0];
    }
    if (reynolds >= 4000) {
        resultado.innerHTML =
            "El número de Reynolds del fluido es " +
            reynolds.toFixed(4) +
            "<br>" +
            regimen[2];
    }
    if (reynolds < 4000) {
        if (reynolds > 1200) {
            resultado.innerHTML =
                "El número de Reynolds del fluido es " +
                reynolds.toFixed(4) +
                "<br>" +
                regimen[1];
        }
    }
    // for (i = 0; i < 2; i++) {
    //     (diametro * velosidad * densidad) / viscosidad;
    // }
}
var resultado = document.getElementById("resultado");
var fluido = document.getElementById("fluido");
var b = document.getElementById("submit");

b.addEventListener("click", reynolds);