const apiKey="fc9ea74e269d9573642fe7b5479179d6";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch( apiUrl + city + `&appid=${apiKey}`)


    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %"

    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/cloudy.webp";
        weatherIcon.style.width = "120px";
        weatherIcon.style.height = "120px";
        weatherIcon.style.borderRadius = "50%"
        weatherIcon.style.marginBottom= "5px"
        document.querySelector(".status").innerHTML = "Cloudy"
  document.querySelector(".video").setAttribute("src", "videos/cloudy-sky.mp4")
        document.querySelector(".video").style.display = "block"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clearsky.webp";
        weatherIcon.style.width = "120px";
        weatherIcon.style.height = "120px";
        weatherIcon.style.borderRadius = "50%"
        weatherIcon.style.marginBottom= "5px"
        document.querySelector(".status").innerHTML = "Clear-Sky"
        document.querySelector(".video").setAttribute("src", "videos/clear-sky.mp4")
        document.querySelector(".video").style.display = "block"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rainy.webp";
        weatherIcon.style.width = "120px";
        weatherIcon.style.height = "120px";
        weatherIcon.style.borderRadius = "50%"
        weatherIcon.style.marginBottom= "5px"
        document.querySelector(".status").innerHTML = "Rainy"
        document.querySelector(".video").setAttribute("src", "videos/Rainy.mp4")
        document.querySelector(".video").style.display = "block"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/thunder.webp";
        weatherIcon.style.width = "120px";
        weatherIcon.style.height = "120px";
        weatherIcon.style.borderRadius = "50%"
        weatherIcon.style.marginBottom= "5px"
        document.querySelector(".status").innerHTML = "Drizzling"
        document.querySelector(".video").setAttribute("src", "videos/drizzle.mp4")
        document.querySelector(".video").style.display = "block"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mistt.webp";
        weatherIcon.style.width = "120px";
        weatherIcon.style.height = "120px";
        weatherIcon.style.borderRadius = "50%"
        weatherIcon.style.marginBottom= "5px"
        document.querySelector(".status").innerHTML = "Mist"
        document.querySelector(".video").setAttribute("src", "videos/mist.mp4")
        document.querySelector(".video").style.display = "block"
    } 
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}
searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value)
})
