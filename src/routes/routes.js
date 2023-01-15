import Contexts from "../contexts/Contexts";

//hooks
import { useContext } from "react";

//libs
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Login from "../pages/Login/Index/Index";
import Register from "../pages/Register/Index/Index";
import Home from "../pages/Home/Index/Index";

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
          <Route path="/" exact element={<Home />} />
        </Routes>
      )}
    </Router>
  );
};

export default AppRoutes;
