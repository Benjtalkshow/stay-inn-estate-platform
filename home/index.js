const bar = document.querySelector('.hamburger')
const navBar =document.querySelector('.navbar')

bar.addEventListener('click', () => {
    navBar.classList.add('active')
    console.log(navBar);
})