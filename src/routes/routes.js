import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TaskAppPage from "../pages/TaskApp/TaskAppPage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import NavBar from "../components/NavBar/NavBar";

function routes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<TaskAppPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}
export default routes;
