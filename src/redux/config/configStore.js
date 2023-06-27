import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

// store 만들어 내기
// 중앙데이터리소

const rootReducer = combineReducers({
  todos: todos,
});
const store = createStore(rootReducer);

export default store;
