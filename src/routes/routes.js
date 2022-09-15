import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";

import TaskAppPage from "../pages/TaskApp/TaskAppPage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";

const AppRoutes = () => {
  const [auth, setAuth] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setAuth(!auth);
        }}
      >
        {!auth ? "Logar" : "Deslogar"}
      </button>
      <Router>
        <Routes>
          {auth === false ? (
            <Routes>
              {" "}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          ) : (
            <Route>
              <Route path="/" element={<TaskAppPage />} />
            </Route>
          )}
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
