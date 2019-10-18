const targets = document.querySelectorAll("img");

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries);
    entries.forEach(entry => {
      console.log("😍");

      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("data-src");

        img.setAttribute("src", src);

        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

//todo disable parce hash images
//targets.forEach(lazyLoad);
