let menu = document.querySelector("#menubar")
let navbar = document.querySelector(".navbar")
let nav = document.querySelector("nav")

menu.addEventListener("click",()=>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
    console.log("clicked")
});

window.onscroll = ()=>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

    if(window.scrollY > 100){
        nav.classList.add("active")
    }
    else{
        nav.classList.remove("active")
    }
}