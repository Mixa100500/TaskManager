
const types = {
  SET_CURRENT_TASK: 'SET_CURRENT_TASK',
  CLEAR_CURRENT_TASK: 'CLEAR_CURRENT_TASK',
}

const initialState = {
  title: '',
  description: '',
  status: 'uncompleted'
}

const currentTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_TASK:
      return {...action.payload};
    case types.CLEAR_CURRENT_TASK:
      return initialState;
    default:
      return state;
  }
}


export const setCurrentTask = (task) => {
  return {
    type: types.SET_CURRENT_TASK,
    payload: task,
  }
}

export const clearCurrentTask = () => {
  return {
    type: types.CLEAR_CURRENT_TASK,
  }
}

export default currentTaskReducer;