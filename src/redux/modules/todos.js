import uuid from "react-uuid";

const initialState = [
  {
    id: uuid(),
    title: "리액트",
    body: "리액트 공부하기",
    isDone: false,
  },
  {
    id: uuid(),
    title: "리액트1",
    body: "리액트 공부하기",
    isDone: false,
  },
  {
    id: uuid(),
    title: "리액트2",
    body: "리액트 공부하기",
    isDone: true,
  },
];

// 리듀서
// 액션은 반드시 2개를 갖는다 => type, payload
// type을 ~ 해줘
const todos = (state = initialState, action) => {
  // 액션을 저장해서 이렇게 해줘!
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    case "SWITCH_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

export default todos;
