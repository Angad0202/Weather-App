const apiKey = "*****";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

const searchInp = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(cityName){
    const response = await fetch(apiUrl+`q=${cityName}`+`&appid=${apiKey}`+`units=metric`);
    var data =  await response.json;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "C"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/hr";
    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "/images/clouds.png"
    }
    else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "/images/clear.png"
    }
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "/images/rain.png"
    }
    else if(data.weather[0].main === "Dizzle"){
        weatherIcon.src = "/images/dizzle.png"
    }
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "/images/mist.png"
    }

    document.querySelector(".weather").style.display = "block"
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchInp.value); 
})