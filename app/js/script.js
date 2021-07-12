const btnHamburger = document.querySelector('#btnHamburger');
// const bgOverlay = document.querySelector('#bgOverlay')
const header = document.querySelector('.header')
btnHamburger.addEventListener('click', function(){
    console.log('open hamburger');
    if(header.classList.contains('open')){
        header.classList.remove('open');
        // bgOverlay.classList.remove('overlay');
    } else {
        header.classList.add('open');
        // bgOverlay.classList.add('overlay');
    }
});