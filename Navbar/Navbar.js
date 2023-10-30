// variables 
const bntNavbar = document.querySelector('#icon');
const navbar = document.querySelector('ul');
// functionality
bntNavbar.addEventListener('click', () => {
    if(navbar.classList.contains('hide-navbar')){
        navbar.classList.remove('hide-navbar');
    }else{
        navbar.classList.add('hide-navbar');
    }
});