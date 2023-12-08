import '../style/style.css';

const parameter = {
    access_key : "73454b05b94c9de190487aff1bd8c01a",
    query : "bourges"
}
var access_key;
var query;

//`http://api.weatherstack.com/current?access_key=${parameter.access_key}&query=${parameter.query}`
fetch("config.json")
.then((response) => response.json()
.then((api) => {
    access_key = api.key;
    query = api.ville;
    fetch(`http://api.weatherstack.com/current?access_key=${access_key}&query=${query}`)
    .then((rep) => rep.json()
    .then((data) => {
        console.log(data)
        document.querySelector('#température').innerHTML = data.current.temperature
        document.querySelector('#temps').innerHTML = data.current.weather_descriptions
        document.querySelector('#humidite').innerHTML = data.current.humidity
            })
        );
    })
);