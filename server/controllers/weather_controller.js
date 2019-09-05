const axios = require('axios')
class weather_controller {
    static getWeather (req,res,next){
        let { city , country } = req.query
        let result = {}
        let koordinat
        let kondisi = false
        let dataLuar;
        axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(({data})=>{
            // console.log(data[0].latlng )
            koordinat = data[0].latlng
            return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${data[0].capital}&APPID=4b182e44fd2372e5dad09ffe2097ecf6`)
        })
        .then(({data})=>{
            let lon = data.coord.lon
            let lat = data.coord.lat
            result.wind = data.wind.speed
            result.weather1 = data.weather[0].main
            return axios.get(`https://api.darksky.net/forecast/b610df5c0f210ed2419183ccb1bd2030/${lat},${lon}`)
        })
        .then(({data})=>{
            result.temperature = data.currently.temperature
            result.weather = {  summary : data.hourly.summary , icon : data.hourly.icon } 
            res.json(result)
        })
        .catch(console.log)

    }
}

module.exports = weather_controller