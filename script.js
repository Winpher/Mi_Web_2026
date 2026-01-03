// Mostrar secciones al cargar y al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
    const secciones = document.querySelectorAll(".seccion");

    const mostrarSecciones = () => {
        const trigger = window.innerHeight * 0.85;

        secciones.forEach(seccion => {
            const top = seccion.getBoundingClientRect().top;

            if (top < trigger) {
                seccion.style.opacity = "1";
                seccion.style.transform = "translateY(0)";
            }
        });
    };

    mostrarSecciones();
    window.addEventListener("scroll", mostrarSecciones);
});
