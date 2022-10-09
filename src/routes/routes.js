import Contexts from "../contexts/Contexts";

//hooks
import { useContext } from "react";

//libs
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Historic from "../pages/Historic";
import Login from "../pages/Login";
import Register from "../pages/Register/index";
import TaskApp from "../pages/TaskApp/index";

const AppRoutes = () => {
  const { auth } = useContext(Contexts);

  return (
    <Router>
      {auth === false ? (
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" exact element={<TaskApp />} />
          <Route path="/historic" exact element={<Historic />} />
        </Routes>
      )}
    </Router>
  );
};

export default AppRoutes;
