const axios = require('axios');

getClima = async (lat,long) =>
{
const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=bdd922665a566827ca759bb018de2700&units=metric`);

return resp.data.main.temp;

}


module.exports =
{
    getClima
}