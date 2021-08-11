require("./vendor/arrayFrom");
import "intersection-observer";
import Swiper from "swiper";
import smoothScrollPolyfill from "./vendor/smoothscrolll";

smoothScrollPolyfill.polyfill();

const timeline = Array.from(document.querySelectorAll("[data-observe]"));
const sliders = Array.from(document.querySelectorAll("[data-slider]"));
const smoothScroll = Array.from(
  document.querySelectorAll("[data-smooth-scroll]")
);
const expander = Array.from(document.querySelectorAll("[data-expand-trigger]"));
const htmlElement = document.getElementsByTagName("html")[0];
const darkModeSwitcher = Array.from(
  document.querySelectorAll("[data-toggle-dark-mode]")
);
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;
const isNotSpecified = window.matchMedia(
  "(prefers-color-scheme: no-preference)"
).matches;
let darkColorScheme = isDarkMode;

const DARK_MODE_STRING = "nx1-dark-theme-enable";
const DARK_MODE_COOKIE_LENGTH = 31;
const storedDarkMode = getCookie(DARK_MODE_STRING);

if (storedDarkMode) {
  darkColorScheme = storedDarkMode === "true";
}

const lazyLoad = (target, cb, config = {}) => {
  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cb(entry);
          observer.disconnect();
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
  element.addEventListener("click", event => {
    event.preventDefault();
    darkColorScheme = !darkColorScheme;
    localStorage.setItem("darkModeStored", darkColorScheme.toString());
    toggleBodyDarkMode(darkColorScheme);

    setCookie(DARK_MODE_STRING, darkColorScheme, DARK_MODE_COOKIE_LENGTH);
  });
}

function toggleBodyDarkMode(toggle = false): void {
  htmlElement.classList.toggle("mode-dark", toggle);
}

function setColorScheme() {
  if (typeof storedDarkMode !== null && storedDarkMode !== "") {
    toggleBodyDarkMode(storedDarkMode === "true");
  } else {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addListener(e => e.matches && toggleBodyDarkMode(true));
    window
      .matchMedia("(prefers-color-scheme: light)")
      .addListener(e => e.matches && toggleBodyDarkMode(false));

    if (isDarkMode) {
      toggleBodyDarkMode(true);
    } else if (isLightMode) {
      toggleBodyDarkMode(false);
    } else {
      toggleBodyDarkMode(true);
    }
  }
}

function expandContent(e: Element): void {
  const content = document.querySelector(`[data-expand-content="${e.getAttribute("data-expand-trigger")}"]`) as HTMLElement;
  let isExpanded = false
  e.addEventListener("click", event => {
    event.preventDefault();
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    };
    e.innerHTML = e.getAttribute(isExpanded ? "data-show-more" : "data-show-less");
    isExpanded = !isExpanded;
  });

  content.addEventListener("transitionend", (e) => {
    if (e.propertyName === "max-height") {
      scrollIntoViewElement(content);
    }
  })
}

function scrollIntoViewElement(element: Element): void {
  element.scrollIntoView({
    behavior: "smooth"
  })
}

function getCookie(value: string): string {
  const name = value + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(
  name: string,
  value: string | boolean,
  exdays: number
): void {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

setColorScheme();
darkModeSwitcher.forEach(e => switchDarkMode(e));
timeline.forEach(e => lazyLoad(e, appendClasses));
sliders.forEach(e => lazyLoad(e, initCarousel, { rootMargin: "100px" }));
expander.forEach(e => expandContent(e));
smoothScroll.forEach(e => {
  e.addEventListener("click", event => {
    event.preventDefault();
    scrollIntoViewElement(document.getElementById(e.getAttribute("href").substr(1)));
  });
});

document.addEventListener("DOMContentLoaded", () => {
  htmlElement.classList.remove("opacity-0", "invisible");
})
