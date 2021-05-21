import { Formik, Form, Field } from 'formik';
import * as TaskActionCreators from '../../actions/taskCreators';
import { connect, useDispatch } from 'react-redux';
import style from './TaskForm.module.scss'

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
      <Form className={style.form}>
        <Field className={style.field} name='body' placeholder="Add Todo"/>
        <Field className={style.field} name='deadline' type='date' />
        <button className={style.button} type='submit'>+</button>
        <button className={style.button} type='reset'>-</button>
      </Form>
    </Formik>
  );
};

export default TaskForm;
