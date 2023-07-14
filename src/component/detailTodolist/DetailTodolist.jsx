import React from "react";
import {
  queryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { delTodo, getTodos } from "../../api/todo";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import Header from "../header/Header";

function DetailTodolist() {
  const { isLoading, data } = useQuery(["todos"], getTodos);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const params = useParams();

  const filteredTodos = data.find((item) => {
    return item.id == params.id;
  });
  console.log(filteredTodos.id);

  // 삭제
  const mutation = useMutation(delTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");

      window.location.replace("/works");
    },
  });

  return (
    <div>
      <Header />
      <div style={{ margin: "20px" }}>
        <p>id: {filteredTodos.id}</p>
        <h1>{filteredTodos.title}</h1>
        <ContentsBox>
          <Contents>{filteredTodos.contents}</Contents>
          <div style={{ display: "flex", width: "100%" }}>
            <Button onClick={() => mutation.mutate(filteredTodos.id)}>
              삭제
            </Button>
            <Button onClick={() => navigate(`/fix/${filteredTodos.id}`)}>
              수정
            </Button>
          </div>
        </ContentsBox>
      </div>
    </div>
  );
}

export default DetailTodolist;

const ContentsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 50px;
  min-height: 550px;
`;

const Contents = styled.p`
  font-size: 24px;
`;

const Button = styled.button`
  width: 100%;
  height: 100px;

  border: 1px solid gray;

  cursor: pointer;
`;
