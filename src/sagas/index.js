import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import { createTaskSaga, getTasksSaga, deleteTaskSaga } from './taskSaga';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_TASK_REQUEST, createTaskSaga);
  yield takeLatest(ACTION_TYPES.GET_TASKS_REQUEST, getTasksSaga);
  yield takeLatest(ACTION_TYPES.DELETE_TASK_REQUEST, deleteTaskSaga);
}

export default rootSaga;
