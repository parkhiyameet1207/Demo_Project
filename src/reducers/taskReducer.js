import { FETCH_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK } from '../actions/taskActions';

const initialState = {
  tasks: [],
  loading: true,
  error: null
};

export const taskReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TASKS:
      return { ...state, tasks: action.payload, loading: false };
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task._id === action.payload._id ? action.payload : task)
      };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter(task => task._id !== action.payload) };
    default:
      return state;
  }
};
