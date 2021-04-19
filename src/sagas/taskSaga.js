import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as TaskActionCreators from '../actions/taskCreators';

export function * createTaskSaga (action) {
  try {
    const {payload} = action;
    const {
      data: { data: task },
    } = yield API.createTask({...payload.task});

    yield put(TaskActionCreators.createTaskSuccess(task));
  } catch (error) {
    yield put(TaskActionCreators.createTaskError(error));
  }
}

export function * getTasksSaga (action) {
  try {
    const {
      data: { data: tasks },
    } = yield API.getTasks(action.payload);
    yield put(TaskActionCreators.getTasksSuccess(tasks));
  } catch (error) {
    yield put(TaskActionCreators.getTasksError(error));
  }
}
