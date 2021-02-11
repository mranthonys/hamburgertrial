const mainNav = document.querySelector('.main-nav')

function toggleMainNav(){
    mainNav.classList.toggle('active')
}

mainNav.addEventListener('click', toggleMainNav);