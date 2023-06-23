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
      <header></header>
      <main style={{ display: "block", margin: "8px" }}>
        <div>
          <div
            style={{
              boxSizing: "border-box",
              border: "1px gray solid",

              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
              padding: "0 12px",
              margin: "0 0 20px 0",

              width: "1200px",
              height: "50px",
            }}
          >
            <div
              style={{
                fontSize: "24px",
              }}
            >
              My Todo List
            </div>
            <div
              style={{
                fontSize: "24px",
              }}
            >
              react
            </div>
          </div>
          <form
            style={{
              boxSizing: "border-box",
              border: "1px solid none",
              borderRadius: "12px",
              padding: "30px",
              margin: "0 auto",

              display: "flex",

              backgroundColor: "#eeee",
              gap: "450px",
            }}
            onSubmit={function (event) {
              event.preventDefault();

              const newTodo = {
                id: uuid(),
                title,
                contents,
                isDone: false,
              };

              setTodos([...todos, newTodo]);
              setTitle("");
              setContents("");
            }}
          >
            <div style={{ alignitems: "cetner", display: "flex", gap: "20px" }}>
              <input
                style={{
                  border: "none",
                  borderradius: "12px",
                  height: "40px",
                  padding: "0 12px",
                  width: "240px",
                }}
                type="text"
                placeholder="제목을 작성해줘"
                value={title}
                onChange={function (event) {
                  setTitle(event.target.value);
                }}
              ></input>
              <input
                style={{
                  border: "none",
                  borderradius: "12px",
                  height: "40px",
                  padding: "0 12px",
                  width: "240px",
                }}
                type="text"
                placeholder="내용을 작성해줘"
                value={contents}
                onChange={function (event) {
                  setContents(event.target.value);
                }}
              ></input>
            </div>
            <button
              style={{
                backgroundColor: "teal",
                borderRadius: "10px",
                color: "white",
                width: "140px",
                height: "40px",
              }}
              type="submit"
            >
              제출
            </button>
          </form>
        </div>
        <TodoList todos={todos} setTodos={setTodos} isDone={false} />
        <TodoList todos={todos} setTodos={setTodos} isDone={true} />
      </main>
      <footer></footer>
    </div>
  );
}
export default App;
