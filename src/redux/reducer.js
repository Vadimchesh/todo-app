import { combineReducers } from "redux";
import todosReducer from "./reducerTodo";
import filtersReducer from "./reducerFilter";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});

export default rootReducer;
