import { combineReducers, createStore } from "redux";
import taskReducer from "./reducers/taskReducer";
import currentTaskReducer from "./reducers/currentTaskReducer";
import filtedReducer from "./reducers/filterReducer";

const reducer = combineReducers({
  tasks: taskReducer,
  currentTask: currentTaskReducer,
  filter: filtedReducer,
});

const store = createStore(reducer);

export default store;