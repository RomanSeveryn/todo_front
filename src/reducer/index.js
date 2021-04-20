import ACTION_TYPES from '../actions/actionTypes';
import produce from 'immer';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

const handlers = {
  [ACTION_TYPES.CREATE_TASK_REQUEST]: produce((draftState, action) => {
    draftState.isFetching = true;
  }),

  [ACTION_TYPES.CREATE_TASK_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { task },
    } = action;
    draftState.isFetching = false;
    draftState.tasks.push(task);
  }),

  [ACTION_TYPES.CREATE_TASK_ERROR]: produce((draftState, action) => {
    const {
      payload: { error },
    } = action;
    draftState.error.push(error);
  }),

  [ACTION_TYPES.GET_TASKS_REQUEST]: produce(draftState => {
    draftState.isFetching = true;
  }),

  [ACTION_TYPES.GET_TASKS_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { tasks },
    } = action;
    draftState.isFetching = false;
    draftState.tasks.push(...tasks);
  }),

  [ACTION_TYPES.GET_TASKS_ERROR]: produce((draftState, action) => {
    const {
      payload: { error },
    } = action;
    draftState.error = error;
  }),

  [ACTION_TYPES.DELETE_TASK_REQUEST]: produce(draftState => {
    draftState.isFetching = true;
  }),

  [ACTION_TYPES.DELETE_TASK_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { id },
    } = action;
    draftState.isFetching = false;
    draftState.tasks = draftState.tasks.filter(task => task.id !== Number(id));
  }),

  [ACTION_TYPES.DELETE_TASK_ERROR]: produce((draftState, action) => {
    const {
      payload: { error },
    } = action;
    draftState.error = error;
  }),

  [ACTION_TYPES.CLEAR_TASK_ERROR]: produce((draftState, action) => {
    draftState.error = null;
  }),
};

function reducer (state = initialState, action) {
  const { type } = action;
  const handler = handlers[type];

  if (handler) {
    return handler(state, action);
  }
  return state;
}

export default reducer;
