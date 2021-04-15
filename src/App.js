import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = props => {
  return (
    <div>
      <TaskForm />
      <TaskList/>
    </div>
  );
}

export default App;
