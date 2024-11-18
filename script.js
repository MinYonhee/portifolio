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

//const sr = ScrollReveal({
    //origin: "top",
    //distance: "80px",
    //duration: "2000",
    //reset: "true",
//});

//sr.reveal(".featured-name", {delay: 100});
//sr.reveal(".text-info", {delay: 200});
//sr.reveal(".text-btn", {delay: 200});
//sr.reveal(".social-icons", {delay: 200});
//sr.reveal(".featured-image", {delay: 320});

//sr.reveal(".project.box", {interval: 200});

//sr.reveal(".top-header",{});

//const srLeft = ScrollReveal({
   //origin: "left",
    //distance: "80px",
    //duration: 2000,
    //reset: true,
//});


//const srRight = ScrollReveal({
    //origin: "left",
    //distance: "80px",
    //duration: 2000,
    //reset: true,
//});


