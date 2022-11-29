body = document.body
procents = document.querySelector('.procents')
preload = document.querySelector('.preloader')

preloader = $('.preloader'); // селектор прелоадера    
imagesCount = $('img').length; // количество изображений   
videosCount = $('video').length; // количество видео  

let i = 0;

allCount = imagesCount + videosCount;

percent = 100 / allCount; //количество % на одну картинку

// document.addEventListener('DOMContentLoaded', () => {
//     const mediaFiles = document.querySelectorAll('img');

//     Array.from(mediaFiles).forEach((file, index) => {
//         file.onload = () => {
//             i++;

//             procents.innerHTML = ((i * 100) / mediaFiles.length).toFixed();

//             if (i === 1) {
//                 body.classList.remove('preload')
//                 preload.classList.add('preloader--hide')
//                 procents.innerHTML = 100
//             }
//         }
//     })
// });



swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.titiland__arr-right',
        prevEl: '.titiland__arr-left'
    },

    freeMode: true,
    loop: true,
    allowTouchMove: false,

    autoplay: {
        delay: 5000,
        speed: 1000,
        disableOnInteraction: false,
    },

    speed: 1000,

});

const arrow = document.querySelector('.arrow-content') 

arrow.addEventListener('click', () => {
    $('html, body').animate({
        scrollTop: $('.about').offset().top - 120
    }, 1000);
});


// Popup visible 
const liBtns = document.querySelectorAll('li');
const welcBtn = document.querySelector('.welcome__btn');
const titilandBtn = document.querySelector('.titiland__more');
const zoomBtn = document.querySelector('.zoomloop__play-btn');
const popup = document.querySelector('.popup404');
const close_btn = document.querySelector('.popup404__close-btn');

liBtns.forEach(item => {
    item.addEventListener('click', openPopupFunc);
});

titilandBtn.addEventListener('click', openPopupFunc);
welcBtn.addEventListener('click', openPopupFunc);
zoomBtn.addEventListener('click', openPopupFunc);

function openPopupFunc(e) {
    popup.classList.add('open');
    e.preventDefault();
}

//popup hidden
popup.addEventListener('click', hidePopup);
close_btn.addEventListener('click', (e) => {
    popup.classList.remove('open');
    e.preventDefault();
});

function hidePopup(e) {
    if (!e.target.closest('.popup404__content'))
        popup.classList.remove('open');
    e.preventDefault();
}