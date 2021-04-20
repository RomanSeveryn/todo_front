import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TaskCreators from '../actions/taskCreators';
import Task from './Task';

const TaskList = props => {
  const { tasks, isFetching, error } = useSelector(task => task);
  const dispatch = useDispatch();
  const {
    getTasksRequest,
    clearTaskError,
    deleteTaskRequest,
  } = bindActionCreators(TaskCreators, dispatch);

  useEffect(() => {
    getTasksRequest();
  }, []);

  return (
    <section>
      <h1>Task List</h1>
      {isFetching && 'LOADING...'}

      {error && (
        <div style={{ color: 'red', display: 'flex' }}>
          <p>{error.message}</p>
          <button onClick={clearTaskError}>X</button>
        </div>
      )}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{<Task {...task} deleteTaskRequest={deleteTaskRequest}/>}</li>
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
