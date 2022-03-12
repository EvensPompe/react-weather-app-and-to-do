import { Fragment, useState, useContext } from "react";
import Proptypes from "prop-types";
import { type } from "../../Context/task";
import { TaskContext } from "../../Context/Task/";
import { Link } from "react-router-dom";
const Task = ({ id, title: titleProp }) => {
    const [{tasks}, dispatch] = useContext(TaskContext);
    const [bool, setBool] = useState(false);

    const handleChangeComp = () => {
        let payload = {
            completed: !bool,
            id
        }
        dispatch({ type: type.changeCompTask, payload });
        tasks.forEach(({ id: taskId, completed }) => {
            if (id === taskId && completed !== bool) {
                console.log(completed !== bool)
                setBool(completed);
            }
        })
    }

    const suppTask = () => {
        dispatch({ type: type.deleteTask, payload: id });
    }

    return (
        <Fragment>
            <p key={id}>{titleProp}</p>
            <button onClick={handleChangeComp} name="completed" id="completed">{bool ? "completed" : "Not Completed"}</button>
            <Link to={`/task/${id}`}><button>Voir les détails</button></Link>
            <button onClick={suppTask}>Supprimer</button>
        </Fragment>
    )
}

Task.prototype ={
    id:Proptypes.string.isRequired,
    title:Proptypes.string.isRequired
}

export default Task;