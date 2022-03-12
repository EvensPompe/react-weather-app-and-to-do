import Details from "./Component/layout/Details";
import { useContext, useEffect } from "react";
import { WeatherContext } from "./Context/Weather/";
import { getWeather } from "./getWeather";
import { type } from "./Context/weather";
export default function Main() {
    const [weatherState, dispatch] = useContext(WeatherContext);
    const { weather } = weatherState;
    const initWeather = async () => {
        console.log("ok")
      const data = await getWeather(weatherState.city, weatherState.apiKey);
      dispatch({ type: type.getWeather, payload: data });
    };
    useEffect(() => {
      initWeather();
    }, [dispatch]);

    setInterval(initWeather,3600000);

    const open = () =>{
        dispatch({type:type.show,payload:true});
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto text-center bg-primary mt-5 p-5 rounded">
                    {weather
                        ?
                        <Details weather={weather} />
                        :
                        <h1>Chargement en cour ...</h1>
                    }
                    <button type="button" className="btn btn-primary" onClick={open}>
                        Change Location
                    </button>
                </div>
            </div>
        </div>
    )
}