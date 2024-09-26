window.addEventListener('DOMContentLoaded', () => {
    const mobileHamburgerMenu = document.querySelector('.mobileHamburgerMenu')
    const menuClose = document.querySelector('.menuClose')
    const mobileMenu = document.querySelector('.menu--mobile')

    mobileHamburgerMenu.addEventListener('click', () => {
        mobileMenu.style.display = 'flex'
    })

    menuClose.addEventListener('click', () => {
        mobileMenu.style.display = 'none'
    })
})