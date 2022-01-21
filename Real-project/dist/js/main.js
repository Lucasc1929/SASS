const menuButton = document.querySelector(".menu-button")
const hamburguer = document.querySelector(".menu-btn_burger")

let showMenu = false

function toggleMenu(){
    if(!showMenu){
        hamburguer.classList.add('open')
        showMenu = true
    }
    else{
        hamburguer.classList.remove('open')
        showMenu = false
    }
}