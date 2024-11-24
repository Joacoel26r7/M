const checkbox = document.getElementById("accept-terms");
const button = document.getElementById("continue-btn");
const dedicatoriaContainer = document.getElementById("dedicatoria-container");

// Habilitar botón al aceptar términos
checkbox.addEventListener("change", function () {
    const isChecked = this.checked;
    button.disabled = !isChecked;
    button.setAttribute("aria-disabled", !isChecked);
    button.classList.toggle("active", isChecked);
});

// Redirigir al "index.html" al hacer clic en el botón
button.addEventListener("click", function () {
    if (checkbox.checked) {
        button.textContent = "Cargando...";
        setTimeout(() => {
            window.location.href = "index.html"; // Redirección
        }, 2000); // Espera de 2 segundos para un efecto de carga
    } else {
        alert("Por favor, acepta los términos y condiciones para continuar.");
    }
});

// Redirigir al secreto al hacer clic en la dedicatoria
dedicatoriaContainer.addEventListener("click", function () {
    window.location.href = "secreto.html"; // Página con el secreto
});
