import { useEffect, useReducer } from "react";
import { Link } from 'react-router-dom'

import "../assets/styles/components/Tabla.css";
import { deleteTask } from "../services/TaskService";

const URL = "http://localhost:3001/task";

const initialState = {
  tasks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_TASK":
      return {
        tasks: [...action.payload],
      };
    case "DELETE_TASK":
      console.log("deleted", action.payload);
      const restTask = state.tasks.filter((task) => task.id !== action.payload);
      return {
        tasks: [...restTask],
      };
    default:
      return state;
  }
};

const Tabla = ({ data }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "GET_ALL_TASK", payload: data });
  }, [data]);

  const onDelete = (id) => {
    deleteTask(URL, id)
    .then((response) => {
      console.log(response);
      dispatch({ type: "DELETE_TASK", payload: id });
    })
    .catch((error) => console.log(error));
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.tasks.length === 0 && (
            <tr className="table">
              <th colSpan="4">Empty tasks</th>
            </tr>
          )}
          {state.tasks.length !== 0 &&
            state.tasks.map((task) => (
              <tr className="table" key={task.id}>
                <th scope="row">{task.id}</th>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td className="Actions">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <Link
                          to={`/edit-task/${task.id}`}
                          type="button"
                          className="btn btn-success Button"
                        >
                          Edit
                        </Link>
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className="btn btn-danger Button"
                          onClick={() => onDelete(task.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
