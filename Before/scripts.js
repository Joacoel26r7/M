const checkbox = document.getElementById("accept-terms");
const button = document.getElementById("continue-btn");
const dedicatoriaContainer = document.getElementById("dedicatoria-container");
const errorMessage = document.getElementById("error");

// Habilitar botón al aceptar términos
checkbox.addEventListener("change", function () {
    const isChecked = this.checked;
    button.disabled = !isChecked;
    button.setAttribute("aria-disabled", !isChecked);
    button.classList.toggle("active", isChecked);
    
    // Mostrar el mensaje de error si no está marcado
    if (!isChecked) {
        errorMessage.style.display = "inline"; // Muestra el error si no está marcado
    } else {
        errorMessage.style.display = "none"; // Oculta el error si está marcado
    }
});

// Redirigir al "index.html" al hacer clic en el botón
button.addEventListener("click", function () {
    if (checkbox.checked) {
        button.textContent = "Cargando...";
        setTimeout(() => {
            window.location.href = "index.html"; // Redirección
        }, 2000); // Espera de 2 segundos para un efecto de carga
    } else {
        alert("¿No aceptas mis términos? :(");
    }
});

// Redirigir al secreto al hacer clic en la dedicatoria
dedicatoriaContainer.addEventListener("click", function () {
    window.location.href = "secreto.html"; // Página con el secreto
});
