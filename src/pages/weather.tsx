import { getWeather } from "../utils/api/getWeather.js"
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
    
};

 
const Weather: React.FC = () => {
    const loaderData = useLoaderData()
    console.log(loaderData)
    return (
        <>
            <h1>This is Weather Page</h1>
        </>
    )
}

export default Weather;