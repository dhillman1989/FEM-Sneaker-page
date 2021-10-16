document
    .querySelector('.nav-menu__close-icon')
    .addEventListener('click', () =>
        document.querySelector('.nav-menu').classList.remove('visible')
    );

document
    .querySelector('.header__menu-icon')
    .addEventListener('click', () =>
        document.querySelector('.nav-menu').classList.add('visible')
    );

let images = document.querySelectorAll('.slideshow__img');
let thumbs = document.querySelectorAll('.slideshow__thumb');
let slide_counter = 0;

const updateSlideshow = () => {
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.highlighted').classList.remove('highlighted');
    images[slide_counter].classList.add('active');
    thumbs[slide_counter].classList.add('highlighted');
};

document
    .querySelector('.slideshow__control--right')
    .addEventListener('click', () => {
        if (slide_counter < images.length - 1) {
            slide_counter++;
        } else {
            slide_counter = 0;
        }
        updateSlideshow();
    });

document
    .querySelector('.slideshow__control--left')
    .addEventListener('click', () => {
        if (slide_counter > 0) {
            slide_counter--;
        } else {
            slide_counter = images.length - 1;
        }
        updateSlideshow();
    });

thumbs.forEach((thumb) =>
    thumb.addEventListener('click', (e) => {
        slide_counter = e.target.id;
        console.log(slide_counter);
        updateSlideshow();
    })
);