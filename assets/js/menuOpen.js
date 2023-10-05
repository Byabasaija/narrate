// Toggle the menu open and close when on mobile
export default function menuOpen() {
    const burgerButton = document.querySelector('.gh-burger');
    burgerButton.addEventListener('click', function () {
        document.body.classList.toggle('gh-head-open');
    });
}

export default function openMenu() {
    let hamburger = document.getElementById('hamburger');
    let sidenav = document.getElementById('sidenav');

    hamburger.addEventListener('click', function() {
        if (sidenav.style.width === '0px' || sidenav.style.width === '') {
            sidenav.style.width = '230px';
        } else {
            sidenav.style.width = '0px';
        }
    });
}