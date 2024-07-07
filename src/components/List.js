import React, { memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Task from './Task';

const List = memo(({ task, index }) => {
  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <h3>{task.title}</h3>
          {/* Render tasks here */}
          {task.tasks.map((task, index) => (
            <Task key={task._id} task={task} index={index} />
          ))}
        </div>
      )}
    </Draggable>
  );
});

export default List;
