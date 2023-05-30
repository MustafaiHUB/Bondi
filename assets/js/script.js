'use strict';

const scrollBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', function () {
    if ((this.window.pageYOffset).toFixed() > 200) {
        scrollBtn.style.transform = 'translateX(0)';
    }
    else {
        scrollBtn.style.transform = 'translateX(100px)';
    }
})
scrollBtn.addEventListener('click', function () {
    document.documentElement.scrollIntoView({ behavior: 'smooth' });
})