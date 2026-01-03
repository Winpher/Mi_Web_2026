document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre && email && mensaje) {

        const telefono = "593939274564"; // ← TU NÚMERO AQUÍ

        const texto = `Hola, soy ${nombre}.
Mi correo es: ${email}.
Mensaje: ${mensaje}`;

        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");

        document.getElementById("resultado").innerText =
            "Redirigiendo a WhatsApp...";
        
        this.reset();
    }
});
