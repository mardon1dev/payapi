let button = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");
let body = document.querySelector("body");
let header = document.querySelector("header");
button.addEventListener("click", function () {
    button.classList.toggle("toggle");
    menu.classList.toggle("active");
    body.classList.toggle("scroll");
});
window.addEventListener("scroll", function(){
    if(window.pageYOffset > 0){
        header.classList.add("header-active");
    }
    else{
        header.classList.remove("header-active");
    }
})

