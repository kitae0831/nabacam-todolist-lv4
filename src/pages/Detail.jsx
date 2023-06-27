import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);

  console.log("id", id);
  console.log("todos", todos);

  return <div>Detail</div>;
}

export default Detail;
