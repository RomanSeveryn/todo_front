import { Formik, Form, Field } from 'formik';
// import { createTask } from '../actions/taskCreators';
import * as TaskActionCreators from '../actions/taskCreators';
import { connect } from 'react-redux';

const TaskForm = props => {
  const { createTaskAction } = props;

  const onSubmit = (values, formikBag) => {
    createTaskAction(values);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={{
        body: '',
        isDone: false,
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name='body' />
        <button type='submit'>Create Task</button>
        <button type='reset'>Reset Task</button>
      </Form>
    </Formik>
  );
};

// const mapDispatchToProps = dispatch => ({
//   createTaskAction: values => dispatch(createTask(values)),
// });
const mapDispatchToProps = dispatch => ({
  createTaskAction: values => dispatch(TaskActionCreators.createTaskRequest(values)),
});

export default connect(null, mapDispatchToProps)(TaskForm);
