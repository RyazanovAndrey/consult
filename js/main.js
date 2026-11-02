const header = document.querySelector('.header')
const btnTop = document.querySelector('.btn-top')
const sections = document.querySelectorAll('section')

window.addEventListener('scroll', () => {
    const currentY = window.scrollY

    activeHeader(currentY)
    activeLink(currentY)
    btnShow(currentY)
})

function activeHeader(currentY) {
    if (currentY > header.offsetHeight) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
}

function activeLink(currentY) {
    sections.forEach(item => {

        const currentAttr = item.getAttribute('id')

        if (currentY >= item.offsetTop) {

            const activeLink = document.querySelector('.menu-link.active-link ')
            if (activeLink) {
                activeLink.classList.remove('active-link')
            }

            const nextActiveLink = document.querySelector(`[href="#${currentAttr}"]`)
            if (nextActiveLink) {
                nextActiveLink.classList.add('active-link');
            }
        }
    })
}

function btnShow(currentY) {
    if (currentY >= document.body.clientHeight / 2) {
        btnTop.classList.add('show')
    } else {
        btnTop.classList.remove('show')
    }
}

// Popup

const btn = document.querySelectorAll('.btn')
const popup = document.querySelector('.popup')
const closeBtn = document.querySelector('.close')

const padPix = window.innerWidth - document.documentElement.clientWidth

btn.forEach(item => {
    item.addEventListener('click', () => {

        document.body.style.paddingRight = padPix + 'px'
        header.style.paddingRight = padPix + 'px'
        popup.classList.add('show')
        document.body.classList.add('stop-scroll')
    })

})

document.addEventListener('click', (event) => {
    if (event.target == popup || event.target == closeBtn) {
        document.querySelector('.popup').classList.remove('show')
        document.body.style.paddingRight = '0px'
        document.body.classList.remove('stop-scroll')
    }
})


// Adaptive

const burger = document.querySelector('.burger')
const headerBlock = document.querySelector('.header-block')

burger.onclick = () => {
    burger.classList.toggle('open')
    headerBlock.classList.toggle('open')

    document.body.classList.toggle('stop-scroll')
}

document.querySelectorAll('.menu-link').forEach(item => {
    item.addEventListener('click', () => {
        headerBlock.classList.remove('open')
        document.body.classList.remove('stop-scroll')
        burger.classList.remove('open')
    })
})

// Swiper

const swiper = new Swiper('.slider .swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        992: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        360: {
            slidesPerView: 1.5
        }
    }


});

const animation = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    delay: 300,
    easing: 'ease-out'
})


animation.reveal('.home-title, .home-sub, .home-text, .btn-main', { interval: 100 })
animation.reveal('.why-title, .card-1, .card-2, .card-3', { interval: 200 })
animation.reveal('.about-title, .about-text, .about-sub, .btn', { interval: 200 })
animation.reveal('.workers-title, .swiper', { interval: 200 })
animation.reveal('.ques-title, .ques-1, .ques-2, .ques-3, .ques-4, .ques-5, .ques-6', { interval: 200 })
animation.reveal('.contacts-left h3, .contacts-left p, .contacts-soc, .contacts-right', { interval: 200 })