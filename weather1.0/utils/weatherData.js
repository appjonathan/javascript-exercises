import request from 'request'

const openWeatherMap = {
  BASE_URL: "https://api.openweathermap.org/data/2.5/weather?q=",
  SECRET_KEY: "",
};

const weatherData = (address, callback) => {
  const url =
    openWeatherMap.BASE_URL +
    encodeURIComponent(address) +
    "&lang=de" +
    "&APPID=" +
    openWeatherMap.SECRET_KEY
  console.log(url)
  request({ url, json: true }, (error, data) => {
    if (error) {
      callback(true, "Unable to fetch data, Please try again. " + error)
    }
    callback(false, data?.body)
  })
}

export default weatherData

