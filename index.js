import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

new Swiper('.swiper', {
  slidesPerView: "auto",
  spaceBetween: 16,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function openSlides(close, open) {
  let btn = document.querySelector('.swiper__button');
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    let parent = document.querySelector('.swiper-wrapper');
    if (btn.classList.contains('open')) {
      document.querySelector('.swiper-wrapper').style.maxHeight = open;
      btn.querySelector('span').textContent = 'Скрыть';
      const desktop = window.matchMedia("(min-width: 1121px)");
      if (desktop.matches) {
        let clone1 = document.querySelector('.swiper-slide:nth-child(2)').cloneNode(true);
        clone1.classList.add('clone')
        let clone2 = document.querySelector('.swiper-slide:nth-child(3)').cloneNode(true);
        clone2.classList.add('clone')
        parent.appendChild(clone1);
        parent.appendChild(clone2);
      }
    } else {
      document.querySelector('.swiper-wrapper').style.maxHeight = close;
      btn.querySelector('span').textContent = 'Показать все';
      let clones = document.querySelectorAll('.clone');
      for (let i = 0; i < clones.length; i++) {
        clones[i].remove();
      }
    }
  })
}
window.addEventListener('load', () => {
  openSlides('160px', '290px');
})
