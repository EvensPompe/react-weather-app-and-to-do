import { createContext, useReducer } from "react";
import { type } from "../task.js";

export const TaskContext = createContext();

const intialState = {
    tasks: [],
    task: {}
}

const reducer = (state, action) => {
    const storageState = JSON.parse(localStorage.getItem("tasks"));
    switch (action.type) {

        case type.addTask:
            const newTask = {
                id: Math.random().toString(16),
                title: action.payload,
                completed: false
            };
            localStorage.setItem('tasks',JSON.stringify([...state.tasks, newTask]));
            return {
                ...state,
                tasks: [...state.tasks, newTask]
            };
        case type.deleteTask:
            const newTasks = [...storageState].filter(({ id }) => id !== action.payload);
            localStorage.setItem('tasks',JSON.stringify([...newTasks]));
            return {
                ...state,
                tasks: [...newTasks]
            };

        case type.editTask:
            const tasksEdited = [...storageState].map((task) => {
                if (task.id === action.payload.id) {
                    task.title = action.payload.title
                    task.desc = action.payload.desc
                }
                return task;
            });
            localStorage.setItem('tasks',JSON.stringify([...tasksEdited]));
            return {
                ...state,
                tasks: [...tasksEdited]
            }

        case type.changeCompTask:
            const taskComp = [...storageState].map((task) => {
                if (task.id === action.payload.id) {
                    task.completed = action.payload.completed
                }
                return task;
            });
            localStorage.setItem('tasks',JSON.stringify([...taskComp]));
            return {
                ...state,
                tasks: [...taskComp]
            }

            case type.getTask:
                const [taskFund] = [...storageState].filter((task) => task.id === action.payload);
                return {
                    ...state,
                    task: taskFund
                }
        default: return state;
    }
}

export const TaskProvider = ({ children }) => {
    const value = useReducer(reducer, intialState);
    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}