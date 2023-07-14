import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Works from "../pages/Workspage";
import Main from "../pages/MainPage";
import Work from "../pages/WorkPage";
import DetailTodolist from "../component/detailTodolist/DetailTodolist";
import FixTodos from "../component/fixTodos/FixTodos";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/works" element={<Works />} />
        <Route path="/work" element={<Work />} />
        <Route path="/detail/:id" element={<DetailTodolist />} />
        <Route path="/fix/:id" element={<FixTodos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
