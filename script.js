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

//new changes
document.addEventListener("DOMContentLoaded", function() {

            // --- Handle L1 -> L2 Accordions (Services, Resources) ---
            var mainToggles = document.querySelectorAll('.nav-item.dropdown > .dropdown-toggle');
            mainToggles.forEach(function(toggle) {
                toggle.addEventListener('click', function(e) {
                    if (window.innerWidth < 992) {
                        e.preventDefault(); 
                        this.classList.toggle('open');
                        var submenu = this.nextElementSibling;
                        if (submenu && submenu.classList.contains('dropdown-menu')) {
                            submenu.classList.toggle('open');
                        }
                    }
                });
            });

            // --- Handle L2 -> L3 Accordions (BIM, CAD, etc.) ---
            var submenuTriggers = document.querySelectorAll('.dropdown-submenu > .dropdown-item.has-arrow');
            submenuTriggers.forEach(function(trigger) {
                
                trigger.addEventListener('click', function(e) {
                    if (window.innerWidth < 992) {
                        e.preventDefault();
                        this.classList.toggle('open');
                        var submenu = this.nextElementSibling;
                        if (submenu && submenu.classList.contains('dropdown-menu')) {
                            submenu.classList.toggle('open');
                        }
                    }
                });
            });

            // --- Reset accordions when mobile menu is closed ---
            var navbarCollapse = document.getElementById('mainNavbar');
            if (navbarCollapse) {
                navbarCollapse.addEventListener('hidden.bs.collapse', function () {
                    document.querySelectorAll('.dropdown-menu.open, .dropdown-toggle.open, .dropdown-item.open').forEach(function(element) {
                        element.classList.remove('open');
                    });
                });
            }
        });