// countdown
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const futureDate = new Date('January 01 2023 00:00:00')

function updateCountdown() {
    const currTime = new Date();

    const diff = futureDate - currTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

//update clock every second
setInterval(updateCountdown, 1000)

// email validation
const form = document.querySelector('.contact__form')
const email = document.querySelector('#email')
const submitBtn = document.querySelector('.submit__btn')
const error = document.querySelector('.error');

form.addEventListener('submit', checkEmail)

function checkEmail(e) {
    e.preventDefault();

    if (email.value === '') {
        showError()
        setTimeout(removeError, 3000)
    }
}

function showError() {
    error.style.display = 'block'
}

function removeError() {
    error.style.display = 'none'
}

// slider
const container = document.querySelector('.container')
const slider = document.querySelector('.slider__nav')

slider.addEventListener('click', changeBackground);

function changeBackground(e) {
    if (e.target.classList.contains('img__slider')) {
        const current = document.querySelector('.active')
        current.classList.remove('active')
        e.target.parentElement.classList.add('active')
        container.style.backgroundImage = `url(${e.target.src})`
    }
}

$(document).ready(function () {

    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.nav').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function () {

        $('.fa-bars').removeClass('fa-times');
        $('.nav').removeClass('nav-toggle');

        if ($(window).scrollTop() > 10) {
            $('header').addClass('header-active');
        } else {
            $('header').removeClass('header-active');
        }

    });

    $('.facility').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});