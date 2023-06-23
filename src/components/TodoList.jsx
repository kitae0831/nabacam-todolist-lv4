import React from "react";
import { Link } from "react-router-dom";

function Todolist({ todos, setTodos, isDone }) {
  return (
    <div>
      <h3>{isDone ? "DoneList" : "TodoList"}</h3>
      <div style={{ display: "flex" }}>
        {todos
          .filter(function (t) {
            return t.isDone === isDone;
          })
          .map(function (todo) {
            return (
              <div
                style={{
                  border: "4px solid green",
                  borderRadius: "12px",
                  width: "250px",
                  padding: "12px 24px 24px",
                  margin: "10px",
                }}
                key={todo.id}
              >
                <Link to="../detailPage">상세페이지</Link>
                {/* <p>{todo.id}</p> */}
                <p style={{ fontWeight: "bold", fontSize: "28px" }}>
                  {todo.title}
                </p>
                <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                  {todo.contents}
                </p>
                {/* <p>{todo.isDone.toString()}</p> */}
                <button
                  style={{
                    backgroundColor: "#fff",
                    border: "2px solid red",
                    borderRadius: "8px",
                    cursor: "pointer",
                    height: "40px",
                    width: "40%",
                    marginRight: "30px",
                  }}
                  onClick={function () {
                    const newTodos = todos.filter(function (a) {
                      return a.id !== todo.id;
                    });

                    setTodos(newTodos);
                  }}
                >
                  삭제
                </button>
                <button
                  style={{
                    backgroundColor: "#fff",
                    border: "2px solid green",
                    borderRadius: "8px",
                    cursor: "pointer",
                    height: "40px",
                    width: "40%",
                  }}
                  onClick={function () {
                    const newTodos = todos.map(function (b) {
                      if (b.id === todo.id) {
                        return { ...b, isDone: !b.isDone };
                      } else {
                        return b;
                      }
                    });

                    setTodos(newTodos);
                  }}
                >
                  {isDone ? "취소" : "완료"}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Todolist;
