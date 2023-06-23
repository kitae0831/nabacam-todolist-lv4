import { useState } from "react";
import "./App.css";
import uuid from "react-uuid";
import TodoList from "./components/TodoList";

function App() {
  const initState = [
    {
      id: uuid(),
      title: "제목1",
      contents: "내용1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목2",
      contents: "내용2",
      isDone: true,
    },
    {
      id: uuid(),
      title: "제목3",
      contents: "내용3",
      isDone: false,
    },
  ];

  const [todos, setTodos] = useState(initState);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <div>
      <header style={{ backgroundColor: "red", padding: "10px" }}>헤더</header>
      <main style={{ backgroundColor: "#cdfa53", padding: "10px" }}>
        메인을 넣을꺼야
        <div>
          <h2>리스트를 작성!!</h2>
          <form
            onSubmit={function (event) {
              event.preventDefault();

              const newTodo = {
                id: uuid(),
                title,
                contents,
                isDone: false,
              };

              setTodos([...todos, newTodo]);
            }}
          >
            <input
              type="text"
              placeholder="제목을 작성해줘"
              value={title}
              onChange={function (event) {
                setTitle(event.target.value);
              }}
            ></input>
            <input
              type="text"
              placeholder="내용을 작성해줘"
              value={contents}
              onChange={function (event) {
                setContents(event.target.value);
              }}
            ></input>
            <button type="submit">제출</button>
          </form>
        </div>
        <TodoList todos={todos} setTodos={setTodos} isDone={false} />
        <TodoList todos={todos} setTodos={setTodos} isDone={true} />
      </main>
      <footer style={{ backgroundColor: "blue", padding: "10px" }}>푸터</footer>
    </div>
  );
}
export default App;
