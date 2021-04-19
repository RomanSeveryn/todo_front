import { Formik, Form, Field } from 'formik';
import * as TaskActionCreators from '../actions/taskCreators';
import { connect, useDispatch } from 'react-redux';

const TaskForm = props => {
  const dispatch = useDispatch();
  const values = {
    body: '',
    deadline: '',
    isDone: false,
  };
  const onSubmit = (values, formikBag) => {
    dispatch(TaskActionCreators.createTaskRequest(values));
    formikBag.resetForm();
  };
  return (
    <Formik initialValues={values} onSubmit={onSubmit}>
      <Form>
        <Field name='body' />
        <Field name='deadline' type='date' />
        <button type='submit'>Create Task</button>
        <button type='reset'>Reset Task</button>
      </Form>
    </Formik>
  );
};

export default TaskForm;
