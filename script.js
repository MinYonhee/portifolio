function openMenu() {
    // Adiciona a classe 'responsive' ao menu para abrir
    document.getElementById('myNavMenu').classList.add('responsive');

    // Atualiza os botões de abrir e fechar o menu
    document.getElementById('openMenu').classList.add('hidden'); // Esconde o botão abrir
    document.getElementById('closeMenu').classList.remove('hidden'); // Mostra o botão fechar
}

function closeMenu() {
    // Remove a classe 'responsive' do menu para fechar
    document.getElementById('myNavMenu').classList.remove('responsive');

    // Atualiza os botões de abrir e fechar o menu
    document.getElementById('openMenu').classList.remove('hidden'); // Mostra o botão abrir
    document.getElementById('closeMenu').classList.add('hidden'); // Esconde o botão fechar
}


const body = document.querySelector("body"),
    toggleSwich = document.getElementById("toggle-switch");
toggleSwich.addEventListener("click", ()=> {
    body.classList.toggle("dark");
});

let typingEffect = new Typed(".typedText", {
    strings: ["UX Designer", "Coder", "Developer"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})