require("./vendor/arrayFrom");
import "intersection-observer";
import Swiper from "swiper";
import smoothScrollPolyfill from "./vendor/smoothscrolll";

smoothScrollPolyfill.polyfill();

const timeline = Array.from(document.querySelectorAll("[data-observe]"));
const sliders = Array.from(document.querySelectorAll("[data-slider]"));
const smoothScroll = Array.from(document.querySelectorAll("[data-smooth-scroll]"));
const htmlElement = document.getElementsByTagName("html")[0];
const darkModeSwitcher = Array.from(document.querySelectorAll("[data-toggle-dark-mode]"));
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;
const isNotSpecified = window.matchMedia("(prefers-color-scheme: no-preference)").matches;
const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;
let hasSchemeStored = sessionStorage.getItem("darkModeStored");


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

function switchDarkMode(element) {
  let darkColorScheme = hasSchemeStored !== null ? hasSchemeStored == "true" : isDarkMode;
  element.addEventListener("click", (event) => {
    event.preventDefault();
    darkColorScheme = !darkColorScheme;
    sessionStorage.setItem("darkModeStored", darkColorScheme.toString());
    toggleBodyDarkMode(darkColorScheme);
  })
}

function toggleBodyDarkMode(toggle = false): void {
  htmlElement.classList.toggle("mode-dark", toggle);
}

function setColorScheme() {
  if(hasSchemeStored !== null) {
    toggleBodyDarkMode(hasSchemeStored == "true");
  } else {
    window.matchMedia("(prefers-color-scheme: dark)").addListener(e => e.matches && toggleBodyDarkMode(true))
    window.matchMedia("(prefers-color-scheme: light)").addListener(e => e.matches && toggleBodyDarkMode(false))

    toggleBodyDarkMode(isDarkMode)
    if(isNotSpecified || hasNoSupport) {
      const now = new Date();
      const hour = now.getHours();
      if (hour < 4 || hour >= 16) {
        toggleBodyDarkMode(true);
      }
    }
  }


}

setColorScheme();
darkModeSwitcher.forEach(e => switchDarkMode(e));
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


