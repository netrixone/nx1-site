const targets = Array.from(document.querySelectorAll("[data-observe]"));

const lazyLoad = target => {
  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const classe = target.getAttribute("data-classes").split(" ");
          target.classList.remove(...classe);

          observer.disconnect();
        }
      });
    },
    {
      rootMargin: "-100px",
      threshold: 0
    }
  );

  io.observe(target);
};

targets.forEach(lazyLoad);
