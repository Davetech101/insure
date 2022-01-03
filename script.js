const toggleNav = document.querySelector('.toggle-nav')
const openNav = document.querySelector('.open')
const closeNav = document.querySelector('.close')
const nav = document.querySelector('.header .nav')

toggleNavigaton()
function toggleNavigaton() {
    openNav.addEventListener('click', () => {
        toggleNav.classList.add('active')
        nav.classList.add('show')
    })

    closeNav.addEventListener('click', () => {
        toggleNav.classList.remove('active')
        nav.classList.remove('show')
    })   
}