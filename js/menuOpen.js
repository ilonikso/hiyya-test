let button = document.querySelector('.header__nav-burger');

let nav = document.querySelector('.header__nav');


button.addEventListener('click', function(e){
    nav.classList.toggle('nav--mobile-active');
    button.classList.toggle('header__nav-burger--cross');
    
    e.preventDefault();
});
