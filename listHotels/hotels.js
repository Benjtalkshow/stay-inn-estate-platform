// Function to fetch and loop through the JSON data
async function fetchHotels() {
  try {
    const response = await fetch("/assets/json/hotels.json");
    const data = await response.json();
    loopHotelData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchHotels();

//function to loop through JSON data
function loopHotelData(hotelCard) {
  hotelCard.forEach((Cards, index) => {
    createCard(Cards, index);
  });
}

//function to create each card
function createCard(eachCard, index) {
  const cardContainer = document.querySelector(".hotels");

  const html = `<div class="card">
  <div class="overlay"><button class="overlay-button">View Hotel</button></div>
  <img src="${eachCard.image}" alt="" class="photos">
  <h1 class="heading">${eachCard.heading}</h1>
  <div class="locationContainer">
      <p class="location"> <i
      class="fa-solid fa-location-dot"
      style="margin: 0px 5px 0px 0px"></i>${eachCard.location}</p>
      <input type="hidden" value="${index}" class="index">
      <div class="hotel_rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          </div>
  </div>
  <p class="priceRange">${eachCard.priceRange}</p>
</div>`;

  cardContainer.insertAdjacentHTML("beforeend", html);
  let overlay = document.querySelectorAll(".overlay-button");
  overlay.forEach((el) => {
    el.onclick = () => {
      const urlParams = new URLSearchParams();
      urlParams.set("image", el.parentElement.nextElementSibling.src);
      urlParams.set("heading", el.parentElement.nextElementSibling.nextElementSibling.innerHTML);
      urlParams.set("location", el.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.children[0].innerHTML);
      urlParams.set("price", el.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML);
      urlParams.set("index", el.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.children[1].value);
      const url = "/viewHotels/view_hotels.html?" + urlParams.toString();
      window.location.href = url;
    };
  });

}

//Implementing search input
function search() {
  const search = document.querySelector(".search"); // Search Input
  const searchItem = search.value.trim().toUpperCase(); // Trim and convert to uppercase
  const searchWords = searchItem.split(/\s+/); // Split search query into words
  const product = document.querySelectorAll(".card"); // Hotel cards
  for (let i = 0; i < product.length; i++) {
    const description1 = product[i].querySelector(".heading");
    const description2 = product[i].querySelector(".location");
    if (description1 && description2) {
      let textValue1 = description1.textContent || description1.innerHTML;
      let textValue2 = description2.textContent || description2.innerHTML;
      textValue1 = textValue1.toUpperCase();
      textValue2 = textValue2.toUpperCase();

      let match = false;
      for (const word of searchWords) {
        if (textValue1.includes(word) || textValue2.includes(word)) {
          match = true;
          break;
        }
      }

      if (match) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
        document.querySelector('.search-warning').innerHTML = "No Exact Hotel Found!!"
      }
    }
  }
}
search();


// Getting search details from home page to listHotels page
function getFromLocalStorage() {
  const searchDetail = localStorage.getItem("location")
  const persons = localStorage.getItem("persons")
  const startDate = localStorage.getItem("startDate")
  const endDate = localStorage.getItem("endDate");

  const addr = document.querySelector(".address").value = searchDetail;
  const people = document.querySelector(".people").innerHTML = persons;
  const checkIn = document.querySelector(".checkIn").innerHTML = startDate;
  const checkOut = document.querySelector(".checkOut").innerHTML = endDate;


  const topDate = new Date(localStorage.getItem("startDate"));
  const downDate = new Date(localStorage.getItem("endDate"));

  function datediff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }

  const diffDays = datediff(topDate, downDate);
  const numberOfNihghts = document.querySelector(".No-of-nights").innerHTML = `${diffDays} NIGHTS`;
  localStorage.setItem("diffDays", diffDays)
  window.onbeforeunload = function () {
    localStorage.removeItem("location")
  }

}
getFromLocalStorage();

//Redirect back to index.html page if differences b/w dates is less than or equal to 0
const numOfNight = localStorage.getItem("diffDays")
window.onload = function () {
  (numOfNight < 0 || numOfNight == 0 ) ? window.location.href = "/index.html" : console.log("fully loaded");
};