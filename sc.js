document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".links");
  
    function handleClick(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    }

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", handleClick);
    }
});

const form = document.getElementById('contactForm');
const parrafo = document.getElementById('warnings');

form.addEventListener("submit", e => {
    e.preventDefault();
    let warnings="";
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    let entrar = false;
    parrafo.innerHTML = '';

    if (nameInput.value.length < 6) {
        warnings += 'El nombre no es válido <br>';
        entrar = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        warnings += 'El email no es válido <br>';
        entrar = true;
    }

    if (subjectInput.value.length < 6) {
        warnings += 'El asunto no es válido <br>';
        entrar = true;
    }

    if (messageInput.value.length < 9) {
        warnings += 'El mensaje no es válido <br>';
        entrar = true;
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "enviado"
    }
    return false;
});


