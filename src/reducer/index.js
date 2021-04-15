import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  // tasks: [
  //   {
  //     id: 0,
  //     body: 'test task',
  //     isDone: false,

  //   },
  // ],
  tasks: [],
  isFetching: false,
  error: null,
};

let serial = 1;

function reducer (state = initialState, action) {
  switch (action.type) {
    // case ACTION_TYPES.CREATE_TASK: {
    //   const { tasks } = state;
    //   const { values: task } = action;

    //   const newTasks = [...tasks, { ...task, id: serial++ }];
    //   return {
    //     ...state,
    //     tasks: newTasks,
    //   };
    // }
    // case ACTION_TYPES.DELETE_TASK: {
    //   const { id } = action;
    //   const { tasks } = state;

    //   const newTasks = tasks.filter(task => task.id !== id);

    //   return {
    //     ...state,
    //     tasks: newTasks,
    //   };
    // }
    // case ACTION_TYPES.UPDATE_TASK: {
    //   const { id, values } = action;
    //   const { tasks } = state;

    //   const newTasks = [...tasks];
    //   const taskIndex = newTasks.findIndex(task => task.id === id);
    //   const task = newTasks[taskIndex];
    //   newTasks[taskIndex] = { ...task, ...values };

    //   return {
    //     ...state,
    //     tasks: newTasks,
    //   };
    // }

    case ACTION_TYPES.CREATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const { values: task } = action;
      return {
        ...state,
        isFetching: false,
        tasks: [...state.tasks, task],
      };
    }

    case ACTION_TYPES.CREATE_TASK_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    default:
      return state;
  }
}

export default reducer;
