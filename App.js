const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");


})

window.addEventListener("resize", function(){
    if(window.innerWidth>768){
        hamburger.classList.remove("active");
        navMenu.classList.remove("active")

    } 
})