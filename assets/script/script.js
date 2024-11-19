const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

// Definir o modo noturno como padrão ao carregar a página
body.classList.add("dark");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    // Salva a preferência no localStorage para lembrar a escolha do usuário
    if (body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

let typingEffect = new Typed(".typedText", {
    strings: ["Publicist" , "Developer", "UX Designer", "Coder" ],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: "2000",
    reset: "true",
});

sr.reveal(".featured-name", {delay: 100});
sr.reveal(".text-info", {delay: 200});
sr.reveal(".text-btn", {delay: 200});
sr.reveal(".social-icons", {delay: 200});
sr.reveal(".featured-image", {delay: 320});

sr.reveal(".project.box", {interval: 200});

sr.reveal(".top-header",{});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", { delay: 100});
srLeft.reveal(".contact-info", { delay: 100});

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".skill", { delay: 100});
srRight.reveal(".skill-box", { delay: 100});





