const apiKey = '941f176a04deaa96a65dd36a45dd6751';
const cityID = 3435910;

async function fetchWeatherData() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    const temperature = data.main.temp;
    const pressure = data.main.pressure;
    const humidity = data.main.humidity;
    const iconCode = data.weather[0].icon;

    document.getElementById('temperature').textContent = `${temperature} °C`;
    document.getElementById('pressure').textContent = `${pressure} hPa`;
    document.getElementById('humidity').textContent = `${humidity} %`;
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${iconCode}.png`;
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchWeatherData();




