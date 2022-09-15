import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";

import TaskAppPage from "../pages/TaskApp/TaskAppPage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import { func } from "prop-types";

const AppRoutes = () => {
  const [auth, setAuth] = useState(false);
  const [button, setButton] = useState("Logar");

  const Authenticated = () => {
    setAuth(!auth);

    if (auth == true) {
      setButton("Deslogar");
    } else {
      setButton("Logar");
    }
  };

  return (
    <>
      <button onClick={Authenticated}>{button}</button>
      <Router>
        {auth === false ? (
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<TaskAppPage />} />
          </Routes>
        )}
      </Router>
    </>
  );
};

export default AppRoutes;
