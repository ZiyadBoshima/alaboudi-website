
window.addEventListener('scroll', ()=>{
    var reveals = document.querySelectorAll('.reveal');
    for(var i=0; i<reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
    }
});


const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav_links");

menu.addEventListener('click', ()=>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})