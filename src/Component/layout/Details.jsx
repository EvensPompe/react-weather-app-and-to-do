import { Fragment, useContext } from "react";
import { WeatherContext } from "../../Context/Weather/";
export default function Details() {
    const [{weather:state}] = useContext(WeatherContext);

    const getDewPoint = (hr, t) => {
        return Math.pow(hr, 1 / 8) * (112 + 0.9 * t) + 0.1 * t - 112;
    }
    return (
        <Fragment>
            {state.weather
                ?
                state.error
                    ?
                    <h1>{"Ville introuvable"}</h1>
                    :
                    <>
                        <h1 id="w-location">{state.name}</h1>
                        {state.weather.map(({ icon, description },id) => {
                            return (
                                <Fragment key={id}>
                                    <h3 className="text-dark" id="w-desc">{description}</h3>
                                    <img id="w-icon" src={`http://openweathermap.org/img/w/${icon}.png`} alt={icon + ".png"} />
                                </Fragment>
                            )
                        })}
                        {/* <h3 id="w-string">f</h3> */}
                        <ul id="w-details" className="list-group mt-3">
                            <li className="list-group-item" id="w-humidity">Humidité :{state.main.humidity} %</li>
                            <li className="list-group-item" id="w-dewpoint">Point de rosé :{getDewPoint(state.main.humidity, state.main.temp)}</li>
                            <li className="list-group-item" id="w-feels-like">Sensation :{state.main.feels_like}</li>
                            <li className="list-group-item" id="w-wind">Vitesse :{state.wind.speed} m/s, Rotation :{state.wind.deg}°C</li>
                        </ul>
                    </>
                :
                <h1>Chargement en cours ...</h1>}
        </Fragment>
    )
}