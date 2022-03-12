import { useState, useContext } from "react";
import { WeatherContext } from "../../Context/Weather/";
import { type } from "../../Context/weather";
import { getWeather } from "../../getWeather";
export default function ModalBody() {
    const [weatherState, dispatch] = useContext(WeatherContext);
    const [city, setcity] = useState("");
    const submitForm = async (e) => {
        e.preventDefault();
        const data = await getWeather(city, weatherState.apiKey);
        dispatch({ type: type.getWeather, payload: data });
        dispatch({ type: type.show, payload: false });
    }

    const handleInput = (e) => {
        setcity(e.target.value);
    }

    const close = () => {
        dispatch({ type: type.show, payload: false });
    }
    return (
        <div className="modal-body">
            <form id="w-form" onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" onChange={handleInput} value={city} className="form-control" />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={close}>Close</button>
                    <button id="w-change-btn" type="submit" className="btn btn-primary">Save changes</button>
                </div>
            </form>
        </div>
    )
}