function mobileMenu() {
    const hamburger = document.querySelector('.menu-bar');
    const mobileMenu = document.getElementById('menu-page');
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

function showPopup() {
    const mainPopupDiv = document.createElement('div');
    mainPopupDiv.classList.add('popup');
    const secondaryPopupDiv = document.createElement('div')
    secondaryPopupDiv.classList.add('popup_content');
    mainPopupDiv.appendChild(secondaryPopupDiv);
    const imageDiv = document.createElement('div');
    imageDiv.setAttribute('id','popup_img');
    const img = document.createElement('img');
    img.setAttribute('src', '../assets/images/Snapshot Portfolio.jpg');
    img.setAttribute('width', '311px');
    img.setAttribute('height', '220px');
    imageDiv.appendChild(img);
    const titleSection = document.createElement('div');
    titleSection.classList.add('title-popup');
    const mainProjectTitle = document.createElement('h2');
    mainProjectTitle.innerText = "Keeping track of hundreds of components"
    titleSection.appendChild(mainProjectTitle);
    secondaryPopupDiv.appendChild(imageDiv);
    secondaryPopupDiv.appendChild(titleSection);
    
    return mainPopupDiv;
}

window.addEventListener('load', ()=> {
   const popupWindowSection = document.getElementById('popWindow');
   if (popupWindowSection) {
        popupWindowSection.appendChild(showPopup());
   }
})