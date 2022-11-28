/* const key = 'd552ea1d9d4f538af4befd7de0192945'
const url = 'https://api.openweathermap.org/data/2.5/weather?q=medellin&${key}'

const clima = fetch('url')
            .then(response => response.json()) 
            .then(data => console.log(data.main.temp))

console.log(clima); */


const send = document.querySelector('#send');
const clima = document.querySelector('#clima');
const icono = document.querySelector('#icono');

send.addEventListener('click', queryWeather);

function queryWeather(e){
    e.preventDefault()
    const city = document.querySelector('#city').value;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d552ea1d9d4f538af4befd7de0192945&units=metric`
    const weather = fetch(url)
            .then(res => res.json()) 
            .then(data => showIntoDOM(data))
}

function showIntoDOM(data){
    clearHTML()
    const iconUrl =`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const {main:{temp,humidity,feels_like}} = data;
    const city = document.querySelector('#city').value;
    const celsius = document.createElement('p');
    const icono = document.createElement('img');
    icono.src = iconUrl;
    const humedad = document.createElement('p');

    humedad.textContent =  `Con una humedad de ${humidity}`;
    celsius.textContent = `La temperatura actual de ${city} es ${Math.ceil(temp)}°C`
    clima.appendChild(icono)
    clima.appendChild(celsius)
    clima.appendChild(humedad)  
    console.log(data);
}

function clearHTML(){
    clima.innerHTML = '';
}