import { useState } from "react";
import { useHistory } from "react-router-dom";

import FormCreate from "../components/FormCreate";
import { createTask } from "../services/TaskService";

const URL = "http://localhost:3001/task";

const CreateTask = () => {
  const history = useHistory()
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
  });

  const handlerSubmit = (e) => {
    e.preventDefault();
    createTask(URL,formValues)
      .then(() => history.push('/'))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <FormCreate
          onSubmit={handlerSubmit}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      </div>
    </div>
  );
};

export default CreateTask;
