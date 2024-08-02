const headerimg=document.querySelector(".header-img");

headerimg.addEventListener("click",() => {
  window.location.href = `index.html`;
})

function getContent() {
    const params = new URLSearchParams(window.location.search);
    return {
      name: params.get("name"),
      temp: params.get("temp"),
      feels_like: params.get("feels_like"),
      description: params.get("description"),
      humidity: params.get("humidity"),
      icon: params.get("icon"),
    };
  }

const content = getContent();
const city = content.name;
const humidity = content.humidity;
const feels_like = content.feels_like;
const temperature = content.temp;
const description = content.description;
const icon = content.icon;


document.querySelector(".location-name").textContent = city;
document.querySelector(".hum-span").textContent = humidity
document.querySelector(".feels-like-span").textContent=feels_like;
document.querySelector(".temp-span").textContent=temperature;
document.querySelector(".description-span").textContent=description;
const newImg = `https://openweathermap.org/img/wn/${icon}@2x.png`;
document.querySelector(".weather-image").src = newImg;




















