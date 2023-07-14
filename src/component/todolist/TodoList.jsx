import React from "react";
import { useQuery } from "react-query";
import { getTodos } from "../../api/todo";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function TodoList() {
  const navigate = useNavigate();

  const { isLoading, data } = useQuery("todos", getTodos);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <div style={{ margin: "20px" }}>
      {data.map((item) => {
        return (
          <ContentsBox
            key={item.id}
            onClick={() => navigate(`/detail/${item.id}`)}
          >
            <div>
              <h2>{item.title}</h2>
              <p>작성자: {item.writer}</p>
            </div>
          </ContentsBox>
        );
      })}
    </div>
  );
}
export default TodoList;

const ContentsBox = styled.div`
  border: 1px solid;
  width: 100%;

  display: flex;
  justify-content: space-between;

  align-items: center;

  border: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
  padding-left: 10px;
  margin-bottom: 20px;

  cursor: pointer;
`;
