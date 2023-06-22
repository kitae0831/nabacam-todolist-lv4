import { useState } from "react";
import "./App.css";
import uuid from "react-uuid";

function App() {
  const initState = [
    {
      id: uuid(),
      title: "제목 1",
      contents: "내용 1",
      isDone: "false",
    },
    {
      id: uuid(),
      title: "제목 2",
      contents: "내용 2",
      isDone: "false",
    },
    {
      id: uuid(),
      title: "제목 3",
      contents: "내용 3",
      isDone: "false",
    },
    {
      id: uuid(),
      title: "제목 4",
      contents: "내용 4",
      isDone: "false",
    },
  ];

  const [todos, setTodos] = useState(initState);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <div>
      <header style={{ backgroundColor: "#5c7e", padding: "20px" }}>
        헤더요!
      </header>
      <main style={{ backgroundColor: "#258", padding: "20px" }}>
        <div>
          <h3>메인</h3>
          <div>
            <form
              onSubmit={function (event) {
                event.preventDefault();

                const newTodo = {
                  id: uuid(),
                  title,
                  contents,
                  isDone: false,
                };

                setTodos(...todos, newTodo);
              }}
            >
              <input
                type="text"
                placeholder="제목을 입력~"
                value={title}
                onChange={function (event) {
                  setTitle(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="내용을 입력~"
                value={contents}
                onChange={function (event) {
                  setContents(event.target.value);
                }}
              />
              <button type="submit">추가!</button>
            </form>
          </div>
        </div>
        <div>
          <div>
            <h2>Todolist!!!!</h2>
            {todos.map(function (todo) {
              return (
                <div>
                  <div
                    style={{ border: "4px solid blue", padding: "10px" }}
                    key={todo.id}
                  >
                    <p>{todo.id}</p>
                    <p>{todo.title}</p>
                    <p>{todo.contents}</p>
                    <p>{todo.isDone.toString()}</p>

                    <button
                      onclick={function () {
                        const newTodos = todos.filter(function (a) {
                          return a.id !== todo.id;
                        });
                        setTodos(newTodos);
                      }}
                    >
                      삭제
                    </button>
                    <button>완료</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <h2>Donelist!!!!</h2>
            {todos.map(function (todo) {
              return (
                <div>
                  <div
                    style={{ border: "4px solid blue", padding: "10px" }}
                    key={todo.id}
                  >
                    <p>{todo.id}</p>
                    <p>{todo.title}</p>
                    <p>{todo.contents}</p>
                    <p>{todo.isDone}</p>

                    <button
                      onclick={function () {
                        const newTodos = todos.filter(function (a) {
                          return a.id !== todo.id;
                        });
                        setTodos(newTodos);
                      }}
                    >
                      삭제
                    </button>
                    <button>완료</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <footer style={{ backgroundColor: "#567", padding: "20px" }}>푸터</footer>
    </div>
  );
}

export default App;
