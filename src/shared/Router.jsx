import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
// 한파일안에서 한번만 쓸 수 있음
// import할 때 이름을 마음대로 정할 수 있음
// 하나의 파일이 곧 컴포넌트 = 디폴트
