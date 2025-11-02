document.addEventListener("DOMContentLoaded", () => {
  let fired = false;

  function startCount() {
    document.querySelectorAll(".counter").forEach((el) => {
      let target = +el.dataset.target;
      let duration = 2000;
      let startTime = null;

      function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let percent = Math.min(progress / duration, 1);
        let current = Math.floor(target * percent);
        el.innerText = current + "+";
        if (percent < 1) requestAnimationFrame(animate);
      }

      requestAnimationFrame(animate);
    });
  }

  window.addEventListener("scroll", () => {
    const box = document
      .getElementById("stats-section")
      .getBoundingClientRect();
    if (box.top < window.innerHeight && !fired) {
      startCount();
      fired = true;
    }
  });
});

//slider function

let index = 0;
let slides = document.querySelectorAll("#auto-slider .col-sm-12");

function autoSlide() {
  if (window.innerWidth <= 768) {
    slides.forEach((s) => s.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
  } else {
    slides.forEach((s) => s.classList.add("active"));
  }
}

autoSlide(); // initial
setInterval(autoSlide, 3000);
