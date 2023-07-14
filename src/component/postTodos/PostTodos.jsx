import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import shortid from "shortid";
import { addTodo } from "../../api/todo";
import useInput from "../../hooks/useInput";
import { styled } from "styled-components";

function PostTodos() {
  const queryClient = useQueryClient();

  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const [writer, setWriter] = useInput("");
  const [title, setTitle] = useInput("");
  const [contents, setContents] = useInput("");

  const submitButtonHandler = (e) => {
    e.preventDefault();

    const newTodos = {
      writer,
      title,
      contents,
      id: shortid.generate(),
    };

    mutation.mutate(newTodos);
    window.location.replace("/works");
  };

  return (
    <div>
      <FormBox onSubmit={submitButtonHandler}>
        <ContentsBox>
          <div>작성자</div>
          <input
            type="text"
            placeholder="작성자의 이름을 입력해주세요.(5자 이내)"
            value={writer}
            onChange={setWriter}
            required
          />
          <div>제목</div>
          <input
            type="text"
            placeholder="제목을 입력해주세요.(50자 이내)"
            value={title}
            onChange={setTitle}
            required
          />
          <div>내용</div>
          <textarea
            type="text"
            placeholder="내용을 입력해주세요.(200자 이내)"
            value={contents}
            onChange={setContents}
            required
          />
        </ContentsBox>
        <SubmitButton type="submit">추가하기</SubmitButton>
      </FormBox>
    </div>
  );
}

export default PostTodos;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FormBox = styled.form`
  padding: 10px;
  margin: 20px;
  font-size: 24px;

  height: 100%;
`;

const SubmitButton = styled.button`
  border: none;

  width: 100%;
  height: 48px;
  margin-top: 20px;

  font-size: 24px;
  cursor: pointer;
`;
