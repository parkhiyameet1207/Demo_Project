import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import List from './List';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../actions/taskActions';
import useFetchTasks from '../hooks/useFetchTasks';

const Board = () => {
  const dispatch = useDispatch();
  const { tasks, loading } = useFetchTasks();

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    // Update task position logic here

    dispatch(updateTask(draggableId, { /* new task data */ }));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <List key={task._id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
