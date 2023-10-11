const tasksTypes = {
  NEW_TASK: 'NEW_TASK',
  CHANGE_TASK: 'CHANGE_TASK',
  DELETE_TASK: 'DELETE_TASK',
}

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))



const taskReducer = (state = [], action) => {
  switch (action.type) {
    case tasksTypes.NEW_TASK:
      return [ ...state, action.payload ];

    case tasksTypes.CHANGE_TASK: {
      const id = action.payload.id;
      return state.map(task => 
        task.id === id ? action.payload : task
      );
    }

    case tasksTypes.DELETE_TASK: {
      const id = action.payload;
      return state.filter(task =>
        task.id !== id
      );
    }

    default: 
      return state;
  }
}

export const createTask = (task) => {
  return {
    type: tasksTypes.NEW_TASK,
    payload: {
      title: task.title,
      description: task.description,
      status: task.status,
      id: generateId(),
    }
  }
}

export const changeTask = (task) => {
  return {
    type: tasksTypes.CHANGE_TASK,
    payload: {
      title: task.title,
      description: task.description,
      status: task.status,
      id: task.id,
    },
  }
}

export const deleteTask = (id) => {
  return {
    type: tasksTypes.DELETE_TASK,
    payload: id,
  }
}


export default taskReducer