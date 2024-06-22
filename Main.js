// Función para cambiar el tema
document.getElementById('theme-toggle').addEventListener('click', function() {
    const themeStyle = document.getElementById('theme-style');
    if (themeStyle.getAttribute('href') === 'Portfoliocss.css') {
        themeStyle.setAttribute('href', 'Darkcss.css');
    } else {
        themeStyle.setAttribute('href', 'Portfoliocss.css');
    }
});

// Función para validar el formulario y mostrar alerta al enviar
document.querySelector('.form').addEventListener('submit', function(e) {
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    
    if (!validateEmail(email)) {
        alert('Por favor, introduce una dirección de correo electrónico válida.');
        e.preventDefault();
        return;
    }
    
    if (message.trim() === '') {
        alert('Por favor, introduce tu mensaje.');
        e.preventDefault();
        return;
    }

    // Mostrar un alert al enviar el formulario
    alert('Mensaje enviado. ¡Gracias por contactarme!');
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Añadir desplazamiento lento a los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hacer interactiva la lista de habilidades
document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skills li');
    
    skillItems.forEach(function(item) {
        item.addEventListener('click', function() {
            skillItems.forEach(function(el) {
                el.classList.remove('active');
            });
            item.classList.add('active');
        });
    });
});