document.addEventListener("DOMContentLoaded", () => {
    const secciones = document.querySelectorAll(".seccion");

    const mostrarSecciones = () => {
        const trigger = window.innerHeight * 0.85;

        secciones.forEach(seccion => {
            const top = seccion.getBoundingClientRect().top;

            if (top < trigger) {
                seccion.classList.add("visible");
            }
        });
    };

    mostrarSecciones();
    window.addEventListener("scroll", mostrarSecciones);
});
function enviarWhatsApp(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let mensaje = document.getElementById("mensaje").value;

    let telefono = "593XXXXXXXXX"; // TU NÚMERO CON CÓDIGO DE ECUADOR
    let texto = `Hola, soy ${nombre}. ${mensaje}`;

    let url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
}

