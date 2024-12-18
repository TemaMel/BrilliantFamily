let leftCurtain = document.querySelector('.main-left'),
    rightCurtain = document.querySelector('.main-right'),
    mainTitle = document.querySelector('.main-title'),
    light = document.querySelector('.light'),
    mainHero = document.querySelector('.main-hero');

//Появление шторы
document.addEventListener('DOMContentLoaded', function() {
    
    leftCurtain.classList.add('main-left-off'),
    rightCurtain.classList.add('main-right-off');

});

//Появление h1 title

window.onload = function() {
    setTimeout(function() {
        if (light) {
            light.classList.add('light-on');
        }
    }, 3000),
    setTimeout(function() {
        if (mainTitle) {
            mainTitle.classList.add('main-title-on');
        }
    }, 2000);
    setTimeout(function() {
        if (mainHero) {
            mainHero.classList.add('main-hero-on');
        }
    }, 3000);
};



//Cлайдер секция с отзывами
const reviewsContainer = document.querySelector('.slider');
const reviews = document.querySelector('.slider-container');

function duplicateReviews() {
    const reviewsClone = reviews.innerHTML;  // Клонируем содержимое
    reviews.innerHTML += reviewsClone;        // Добавляем его к оригиналу
}

duplicateReviews();  // Дублируем отзывы


//Кнопка связаться, вызов модального окна
document.getElementById('callModal').addEventListener('click', function() {
    document.querySelector('.modal').classList.add('modal-active');
    document.querySelector('.call').classList.add('call-off');
});
//Закрыть окно
document.getElementById('closeModal').addEventListener('click', function() {
    document.querySelector('.modal').classList.remove('modal-active');
    document.querySelector('.call').classList.remove('call-off');
});
