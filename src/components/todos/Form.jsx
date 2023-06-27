import React from "react";
import uuid from "react-uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";

function From() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <main style={{ display: "block", margin: "8px" }}>
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
            if (!title || !contents) {
              alert("필수값이 누락되었습니다. 확인해주세요.");
              return false;
            }
            event.preventDefault();
            dispatch({
              type: "ADD_TODO",
              payload: {
                id: uuid(),
                title: title,
                contents: contents,
                isDone: false,
              },
            });

            //   const newTodo = {
            //     id: uuid(),
            //     title,
            //     contents,
            //     isDone: false,
            //   };

            //   setTodos([...todos, newTodo]);
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
      </main>
    </div>
  );
}

export default From;
