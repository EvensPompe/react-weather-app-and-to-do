import './App.css';
import Main from "./Main";
import Modal from './Modal';
import TaskList from './TaskComponent';
import { TaskProvider } from "./Context/Task/index";
import { WeatherProvider } from "./Context/Weather/index";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <section>
        <WeatherProvider>
          <Main />
          <Modal />
        </WeatherProvider>
      </section>
      <section>
        <Router>
          <TaskProvider>
            <TaskList />
          </TaskProvider>
        </Router>
      </section>
    </div>
  );
}

export default App;
