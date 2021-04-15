import { Formik, Form, Field } from 'formik';
import { createTask } from '../actions/taskCreators';
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
        isDone: false,
        body: '',
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

const mapDispatchToProps = dispatch => ({
  createTaskAction: values => dispatch(createTask(values)),
});

export default connect(null, mapDispatchToProps)(TaskForm);
