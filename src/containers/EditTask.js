import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import FormEdit from "../components/FormEdit";
import { getTaskById, updateTask } from "../services/TaskService";

const URL = "http://localhost:3001/task";

const EditTask = () => {
  const { idTask } = useParams();
  const history = useHistory()
  const [task, setTask] = useState({});

  useEffect(() => {
    getTaskById(URL, idTask)
      .then((response) => {
        setTask(response.data);
      })
      .catch((error) => console.log(error));
  }, [idTask]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    updateTask(URL,task.id,task)
    .then(() => history.push("/"))
    .catch((error) => console.log(error))
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          {Object.entries(task).length !== 0 && (
            <FormEdit
              data={task}
              onSubmit={handlerSubmit}
              task={task}
              setTask={setTask}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EditTask;
