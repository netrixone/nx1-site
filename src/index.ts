import Glide from "@glidejs/glide";

const timeline = Array.from(document.querySelectorAll("[data-observe]"));
const sliders = Array.from(document.querySelectorAll("[data-slider]"));

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
  const glide = new Glide(entry.target, {
    type: "carousel",
    perView: 8,
    autoplay: 1,
    animationDuration: 3000,
    startAt: 0,
    animationTimingFunc: "linear"
  });

  glide.on("mount.before", () => {
    console.log("asdfas");
  });

  glide.mount();
}

timeline.forEach(e => lazyLoad(e, appendClasses));
sliders.forEach(e => lazyLoad(e, initCarousel, { rootMargin: "100px" }));
