// const cityNameInput=document.querySelector(".search-input");
// const citySearchIcon=document.querySelector(".search-icon");
// const loading = document.querySelector(".loading");
// const Denied = document.querySelector(".user-denied");
// const errorFetch =document.querySelector(".error-fetching");
// const locbutton=document.querySelector(".loc-button")

// let cityName,weatherData;


// citySearchIcon.addEventListener("click", async () => {
//     cityName=cityNameInput.value;
//     loading.style.display = "block";
//     errorFetch.style.display = "none";
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=da570a6b2276bc62ca7aaac5747e1544&units=metric`
//       );
//       const data = await response.json();
//       weatherData = data;
//       if (!response.ok) {
//         throw new Error();
//       }

//       const queryString = new URLSearchParams({
//         name: data.name,
//         temp: data.main.temp,
//         feels_like: data.main.feels_like,
//         description: data.weather[0].description,
//         humidity: data.main.humidity,
//         icon:data.weather[0].icon
//       }).toString();
//       window.location.href = `weather-info.html?${queryString}`;
//     } catch (error) {
//       errorFetch.style.display = "block";
//     } finally {
//       loading.style.display = "none";
//     }
//   });



//   locbutton.addEventListener("click", async () => {
//     loading.style.display = "block";
//     Denied.style.display = "none";
//     try {
//       if ("geolocation" in navigator) {
//         navigator.geolocation.getCurrentPosition(async (position) => {
//           const lat = position.coords.latitude;
//           const lon = position.coords.longitude;
//           const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=da570a6b2276bc62ca7aaac5747e1544&units=metric`
//           );
//           const data = await response.json();
//           weatherData = data;

//           if (!response.ok) {
//             Denied.style.display = "block";
//             throw new Error();
//           }
//           const queryString = new URLSearchParams({
//             name: data.name,
//             temp: data.main.temp,
//             feels_like: data.main.feels_like,
//             description: data.weather[0].description,
//             humidity: data.main.humidity,
//             icon: data.weather[0].icon,
//           }).toString();
//           window.location.href = `weather-info.html?${queryString}`;
//         });
//       } else {
//         Denied.style.display = "block";
//       }
//     } catch (error) {
//       Denied.style.display = "block";
//     } finally {
//       loading.style.display = "none";
//     }
//   });


const cityNameInput = document.querySelector(".search-input");
const citySearchIcon = document.querySelector(".search-icon");
const loading = document.querySelector(".loading");
const denied = document.querySelector(".user-denied");
const errorFetch = document.querySelector(".error-fetching");
const locbutton = document.querySelector(".loc-button");

let cityName, weatherData;

citySearchIcon.addEventListener("click", async () => {
    cityName = cityNameInput.value;
    loading.style.display = "block";
    errorFetch.style.display = "none";
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=da570a6b2276bc62ca7aaac5747e1544&units=metric`
        );
        const data = await response.json();
        weatherData = data;
        if (!response.ok) {
            throw new Error();
        }

        const queryString = new URLSearchParams({
            name: data.name,
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            icon: data.weather[0].icon
        }).toString();
        window.location.href = `weather-info.html?${queryString}`;
    } catch (error) {
        errorFetch.style.display = "block";
    } finally {
        loading.style.display = "none";
    }
});

locbutton.addEventListener("click", async () => {
    loading.style.display = "block";
    denied.style.display = "none";
    try {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    const response = await fetch(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=da570a6b2276bc62ca7aaac5747e1544&units=metric`
                    );
                    const data = await response.json();
                    weatherData = data;

                    if (!response.ok) {
                        denied.style.display = "block";
                        throw new Error();
                    }

                    const queryString = new URLSearchParams({
                        name: data.name,
                        temp: data.main.temp,
                        feels_like: data.main.feels_like,
                        description: data.weather[0].description,
                        humidity: data.main.humidity,
                        icon: data.weather[0].icon,
                    }).toString();
                    window.location.href = `weather-info.html?${queryString}`;
                },
                (error) => {
                    // Handle geolocation errors here
                    if (error.code === error.PERMISSION_DENIED) {
                        denied.style.display = "block";
                    } else {
                        // Handle other possible errors here
                        denied.style.display = "block";
                    }
                }
            );
        } else {
            denied.style.display = "block";
        }
    } catch (error) {
        denied.style.display = "block";
    } finally {
        loading.style.display = "none";
    }
});



    


   



 







        





       
