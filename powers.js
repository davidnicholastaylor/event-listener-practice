document.querySelector("#activate-flight").addEventListener("click", function handlerFunction() {
    let fly = document.querySelector("#flight");
    fly.classList.toggle("enabled")
    fly.classList.toggle("disabled")
})

document.querySelector("#activate-mindreading").addEventListener("click", function handlerFunction() {
    let mindRead = document.querySelector("#mindreading");
    mindRead.classList.toggle("enabled")
    mindRead.classList.toggle("disabled")
})

document.querySelector("#activate-xray").addEventListener("click", function handlerFunction() {
    let xRay = document.querySelector("#xray");
    xRay.classList.toggle("enabled")
    xRay.classList.toggle("disabled")
})

document.querySelector("#activate-all").addEventListener("click", function handlerFunction() {
    let activate = document.querySelectorAll('section');
    activate.forEach( function (section) {
    section.classList.add("enabled")
    section.classList.remove("disabled")
    });
})

document.querySelector("#deactivate-all").addEventListener("click", function handlerFunction() {
    let deactive = document.querySelectorAll('section');
    deactive.forEach( function (section) {
    section.classList.add("disabled")
    section.classList.remove("enabled")
    });
})