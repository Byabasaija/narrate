// Toggle the menu open and close when on mobile
export default function menuOpen() {
    const burgerButton = document.querySelector('.gh-burger');
    burgerButton.addEventListener('click', function () {
        document.body.classList.toggle('gh-head-open');
    });
}

export default function openSideBar(){
    let hamburger = document.getElementById('hamburger');
    let sidenav = document.getElementById('sidenav');
    let main = document.querySelector('.gh-main');
    let container = document.querySelector('.gh-container');

    hamburger.addEventListener('click', function() {
        if (sidenav.style.width === '0px' || sidenav.style.width === '') {
            sidenav.style.width = '250px';
            sidenav.classList.add('gh-side-nav-open');
            main.classList.add('gh-main-open');
            container.classList.add('gh-open-container');
        } else {
            sidenav.style.width = '0px';
            sidenav.classList.remove('gh-side-nav-open');
            main.classList.remove('gh-main-open');
            container.classList.remove('gh-open-container');
        }
    });


}

export default function raisedNavbar(){
    window.addEventListener('scroll', function() {
        let header = document.getElementById('gh-head');
        if (window.pageYOffset > 0) {
            header.classList.add('scroll-shadow');
        } else {
            header.classList.remove('scroll-shadow');
        }
    });

}