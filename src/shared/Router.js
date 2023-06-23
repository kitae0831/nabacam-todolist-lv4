import { BrowserRouter, Route, Routes } from "react-router-dom";
import detailPage from "../pages/detailPage.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="detailPage" element={<detailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
