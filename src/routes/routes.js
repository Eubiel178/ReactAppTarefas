import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useContext } from "react";

import TaskAppPage from "../pages/TaskApp/TaskAppPage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import Contexts from "../contexts/Contexts";

const AppRoutes = () => {
  const { auth } = useContext(Contexts);

  return (
    <Router>
      {auth === false ? (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<TaskAppPage />} />
        </Routes>
      )}
    </Router>
  );
};

export default AppRoutes;
