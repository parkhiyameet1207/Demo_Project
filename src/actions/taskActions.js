import axios from 'axios';

export const FETCH_TASKS = 'FETCH_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

const API_URL = 'http://localhost:5000/api/tasks'; // Update with your API endpoint

export const fetchTasks = () => async dispatch => {
  const response = await axios.get(API_URL);
  dispatch({ type: FETCH_TASKS, payload: response.data });
};

export const addTask = task => async dispatch => {
  const response = await axios.post(API_URL, task);
  dispatch({ type: ADD_TASK, payload: response.data });
};

export const updateTask = (id, updatedTask) => async dispatch => {
  const response = await axios.put(`${API_URL}/${id}`, updatedTask);
  dispatch({ type: UPDATE_TASK, payload: response.data });
};

export const deleteTask = id => async dispatch => {
  await axios.delete(`${API_URL}/${id}`);
  dispatch({ type: DELETE_TASK, payload: id });
};
