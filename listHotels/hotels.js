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
  hotelCard.forEach((Cards,index) => {
    createCard(Cards,index);
  });
}

//function to create each card
function createCard(eachCard,index) {
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
      urlParams.set("index",el.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.children[1].value );
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


