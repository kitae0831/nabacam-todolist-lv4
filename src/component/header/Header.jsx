import React from "react";
import homeImage from "../img/69524.png";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Header() {
  const navigate = useNavigate();
  return (
    <Head>
      <Img src={homeImage} alt="" onClick={() => navigate("/")} />
      <Contents>모두의 투두리스트</Contents>
    </Head>
  );
}

export default Header;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid rgb(221, 221, 221);
  padding: 10px;
  margin: 20px;
`;

const Contents = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
