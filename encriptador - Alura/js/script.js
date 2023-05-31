// Obtener el textarea y los botones
const textArea = document.getElementById("textArea");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const imageContainer = document.querySelector(".image-container");
const titleElement = document.querySelector(".ttitle");
const messageElement = document.querySelector(".message-body");
const copyButton = document.getElementById("copybtn");

// Escuchar el evento de entrada en el textarea
textArea.addEventListener("input", function() {
    const text = textArea.value;

    // Verificar si el texto cumple las condiciones
    const hasUppercase = /[A-ZÁÉÍÓÚ]/.test(text);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>´]/.test(text);

    // Habilitar o deshabilitar los botones según las condiciones
    if (text && !hasUppercase && !hasSpecialChars) {
        button1.disabled = false;
        button1.textContent = "Encriptar";
        button1.style.boxShadow = "none";
        button2.disabled = false;
        button2.textContent = "Desencriptar";
        button2.style.boxShadow = "none";
    } else {
        button1.disabled = true;
        button1.textContent = "No se Encripta";
        button1.style.boxShadow = "0 0 5px red";
        button2.disabled = true;
        button2.textContent = "No se Desencripta";
        button2.style.boxShadow = "0 0 5px red";
    }

    // Mostrar u ocultar los elementos de texto
    if (text) {
        titleElement.style.display = "none";
        messageElement.style.display = "none";
    } else {
        titleElement.style.display = "block";
        messageElement.style.display = "block";
    }
});

// Función para encriptar el texto
function encryptText(text) {
    let encryptedText = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        switch (char) {
            case "e":
                encryptedText += "enter";
                break;
            case "i":
                encryptedText += "imes";
                break;
            case "a":
                encryptedText += "ai";
                break;
            case "o":
                encryptedText += "ober";
                break;
            case "u":
                encryptedText += "ufat";
                break;
            default:
                encryptedText += char;
        }
    }

    return encryptedText;
}

// Función para desencriptar el texto
function decryptText(encryptedText) {
    let decryptedText = "";

    let i = 0;
    while (i < encryptedText.length) {
        let char = encryptedText[i];
        switch (char) {
            case "e":
                if (encryptedText.substr(i, 5) === "enter") {
                    decryptedText += "e";
                    i += 5;
                } else {
                    decryptedText += char;
                    i++;
                }
                break;
            case "i":
                if (encryptedText.substr(i, 4) === "imes") {
                    decryptedText += "i";
                    i += 4;
                } else {
                    decryptedText += char;
                    i++;
                }
                break;
            case "a":
                if (encryptedText.substr(i, 2) === "ai") {
                    decryptedText += "a";
                    i += 2;
                } else {
                    decryptedText += char;
                    i++;
                }
                break;
            case "o":
                if (encryptedText.substr(i, 4) === "ober") {
                    decryptedText += "o";
                    i += 4;
                } else {
                    decryptedText += char;
                    i++;
                }
                break;
            case "u":
                if (encryptedText.substr(i, 4) === "ufat") {
                    decryptedText += "u";
                    i += 4;
                } else {
                    decryptedText += char;
                    i++;
                }
                break;
            default:
                decryptedText += char;
                i++;
        }
    }

    return decryptedText;
}

// Mostrar etiqueta flotante si el texto no cumple las condiciones
button1.addEventListener("mouseover", function() {
    const text = textArea.value;
    const hasUppercase = /[A-ZÁÉÍÓÚ]/.test(text);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>´]/.test(text);

    if (text && (hasUppercase || hasSpecialChars)) {
        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.textContent = "No se respetan las condiciones";
        button1.appendChild(tooltip);
    }
});

// Eliminar la etiqueta flotante al salir del botón
button1.addEventListener("mouseout", function() {
    const tooltip = button1.querySelector(".tooltip");
    if (tooltip) {
        tooltip.remove();
    }
});

// Encriptar el texto al hacer clic en el botón de encriptar
button1.addEventListener("click", function() {
    const text = textArea.value;
    const hasUppercase = /[A-ZÁÉÍÓÚ]/.test(text);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>´]/.test(text);

    if (!text || hasUppercase || hasSpecialChars) {
        // Mostrar la imagen si no hay texto o no se cumplen las condiciones
        imageContainer.innerHTML = '<img src="src/img/Muñeco.png" alt="Logo" class="img-style">';
    } else {
        // Encriptar el texto
        const encryptedText = encryptText(text);

        // Mostrar el texto encriptado en un párrafo
        const textParagraph = document.createElement("p");
        textParagraph.textContent = encryptedText;
        imageContainer.innerHTML = "";
        imageContainer.appendChild(textParagraph);
    }

    // Ocultar los elementos de texto
    titleElement.style.display = "none";
    messageElement.style.display = "none";
});

// Desencriptar el texto al hacer clic en el botón de desencriptar
button2.addEventListener("click", function() {
    const text = textArea.value;
    const hasUppercase = /[A-ZÁÉÍÓÚ]/.test(text);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>´]/.test(text);

    if (!text || hasUppercase || hasSpecialChars) {
        // Mostrar la imagen si no hay texto o no se cumplen las condiciones
        imageContainer.innerHTML = '<img src="src/img/Muñeco.png" alt="Logo" class="img-style">';
    } else {
        // Desencriptar el texto
        const decryptedText = decryptText(text);

        // Mostrar el texto desencriptado en un párrafo
        const textParagraph = document.createElement("p");
        textParagraph.textContent = decryptedText;
        imageContainer.innerHTML = "";
        imageContainer.appendChild(textParagraph);
    }

    // Ocultar los elementos de texto
    titleElement.style.display = "none";
    messageElement.style.display = "none";
});

// Función para copiar el texto en el portapapeles
copyButton.addEventListener("click", function() {
    let text = "";
    const textParagraph = imageContainer.querySelector("p");
    
    if (textParagraph) {
        text = textParagraph.textContent;
    }

    // Crear un elemento de texto temporal
    const tempElement = document.createElement("textarea");
    tempElement.value = text;
    document.body.appendChild(tempElement);

    // Seleccionar el texto en el elemento temporal
    tempElement.select();
    tempElement.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto al portapapeles
    document.execCommand("copy");

    // Eliminar el elemento temporal
    document.body.removeChild(tempElement);

    // Actualizar el texto del botón
    copyButton.textContent = "Texto copiado";

    // Restaurar el texto del botón después de 2 segundos
    setTimeout(function() {
        copyButton.textContent = "Copiar texto";
    }, 2000);
});

