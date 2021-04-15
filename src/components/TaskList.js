import { connect } from 'react-redux';
import * as TaskCreators from '../actions/taskCreators';

const TaskList = props => {
  const { tasks, updateAction, deleteAction } = props;
  return (
    <section>
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <div>
              <h1>ID: {task.id}</h1>
              <div>{task.body}</div>
              <input
                type='checkbox'
                checked={task.isDone}
                onChange={({ target: { checked } }) =>
                  updateAction({
                    id: task.id,
                    values: {
                      isDone: checked,
                    },
                  })
                }
              />
            </div>
            <button onClick={() => deleteAction(task.id)}>Delete task</button>
          </li>
        ))}
      </ul>
    </section>
  );
};
const mapStateToProps = ({ tasks }) => ({ tasks });
const mapDispatchToProps = dispatch => ({
  deleteAction: id => dispatch(TaskCreators.deleteTask(id)),
  updateAction: ({ id, values }) =>
    dispatch(TaskCreators.updateTask({ id, values })),
});
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
