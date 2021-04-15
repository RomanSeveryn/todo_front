import ACTION_TYPES from '../../actions/actionTypes';

const initialState = {
  tasks: [
    {
      id: 0,
      body: 'test task',
      isDone: false,
    },
  ],
};

let serial = 0;

function reducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_TASK: {
      const { tasks } = state;
      const { values: task } = action;

      const newTasks = [...tasks, { ...task, id: serial++ }];
      return {
        ...state,
        tasks: newTasks,
      };
    }

    default:
      break;
  }
}
