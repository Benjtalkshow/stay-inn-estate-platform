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

// Navbar responsiveness with the help of javascript method (matchMedia())
const mediaQueryActive = window.matchMedia("(min-width: 962px)");
const displayHamburger = window.matchMedia("(max-width:961px)");
const checkMediaQueryActive = (mq) => {
  if (mq.matches) {
    if (linkContainer.classList.contains("active")) {
      linkContainer.classList.remove("active");
      navBar.classList.remove("display");
      xmark.style.display = "none";
    }
  }
};
mediaQueryActive.addEventListener("change", checkMediaQueryActive);
checkMediaQueryActive(mediaQueryActive);

const checkDisplayHamburger = (mqh) => {
  if (mqh.matches) {
    bar.style.display = "inline-block";
  }
};
displayHamburger.addEventListener("change", checkDisplayHamburger);
checkDisplayHamburger(displayHamburger);

// Hero sub-section js function
const hero_inputs = document.querySelectorAll(".hero-first-input");
const searchBtn = document.querySelector(".searchbar");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const firstInputValue = hero_inputs[0].value;
  const secondInputValue = hero_inputs[1].value;
  const thirdInputValue = hero_inputs[2].value;
  // reset inputs values
  function inputReset() {
    hero_inputs[0].value = "";
    hero_inputs[1].value = "Person(s)";
    hero_inputs[2].value = "";
  }
  if (typeof firstInputValue === "string" && !isNaN(secondInputValue) && Date.parse(thirdInputValue)) {
// No location error
    window.alert("No Available Loaction at the Moment")
    inputReset();
  } else {
    window.alert(
      "Invalid input values. The first input should be text, the second input should be a number, and the third input should be a valid date."
    );
    inputReset();
  }
});

//Change background image
const bgImage = document.querySelector('.big-img')
const gridImages = document.querySelectorAll('.grid-img')
gridImages.forEach((images) => {
images.addEventListener('click',() => {
imageUrl = images.getAttribute('src')
bgImage.setAttribute('src', imageUrl)
})
})



// Writing effect Animation
function typeWriter() {
  var i = 0;
  var txt = "Find the Best";
  var speed = 100;
  function writerEffect() {
    if (i < txt.length) {
      document.querySelector(".writing-effect").innerHTML += txt.charAt(i);
      i++;
      setTimeout(writerEffect, speed);
    }
  }
  writerEffect();
}
typeWriter();

setTimeout(() => {
  function typeWriter2() {
    var i = 0;
    var txt = "Hotels in your city";
    var speed = 100;
    function writerEffect() {
      if (i < txt.length) {
        document.querySelector(".writing-effetz").innerHTML += txt.charAt(i);
        i++;
        setTimeout(writerEffect, speed);
      }
    }
    writerEffect();
  }
  typeWriter2();
}, 1500);
