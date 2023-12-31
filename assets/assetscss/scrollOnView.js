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
