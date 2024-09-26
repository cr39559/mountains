window.addEventListener('DOMContentLoaded', () => {
    const bannerTitle = document.querySelector('.banner--title')
    const body = document.querySelector('body')

    if (bannerTitle.scrollWidth > body.clientWidth) {
        bannerTitle.style.fontSize = '3rem'
    }
})