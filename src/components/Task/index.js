import React from 'react';
import style from './Task.module.scss'

const Task = props => {
  const { body, isDone, id, deadline, deleteTaskRequest } = props;

  return (
    <div className={style.taskContainer}>
      <h2 className={style.heading}>{body}</h2>
      <div className={style.containerDate}>
      <p>{deadline}</p>
      <button className={style.buttonDelete} onClick={() => deleteTaskRequest(id)}>x</button>
      </div>
    </div>
  );
};

export default Task;
