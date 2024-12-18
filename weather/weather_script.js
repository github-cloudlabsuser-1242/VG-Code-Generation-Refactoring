const apiKey = '66818c76820dbd19b86bb1f56976285d'; // Replace with your OpenWeatherMap API key
const city = 'London'; // Replace with the desired city

async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayWeatherData(data) {
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const weatherCondition = data.weather[0].description;

    console.log(`Temperature: ${temperature}°C`);
    console.log(`Humidity: ${humidity}%`);
    console.log(`Weather Condition: ${weatherCondition}`);
}

fetchWeatherData(city);