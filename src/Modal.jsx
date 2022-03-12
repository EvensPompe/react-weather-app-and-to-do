import ModalBody from "./Component/layout/ModalBody";
import ModalHead from "./Component/layout/ModalHead";
import { WeatherContext } from "./Context/Weather/index";
import { useContext } from "react";

export default function Modal() {
    const [{show},] = useContext(WeatherContext);
    return (
        <div className={`modal fade ${show ? "show" : ""}`} id="locModal" tabIndex="-1" role="dialog" aria-labelledby="locModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <ModalHead />
                    <ModalBody />
                </div>
            </div>
        </div>
    )
}