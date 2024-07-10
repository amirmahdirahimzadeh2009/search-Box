import { samsungPhones } from "./phones.js";

const searchBox = document.querySelector(".searchBox");
const results = document.querySelector(".results");

searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();
  const filteredUsers = samsungPhones.filter((phone) => {
    return phone.model.toLowerCase().includes(query);
  });
  displayResults(filteredUsers);
});

function displayResults(samsungPhones) {
  results.innerHTML = "";
  if (samsungPhones.length === 0) {
    results.innerHTML = "<p>No phone found.</p>";
    return;
  }

  samsungPhones.forEach((phone) => {
    const phoneElement = document.createElement("div");
    phoneElement.classList.add("phone");
    phoneElement.innerHTML = `
        <h2>${phone.model}</h2>
      <div class="row">
        <span>Release Year:</span>
        <span>${phone.releaseYear}</span>
      </div>
      <div class="row">
        <span>Screen Size:</span>
        <span>${phone.screenSize}</span>
      </div>
      <div class="row">
        <span>Battery Capacity:</span>
        <span>${phone.batteryCapacity}</span>
      </div>
      <div class="row">
        <span>Camera:</span>
        <span>${phone.camera}</span>
      </div>
      `;
    results.appendChild(phoneElement);
  });
}
