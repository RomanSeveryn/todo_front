import TaskForm from "../components/TaskForm"
import TaskList from "../components/TaskList/index.js"
import style from './Todo.module.scss'

const Todo = props => {
  return (
    <div className={style.container}>
      <TaskForm/>
      <TaskList/>
    </div>
  );
}

export default Todo;

