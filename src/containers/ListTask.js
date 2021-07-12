import { useReducer, useEffect } from "react";

import { getTasks } from "../services/TaskService";
import Card from "../components/Card";

const URL = "http://localhost:3001/task";

const initialState = {
  tasks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_TASK":
      return {
        tasks:[...action.payload]
      };
    default:
      return state;
  }
};

const ListTask = () => {
  const [state, dispacth] = useReducer(reducer, initialState);

  useEffect(() => {
    getTasks(URL)
      .then((response) => {
        dispacth({ type: "GET_ALL_TASK", payload: response.data });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-md-center">
          {state.tasks.length !== 0 && state.tasks.map(item =>
            <Card key={item.id} data={item} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ListTask;
