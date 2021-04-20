import React from 'react';

const Task = props => {
  const { body, isDone, id, deadline, deleteTaskRequest } = props;

  return (
    <div>
      <h1>ID: {id}</h1>
      <h2>{body}</h2>
      <p>
        Is done: <input type='checkbox' checked={isDone} checked={isDone} onChange={() => {}}/>
      </p>
      <p>{deadline}</p>
      <button onClick={() => deleteTaskRequest(id)}>x</button>
    </div>
  );
};

export default Task;
