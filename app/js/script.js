const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header')

btnHamburger.addEventListener('click', function(){

    console.log('open hamburger');

    if(header.classList.contains('open')){ // Close menu
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
       
    } else { // Open menu
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');

    }
});