import { useState, useEffect } from "react";

import Tabla from "../components/Tabla";
import { getTasks } from "../services/TaskService";

const URL = "http://localhost:3001/task";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks(URL)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>List tasks</h1>
        <div className="container mt-4">
          {tasks.length !== 0 && <Tabla data={tasks} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
