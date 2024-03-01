"use strict"
let burgerBtn = document.querySelector('.header__burger')
let adapMenu = document.querySelector('.main__adaptive')
let body = document.querySelector('.body')
let mainContainer = document.querySelector('.main__container')
if (window.screen.width > 800) {
    burgerBtn.classList.add('hidden')
} else {
    burgerBtn.classList.remove('hidden')
}
window.addEventListener('resize', () => {
    if (window.screen.width > 800) {
        burgerBtn.classList.add('hidden')
        
    } else {
        burgerBtn.classList.remove('hidden')
    }
})
burgerBtn.addEventListener('click', () => {
    adapMenu.classList.toggle('hidden')
    mainContainer.classList.toggle('hidden')
    }

)   