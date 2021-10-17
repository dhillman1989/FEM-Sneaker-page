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

///-- BASKET MANAGEMENT --///
///--///--///--///--///--///

let qtyToAdd = 0;

let inBasket = 0;

const updateBasket = () => {
    if (inBasket > 0) {
        document.querySelector('.basket-container > i > span').innerText = inBasket;
        document.querySelector('#basket .basket__content').innerHTML =
            `<ul>
            <li>
            <img src="./images/image-product-1-thumbnail.jpg" class="basket__img">
            <div class="basket__details">
                <span>Fall Limited Edition Sneakers</span>
                <span>$125 x ` +
            inBasket +
            ' <strong>$' +
            inBasket * 125 +
            `</strong></span>
            </div>
            <i class="fas fa-trash-alt"></i>
            </li>
        </ul>
        <button class="addtobasket checkout-btn">Checkout</button>`;
    } else {
        document.querySelector('.basket-container > i > span').innerText = '';
        document.querySelector(
            '#basket .basket__content'
        ).innerHTML = `<span> Your cart is empty</span>`;
    }
};

const updateQty = (qty) =>
    (document.querySelector('.quantity__value').innerText = qty);

document.querySelector('.quantity__plus').addEventListener('click', () => {
    qtyToAdd++;
    updateQty(qtyToAdd);
});

document.querySelector('.quantity__minus').addEventListener('click', () => {
    if (qtyToAdd > 0) {
        qtyToAdd--;
    }
    updateQty(qtyToAdd);
});

//delete from basket
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-trash-alt')) {
        inBasket = 0;
        updateBasket();
    }
});

//ADD QTY TO BASKET
document.querySelector('button.addtobasket').addEventListener('click', () => {
    inBasket += qtyToAdd;
    qtyToAdd = 0;
    updateQty(qtyToAdd);
    updateBasket();
});

///BASKET POPUP///
document.querySelector('#basket-icon').addEventListener('click', () => {
    document.querySelector('#basket').classList.toggle('hidden');
});