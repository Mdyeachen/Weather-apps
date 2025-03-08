import axios from "axios";

export default const GetWeather = async (lat, lon) => {
    const apiKey = "3d66609ad536d9fe22bde8b5af4d0cd4";
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

    const response = await axios.get(URL)

    return response;
}



// checking function
// getWeather('22.8159', '89.566')