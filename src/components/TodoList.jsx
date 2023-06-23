import React from "react";

function Todolist({ todos, setTodos, isDone }) {
  return (
    <div>
      <h3>{isDone ? "DoneList" : "TodoList"}</h3>
      <div>
        {todos
          .filter(function (t) {
            return t.isDone === isDone;
          })
          .map(function (todo) {
            return (
              <div
                style={{
                  border: "4px solid green",
                  padding: "10px",
                  margin: "10px",
                }}
                key={todo.id}
              >
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.contents}</p>
                <p>{todo.isDone.toString()}</p>
                <button
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
