
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let btnFecharMenu = document.getElementById('btn-fechar-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
    overlay.style.display = 'block'
})

btnFecharMenu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
    overlay.style.display = 'none'
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
    overlay.style.display = 'none'
})

let menuLinks = document.querySelectorAll('.menu-mobile nav ul li a')
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('abrir-menu')
        overlay.style.display = 'none'
    })
})

