const header = document.querySelector('.header')
const btnTop = document.querySelector('.btn-top')

window.addEventListener('scroll', () => {
    const currentY = window.scrollY

    activeHeader(currentY)
    activeLink(currentY)
    btnShow(currentY)
})

function activeHeader(currentY){
    if(currentY > header.offsetHeight){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
}

function activeLink(currentY){
    document.querySelectorAll('section').forEach(item => {
        if(currentY >= item.offsetTop - 250){
            document.querySelector('.active-link').classList.remove('active-link')
            document.querySelector(`a[href="#${item.id}"]`).classList.add('active-link')
        }else if(item.getBoundingClientRect().top + 150 < window.innerHeight){
            item.classList.add('show-sec')
        }else{
            item.classList.remove('show-sec')
        }
    })
}

function btnShow(currentY){
    if(currentY >= document.body.clientHeight / 2){
        btnTop.classList.add('show')
    }else{
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
        popup.classList.add('show')
        document.body.classList.add('stop-scroll')
    })

})

document.addEventListener('click', (event) => {
    if(event.target == popup || event.target == closeBtn){
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

