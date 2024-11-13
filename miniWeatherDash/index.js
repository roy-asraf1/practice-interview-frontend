
function returnWeather() {

    const cityLocation = document.getElementById('city').value;
    const weatherElement = document.getElementById('tmp');

    if(cityLocation === "maalot")
        weatherElement .innerText = '20';
    else if(cityLocation === "london")
        weatherElement.innerText = '15';
    else{
        weatherElement.innerText = '1111';
    }
    
}

// function getWeather() {
//     const location = document.getElementById('locationInput').value.toLowerCase();
//     const tempElement = document.getElementById('weatherTemp');

//     // Check for special cases and set temperature
//     if (location === "roni") {
//         tempElement.innerText = `20°C`;
//     } else if (location === "roi") {
//         tempElement.innerText = `30°C`;
//     } else {
//         tempElement.innerText = `50°C`;
//     }
// }

