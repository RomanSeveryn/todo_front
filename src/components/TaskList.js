import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TaskCreators from '../actions/taskCreators';

const TaskList = props => {
  const { tasks, isFetching, error } = useSelector(task => task);
  const dispatch = useDispatch();
  const { getTasksRequest } = bindActionCreators(TaskCreators, dispatch);

  useEffect(() => {
    getTasksRequest();
  }, []);

  return (
    <section>
      <h1>Task List</h1>
      {isFetching && 'LOADING...'}
      {error && JSON.stringify(error)}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.body}</li>
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
