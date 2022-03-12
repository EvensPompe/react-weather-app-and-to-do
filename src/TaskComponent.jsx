import { Switch, Route } from "react-router-dom";
import TaskList from "./TaskList";
import TaskDetail from "./TaskDetail";
const TaskComponent = () => {
    return (
        <Switch>
            <Route exact path="/" component={TaskList}/>
            <Route exact path="/task/:id" component={TaskDetail}/>
        </Switch>
    );
};

export default TaskComponent;