import axios from "axios";

export const getTasks = async (url) => {
  const tasks = await axios.get(url);
  return tasks;
};

export const getTaskById = async(url,idTask) => {
    const task = await axios.get(`${url}/${idTask}`);
    return task;
}

export const createTask = async (url,payload) => {
    const response = await axios.post(url,payload);
    return response;
};


export const updateTask = async (url,idTask,payload) => {
    const response = await axios.put(`${url}/${idTask}`,payload);
    return response

}

export const deleteTask = async (url,idTask) => {
    const response = await axios.delete(`${url}/${idTask}`);
    return response;
}