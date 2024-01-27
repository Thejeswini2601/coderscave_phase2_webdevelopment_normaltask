const inputbox = document.querySelector(".search input");
const searchbtn =document.querySelector(".search button");
const weatherimg = document.querySelector('.weather-img');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.description');
const humi = document.getElementById('humidity');
const wind = document.getElementById('windspeed');
const loc_not_found = document.querySelector('.loc_not_found');
const weather_body = document.querySelector('.weather-body');

const api_key="d43d47ce066837a0570ceb7fceacc020";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkweather(city)
{
    const response = await fetch(url + city + `&appid=${api_key}`);
    var data = await response.json();

    if(data.cod==`404`){
        loc_not_found.style.display ="flex";
        weather_body.style.display ="none";
        console.log("error");
        return;
    }
    weather_body.style.display="flex";
    loc_not_found.style.display="none";
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humi.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/hr";
    desc.innerHTML = data.weather[0].description;
    console.log(data)

    if(data.weather[0].main=="Clouds")
    {
        weatherimg.src="cloudy.jpg";
    }
    else if(data.weather[0].main=="Clear")
    {
        weatherimg.src="sunny.jpg";
    }
    else if(data.weather[0].main=="Rain")
    {
        weatherimg.src="rainy.jpg";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weatherimg.src="drizzle.jpg";
    }
    else if(data.weather[0].main=="Haze")
    {
        weatherimg.src="haze.jpg";
    }
    else if(data.weather[0].main=="Mist")
    {
        weatherimg.src="haze.jpg";
    }
    else if(data.weather[0].main=="Smoke")
    {
        weatherimg.src="haze.jpg";
    }
    else if(data.weather[0].main=="Snow")
    {
        weatherimg.src="snow.jpg";
    }
}


searchbtn.addEventListener("click",()=>{
    checkweather(inputbox.value);
})