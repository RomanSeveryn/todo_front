import ACTION_TYPES from './actionTypes';

// export const createTask = values => ({
//   type: ACTION_TYPES.CREATE_TASK,
//   values,
// });

// export const updateTask = ({ id, values }) => ({
//   type: ACTION_TYPES.UPDATE_TASK,
//   id,
//   values,
// });

// export const deleteTask = id => ({
//   type: ACTION_TYPES.DELETE_TASK,
//   id,
// })


export const createTaskRequest = values => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
  values,
});

export const createTaskSuccess = values => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  values,
});

export const createTaskError = error => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  error,
});
