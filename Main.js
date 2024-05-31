// Función para cambiar el tema
document.getElementById('theme-toggle').addEventListener('click', function() {
    const themeStyle = document.getElementById('theme-style');
    if (themeStyle.getAttribute('href') === 'Portfoliocss.css') {
        themeStyle.setAttribute('href', 'Darkcss.css');
    } else {
        themeStyle.setAttribute('href', 'Portfoliocss.css');
    }
});

// Función para validar el formulario
document.querySelector('.form').addEventListener('submit', function(e) {
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
        return;
    }
    
    if (message.trim() === '') {
        alert('Please enter your message.');
        e.preventDefault();
        return;
    }
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
