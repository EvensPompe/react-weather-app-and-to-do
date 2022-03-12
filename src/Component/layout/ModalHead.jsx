import { useContext } from "react";
import { WeatherContext } from "../../Context/Weather/";
import { type } from "../../Context/weather";
export default function ModalHead() {
    const [, dispatch] = useContext(WeatherContext);
    const close = () => {
        dispatch({ type: type.show, payload: false });
    }
    return (
        <div className="modal-header">
            <h5 className="modal-title" id="locModalLabel">Choose Location</h5>
            <button type="button" className="close" onClick={close}>
                <span>&times;</span>
            </button>
        </div>
    )
}