//Completed projects Onjects
const projectInfo = [
    {
      id: 1,
      projectName: 'Todo App to Manage your Tasks',
      projectInfo:
        'A daily tracking of privately personalized activities; no accounts or sign-ups required.',
      tech: ['HTML', 'CSS', 'Javascript'],
      img: '../assets/projects/center_back.png',
    },
    {
      id: 2,
      projectName: 'Data Dashboard Healthcare',
      projectInfo:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      img: '../assets/projects/center_back.png',
    },
    {
      id: 3,
      projectName: 'Website Portfolio',
      projectInfo:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      img: '../assets/projects/center_back.png',
    },
    {
      id: 4,
      projectName: 'Profesional Art Printing Data',
      projectInfo:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
      tech: ['HTML', 'Bootstrap', 'Ruby','Rails'],
      img: '../assets/projects/center_back.png',
    },
    {
      id: 5,
      projectName: 'Data Dashboard Healthcare',
      projectInfo:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      img: '../assets/projects/center_back.png',
    },
    {
      id: 6,
      projectName: 'Website Portfolio',
      projectInfo:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      img: '../assets/projects/center_back.png',
    },
  ];


// DOM manipulation functions
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
    const close_icon = document.createElement('img');
    close_icon.setAttribute('class', 'close_button');
    close_icon.setAttribute('src', '../assets/images/Icon.png');
    close_icon.setAttribute('onclick', 'closePopup()');
    const desktop_close_icon = document.createElement('img');
    desktop_close_icon.setAttribute('class', 'desktop_close_button');
    desktop_close_icon.setAttribute('src', '../assets/images/desktop_close.png');
    desktop_close_icon.setAttribute('onclick', 'closePopup()');
    const img = document.createElement('img');
    img.setAttribute('src', '../assets/images/Snapshot Portfolio.jpg');
    img.setAttribute('class', 'main_img');
    imageDiv.appendChild(close_icon);
    imageDiv.appendChild(desktop_close_icon);
    imageDiv.appendChild(img);
    const titleSection = document.createElement('div');
    titleSection.classList.add('title-popup');
    const mainProjectTitle = document.createElement('h2');
    mainProjectTitle.innerText = "Keeping track of hundreds of components"
    mainProjectTitle.classList.add('heading_section');
    titleSection.appendChild(mainProjectTitle);
    secondaryPopupDiv.appendChild(imageDiv);
    secondaryPopupDiv.appendChild(titleSection);
    
    return mainPopupDiv;
}

function showDynamicproject() {
  const cardSection = document.querySelector('.card-section');
  if (!cardSection) return;
  projectInfo.forEach((item) => {
    const mainCard = document.createElement('div');
    mainCard.classList.add('card');
    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    const img = document.createElement('img');
    img.src = item.img; 
    img.alt = item.projectName; 
    cardImage.appendChild(img);
    mainCard.appendChild(cardImage);
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    const heading = document.createElement('h3');
    heading.innerText = item.projectName;
    cardContent.appendChild(heading);
    const projectDescription = document.createElement('p');
    projectDescription.innerText = item.projectInfo;
    cardContent.appendChild(projectDescription);
    const tags = document.createElement('div');
    tags.classList.add('tags');
    item.tech.forEach((tech) => {
      const spanTag = document.createElement('span');
      spanTag.classList.add('tag');
      spanTag.innerText = tech;
      tags.appendChild(spanTag);
    });
    cardContent.appendChild(tags);
    const popupButton = document.createElement('button');
    popupButton.setAttribute('class', 'btn');
    popupButton.setAttribute('type', 'button');
    popupButton.setAttribute('onclick', `clickedProject(${item.id})`); // This assumes you have a function to handle popups
    popupButton.innerText = 'See Project';
    cardContent.appendChild(popupButton);
    mainCard.appendChild(cardContent);
    cardSection.appendChild(mainCard);
  });
}


function openPopup () {
    const popupWindow = document.querySelector('.popup');
    popupWindow.style.display = 'block';
}

function clickedProject(projectId){
  const heading_section = document.querySelector('.heading_section');

  projectInfo.forEach((e, i) => {
    if (projectInfo[i].id === Number(projectId)) {
      heading_section.innerHTML = projectInfo[i].projectName;
      openPopup();
    }
  })
}

function closePopup () {
    const popupWindow = document.querySelector('.popup');
    popupWindow.style.display = 'none';
}

// Add Validation to Form 


window.addEventListener('load', ()=> {
   const popupWindowSection = document.getElementById('popWindow');
   if (popupWindowSection) {
        popupWindowSection.appendChild(showPopup());
   }
   document.querySelector('.card-section').innerHTML = showDynamicproject().join('');
})