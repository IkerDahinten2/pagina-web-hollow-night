/**
 * Formulario "Registro del Caballero".
 * Antes el formulario no tenía action ni JavaScript: al enviarlo solo
 * recargaba la página y los datos se perdían. Ahora se validan y se
 * confirma el registro en pantalla.
 */
const form = document.getElementById('registro');
const mensaje = document.getElementById('registro-mensaje');
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = `form-message form-message--${tipo}`;
    mensaje.hidden = false;
}

function validar(datos) {
    if (datos.nombre.length < 2) return 'El nombre debe tener al menos 2 caracteres.';
    if (!EMAIL.test(datos.correo)) return 'Ingresa un correo válido.';
    if (!Number.isInteger(datos.horas) || datos.horas < 0 || datos.horas > 10000) {
        return 'Las horas jugadas deben ser un número entero entre 0 y 10000.';
    }
    if (!datos.juramento) return 'Debes jurar proteger Hallownest para registrarte.';
    return null;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const datos = {
        nombre: form.nombre.value.trim(),
        correo: form.correo.value.trim(),
        horas: form.horas.value === '' ? NaN : Number(form.horas.value),
        juramento: form.juramento.checked
    };

    const error = validar(datos);
    if (error) {
        mostrarMensaje(error, 'error');
        return;
    }

    mostrarMensaje(`¡Bienvenido a Hallownest, ${datos.nombre}! Tu registro fue recibido.`, 'ok');
    form.reset();
});

form.addEventListener('reset', () => {
    // Se espera a que el navegador limpie el formulario antes de ocultar el mensaje
    setTimeout(() => {
        if (mensaje.classList.contains('form-message--error')) mensaje.hidden = true;
    });
});
