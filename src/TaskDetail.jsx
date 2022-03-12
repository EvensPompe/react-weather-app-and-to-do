import { Link, useParams } from "react-router-dom";
import { TaskContext } from "./Context/Task/index";
import { type } from "./Context/task";
import { useContext, useEffect, Fragment, useState } from "react";
import "./TaskDetail.css";

const TaskDetail = () => {
    const [, dispatch] = useContext(TaskContext);
    const [modifMode, setModifMode] = useState(false);
    const [taskValue, setTaskValue] = useState({
        title:"",
        desc:""
    });
    const { id } = useParams();

    const [task] = JSON.parse(localStorage.getItem("tasks")).filter((task)=>task.id === id);

    const changeMode = () => {
        setModifMode(!modifMode);
    }

    const getDesc = (e) => {
        setTaskValue({...taskValue,desc:e.target.value});
    }
    
    const getTitle = (e) => {
        setTaskValue({...taskValue,title:e.target.value});
    }

    useEffect(() => {
        dispatch({ type: type.getTask, payload: id });
    }, [dispatch, id])

    const submitModif = (e) => {
        e.preventDefault()
        let payload = {
            title: taskValue.title,
            desc: taskValue.desc,
            id
        }
        if (taskValue.title.trim() === "") {
            payload.title = task.title;
        }

            dispatch({ type: type.editTask, payload });
            changeMode();
    }
    return (
        <Fragment>
            <Link to="/"><button>Retour</button></Link>
            {task
                ?
                <Fragment>
                    {modifMode
                        ?
                        <form onSubmit={submitModif}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <label htmlFor="title">Title</label>
                            <input placeholder={task.title} name="title" id="title" type="text" value={taskValue.title} onChange={getTitle} />
                            <label htmlFor="desc"></label>
                            <textarea name="desc" id="desc" cols="30" rows="10" value={taskValue.desc} onChange={getDesc} placeholder={task.desc}></textarea>
                            <button type="submit">Modifier</button>
                            <button onClick={changeMode}>Annuler</button>
                        </form>
                        :
                        <Fragment>
                            <h1>{task.title}</h1>
                            <h3>Description</h3>
                            <p>{task.desc || "Pas de description"}</p>
                            <button onClick={changeMode}>Modification</button>
                        </Fragment>
                    }
                </Fragment>
                :
                <h1>La tâche n'existe pas !</h1>}
        </Fragment>
    )
}

export default TaskDetail;