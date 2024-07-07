import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../actions/taskActions';

const useFetchTasks = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return { tasks, loading, error };
};

export default useFetchTasks;
