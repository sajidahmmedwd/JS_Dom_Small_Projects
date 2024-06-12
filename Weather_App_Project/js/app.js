const getWeather = () => {
    const city = document.getElementById("cityInput").value;
    const apiKey = "f062aeb3b8d2adeefcdfb0ad234f3409";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {

        const weatherInfo = document.getElementById("weatherInfo");

        const description = data.weather[0].description;
        const temp = data.main.temp;
        const humi = data.main.humidity;
        const windSpeed = data.wind.speed;

        weatherInfo.innerHTML = `
            <p>Description: ${description}</p>
            <h4>Temperature: ${temp} &#8451</h4>
            <p>Humidity: ${humi}%</p>
            <p>Wind Speed: ${windSpeed} m/s</p>
        `;

    })
    .catch(error => {
        console.error("Opps!, Sorry"), error;
        document.getElementById("weatherInfo").innerText = "City Not Found.!"
    })

}