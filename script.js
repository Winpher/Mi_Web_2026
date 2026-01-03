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
