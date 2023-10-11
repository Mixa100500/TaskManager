const filrerTypes = {
  SET_FILTER: 'SET_FILTER',
}

const filtedReducer = (state = 'all', action) => {
  switch (action.type) {
    case filrerTypes.SET_FILTER:
      return action.payload;
    default:
      return state;
  }
}

export const setFilter = (status) => {
  return {
    type: filrerTypes.SET_FILTER,
    payload: status
  }
}

export default filtedReducer;