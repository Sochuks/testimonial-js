const btn = document.querySelectorAll('.btn');
const slide = document.querySelector('.slider-one');

let currentSlide = 0;

btn.forEach((item, i) => {
    item.addEventListener('click', () => {
        btn[currentSlide].classList.remove('active')
        slide.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentSlide = i;
    })
})


