import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { fixTodo } from "../../api/todo";
import { getTodos } from "../../api/todo";
import useInput from "../../hooks/useInput";
import { styled } from "styled-components";
import Header from "../header/Header";

function FixTodos() {
  const queryClient = useQueryClient();

  const { data } = useQuery("todos", getTodos);
  const params = useParams();

  const filteredTodos = data.find((item) => {
    return item.id === params.id;
  });

  const [writer, setWriter] = useInput(filteredTodos.writer);
  const [title, setTitle] = useInput(filteredTodos.title);
  const [contents, setContents] = useInput(filteredTodos.contents);

  const mutation = useMutation(fixTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  // 폼 수정 버튼 클릭 시
  const fixTodosButtonHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      writer,
      title,
      contents,
      id: filteredTodos.id,
    };
    // 데이터를 업데이트하거나 생성 삭제를 할 때 사용 useMutation, 서버 저장도 가능
    // 리엑트 쿼리 부분 강의 재수강
    mutation.mutate(newTodo);

    window.location.replace("/works");
  };

  return (
    <div>
      <Header />
      <FixBox>
        <form
          style={{
            width: "100%",
          }}
          onSubmit={fixTodosButtonHandler}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",

              width: "100%",
              marginBottom: "10px",
            }}
          >
            <InputBox type="text" value={title} onChange={setTitle} required />
            <TextAreaBox
              type="text"
              value={contents}
              onChange={setContents}
              required
            />
          </div>
          <Button type="submit">수정하기</Button>
        </form>
      </FixBox>
    </div>
  );
}

export default FixTodos;

const FixBox = styled.div`
  padding: 10px;
  margin: 20px;
`;

const InputBox = styled.input`
  display: flex;

  width: 100%;
  height: 100px;

  margin-bottom: 20px;

  font-size: 48px;
  font-weight: bold;

  border: none;
`;

const TextAreaBox = styled.textarea`
  width: 100%;
  height: 200px;
`;

const Button = styled.button`
  border: none;

  width: 100%;
  height: 48px;
  margin-top: 20px;

  font-size: 24px;
  cursor: pointer;
`;
