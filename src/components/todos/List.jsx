import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function List() {
  const todos = useSelector((state) => {
    return state.todos;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <h2>TodoList</h2>
      <div style={{ display: "flex" }}>
        {todos
          .filter(function (t) {
            return t.isDone === false;
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
                <Link to={`/${todo.id}`}>상세페이지</Link>
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
                  onClick={() => {
                    dispatch({
                      type: "DELETE_TODO",
                      payload: todo.id,
                    });
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
                    dispatch({
                      type: "SWITCH_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  완료
                </button>
              </div>
            );
          })}
      </div>
      <h2>DoneList</h2>
      {/* <h3>{isDone ? "DoneList" : "TodoList"}</h3> */}
      <div style={{ display: "flex" }}>
        {todos
          .filter(function (t) {
            return t.isDone === true;
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
                    dispatch({
                      type: "DELETE_TODO",
                      payload: todo.id,
                    });
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
                    dispatch({
                      type: "SWITCH_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  취소
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default List;
