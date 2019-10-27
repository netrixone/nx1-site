require("./vendor/arrayFrom");
import "intersection-observer";
import Swiper from "swiper";
import smoothScrollPolyfill from "./vendor/smoothscrolll";

smoothScrollPolyfill.polyfill();

const timeline = Array.from(document.querySelectorAll("[data-observe]"));
const sliders = Array.from(document.querySelectorAll("[data-slider]"));
const smoothScroll = Array.from(document.querySelectorAll("[data-smooth-scroll]"));

const lazyLoad = (target, cb, config = {}) => {
  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cb(entry);
          observer.disconnect();∂
        }
      });
    },
    {
      rootMargin: "-100px",
      threshold: 0,
      ...config
    }
  );

  io.observe(target);
};

function appendClasses(entry) {
  const target = entry.target;
  const classe = target.getAttribute("data-classes").split(" ");
  target.classList.remove(...classe);
}

function initCarousel(entry) {
  const slider = entry.target;
  const sliderId = slider.getAttribute("data-slider");
  const prev = document.querySelector(`[data-slide-prev="${sliderId}"]`);
  const next = document.querySelector(`[data-slide-next="${sliderId}"]`);
  const swiper = new Swiper(entry.target, {
    slidesPerView: 2,
    navigation: {
      nextEl: next,
      prevEl: prev,
      disabledClass: "slide-disabled"
    },
    breakpoints: {
      480: {
        slidesPerView: 3
      },
      640: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 5
      },
      1024: {
        slidesPerView: 6
      },
      1200: {
        slidesPerView: 8
      }
    }
  });
}

timeline.forEach(e => lazyLoad(e, appendClasses));
sliders.forEach(e => lazyLoad(e, initCarousel, { rootMargin: "100px" }));

smoothScroll.forEach(e => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById(e.getAttribute('href').substr(1)).scrollIntoView({
      behavior: "smooth",
    })
  })
});
