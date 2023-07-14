import React from "react";
import pointerImage from "../img/feather-pointed-solid.svg";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Body() {
  const navigate = useNavigate();

  return (
    <main>
      <TitleBox>무엇을 할까요?</TitleBox>
      <MainBox onClick={() => navigate("Work")}>
        <div style={{ fontSize: "36px", fontWeight: "bold" }}>
          할일 기록하기
        </div>
        <Img src={pointerImage} alt="" />
      </MainBox>
      <MainBox onClick={() => navigate("Works")}>
        <div style={{ fontSize: "36px", fontWeight: "bold" }}>Todo List</div>
        <Img src={pointerImage} alt="" />
      </MainBox>
    </main>
  );
}

export default Body;

const TitleBox = styled.div`
  padding: 10px;
  margin: 20px;
  font-size: 24px;
`;

const MainBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid rgb(221, 221, 221);
  padding: 10px;
  margin: 20px;
  cursor: pointer;

  height: 100px;
`;

const Img = styled.div`
  width: 50px;
  height: 50px;
`;
