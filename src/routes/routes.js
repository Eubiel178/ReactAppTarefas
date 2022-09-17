import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";

import TaskAppPage from "../pages/TaskApp/TaskAppPage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";

const AppRoutes = () => {
  const [auth, setAuth] = useState(true);
  const [button, setButton] = useState("Logar");

  const Authenticated = () => {
    setAuth(!auth);
    if (auth === false) {
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
            <Route path="/" element={<LoginPage />} />
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
