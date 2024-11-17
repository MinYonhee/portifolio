function myMenuFunction() {
    let menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += "responsive";
    } else {
        menuBtn.className = "nav-menu";
   }
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