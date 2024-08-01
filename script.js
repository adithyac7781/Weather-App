const city=document.querySelector(".search");
const cityNameInput=document.querySelector(".search-input");
const citySearchIcon=document.querySelector(".search-icon");
const locationName=document.querySelector(".location-name");
const loadingDiv = document.querySelector(".loading");
const userDenied = document.querySelector(".user-denied");

let cityName;

let weatherData

citySearchIcon.addEventListener('click',event => {
    loadingDiv.style.display = "block";
    // errorFetching.style.display = "none";
     userDenied.style.display = "none";
    //function nextHtml(){
      // window.location.href = 'weather-info.html'
    //}
    //setTimeout(nextHtml,100000);
    //nextHtml();
    
    cityName=cityNameInput.value;


    const base= `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=da570a6b2276bc62ca7aaac5747e1544`;

    fetch(base)
    .then((response) => {
    return response.json();
    })
    .then((data) => {
        console.log(data);
        locationName.textContent=data;
        
        // if (!response.ok) {
        //     throw new Error();
        //                   }

                    }  
         )
    .catch((error) => {
        userDenied.style.display = "block";
                    }
         )
    .finally(() => {
        loadingDiv.style.display = "none";
                   }
        )

    })


   



 







        





       
