//query select button id to generate dog pic
const dogPicButton = document.querySelector('#dog-pic-button');

//dogPicButton event listener
dogPicButton.addEventListener('click', makeApiRequest)

async function makeApiRequest() {

    const rawData = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await rawData.json();

    const image = document.querySelector('#doggyPic');
    image.src = data.message;

}

// weather app

const cityInput = document.querySelector('#cityInput');
const weatherSubmit = document.querySelector('#weatherSubmit');
const url = 'https://goweather.herokuapp.com/weather/'

// event listener

weatherSubmit.addEventListener('click', async function (e) {
    e.preventDefault();
    const result = await apiRequestWeather(cityInput.value)
    displayData(result);
})

// fetch data

async function apiRequestWeather(city) {

    //add what user typed to end of url:
    const newUrl = url + city;
    console.log(newUrl);

    //use that new url and fetch the data from it
    const rawData = await fetch(newUrl);

    // parse raw data, store that
    const data = await rawData.json();

    return data;
    console.log(data);
}

// display data
const weatherDataContainer = document.querySelector('#apiWeatherData');

function displayData(data) {
    const temperature = data.temperature;
    const wind = data.wind;
    const description = data.description;
    const forecasts = data.forecast;

    const mainElement = `
    <p>Temperature: ${temperature}</p>
    <p>Wind: ${wind}</p>
    <p>Description: ${description}</p>
    <p>Forecast:
  `

    weatherDataContainer.innerHTML = mainElement

    for (forecast of forecasts) {

        let day = forecast.day
        let temp = forecast.temperature
        let wind = forecast.wind

        day.value
        temp.value
        wind.value
    }



    console.log(data)
}
