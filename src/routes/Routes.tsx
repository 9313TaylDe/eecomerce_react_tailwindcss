import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../components/Login_Page";
import HomePage from "../components/Home_Page";
import Footer from "../components/Footer";

const Routess = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routess;
