const bar = document.querySelector(".xbar");
const xmark = document.querySelector(".xmark");
const navBar = document.querySelector(".navbar");
const linkContainer = document.querySelector(".link_container");

// javascript code for hamburger menu
bar.addEventListener("click", (e) => {
  e.preventDefault();
  navBar.classList.add("display");
  linkContainer.classList.add("active");
  bar.style.display = "none";
  xmark.style.display = "inline-block";
  xmark.style.color = "#D1AC00";
});

xmark.addEventListener("click", (e) => {
  e.preventDefault();
  navBar.classList.remove("display");
  linkContainer.classList.remove("active");
  bar.style.display = "inline-block";
  xmark.style.display = "none";
});


// Function to handle the intersection of the observed elements
class BootStrapAnimation {
  #section;
  constructor(section) {
    this.#section = section;
    this.#observeIntersection();
  }

  #handleIntersection(entries, observer) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }
  }

  #observeIntersection() {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(
      this.#handleIntersection,
      observerOptions
    );
    observer.observe(this.#section);
  }
}

function animateOnIt() {
  const sections = document.querySelectorAll(".lazy-section");
  for (const section of sections) {
    new BootStrapAnimation(section);
  }
}

animateOnIt();


// Navbar responsiveness with the help of javascript method (matchMedia())
const mediaQueryActive = window.matchMedia('(min-width: 962px)');
const displayHamburger = window.matchMedia('(max-width:961px)');
const checkMediaQueryActive = (mq) => {
  if (mq.matches) {
    if (linkContainer.classList.contains('active')) {
      linkContainer.classList.remove('active');
      navBar.classList.remove('display')
      xmark.style.display = "none"
    } 
  }
};
mediaQueryActive.addEventListener('change', checkMediaQueryActive);
checkMediaQueryActive(mediaQueryActive);

const checkDisplayHamburger = (mqh) => {
    if (mqh.matches) {
        bar.style.display = "inline-block";
    }
};
displayHamburger.addEventListener('change',checkDisplayHamburger );
checkDisplayHamburger(displayHamburger);