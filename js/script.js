body = document.body
procents = document.querySelector('.procents')
preload = document.querySelector('.preloader')

preloader = $('#preloader'); // селектор прелоадера    
imagesCount = $('img').length; // количество изображений   
videosCount = $('video').length; // количество видео  

let i = 0; 

allCount = imagesCount + videosCount;

percent = 100 / allCount; //количество % на одну картинку

document.addEventListener('DOMContentLoaded', () => {
    const mediaFiles = document.querySelectorAll('img');
    

    Array.from(mediaFiles).forEach((file, index) => {
        console.log(file, index);
        file.onload = () => {
            i++;

            procents.innerHTML = ((i * 100) / mediaFiles.length).toFixed();
            console.log(body);
            if (i === 1) {
                body.classList.remove('preload')
                preload.classList.add('preloader--hide')
                procents.innerHTML = 100
            }
        }
    })
});



new Swiper('.swiper', {
    navigation: {
        nextEl: '.arr-next',
        prevEl: '.arr-prev'
    },
    loop: true,
    simulateTouch: false,
});