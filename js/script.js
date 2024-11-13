function mobileMenu() {
    const hamburger = document.querySelector('.menu-bar');
    const mobileMenu = document.getElementById('menu-page')
    const topMenu = document.querySelector('.top-menu');
    const xButton = document.querySelector('.top-x');

    if (mobileMenu.style.display === 'block') {
        hamburger.style.display = 'block';
        mobileMenu.style.display = 'none';
        xButton.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block'
        hamburger.style.display = 'none';
        xButton.style.display = 'block';
    }
}