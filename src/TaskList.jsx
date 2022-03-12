import { Fragment, useState, useContext } from "react";
import { TaskContext } from "./Context/Task/index";
import { type } from "./Context/task";
import Task from "./Component/layout/Task";
import './TaskList.css';

const TaskList = () => {
    const [text, setText] = useState();
    const [, dispatch] = useContext(TaskContext);
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const createTask = (e) => {
        e.preventDefault();
        dispatch({ type: type.addTask, payload: text });
        setText('');
    }

    const changeTaskText = (e) => {
        setText(e.target.value);
    }
    return (
        <div style={Style}>
            <form onSubmit={createTask}>
                <input
                    placeholder={'Ajouter une tâche'}
                    type="text"
                    value={text}
                    onChange={changeTaskText}
                />
                <button type={'submit'}>Ajouter</button>
            </form>
            <h3>TaskList :</h3>
            <div className="list">
                {tasks ? (
                    <Fragment>
                        <div>
                            <h1>Completed</h1>
                            {tasks.map(({ id, title, completed }) => {
                                if (completed) {
                                    return <Task key={id} id={id} title={title} />
                                }
                                return null;
                            })}
                        </div>
                        <div>
                            <h1>Not Completed</h1>
                            {tasks.map(({ id, title, completed }) => {
                                if (!completed) {
                                    return <Task key={id} id={id} title={title} completed={completed} />
                                }
                                return null;
                            })}
                        </div>
                    </Fragment>
                ) : null}
            </div>
        </div>
    )
}

const Style = {
    marginTop: '2em',
    backgroundColor: 'lightgrey',
    textAlign: 'center',
    padding: '1em',
    display: 'flex',
    flexFlow: 'column'
}

export default TaskList;