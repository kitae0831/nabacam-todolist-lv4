import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL;

const getTodos = async () => {
  const response = await axios.get(`${URL}/todos`);
  return response.data;
};

const addTodo = async (newTodo) => {
  await axios.post(`${URL}/todos`, newTodo);
};

const delTodo = async (id) => {
  await axios.delete(`${URL}/todos/${id}`);
};

const fixTodo = async (newTodo) => {
  await axios.patch(`${URL}/todos/${newTodo.id}`, { ...newTodo });
};

export { getTodos, addTodo, delTodo, fixTodo };
