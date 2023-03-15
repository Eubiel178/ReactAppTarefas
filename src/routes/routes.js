import Contexts from "../contexts/Contexts";

//hooks
import { useContext } from "react";

//libs
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import * as Pages from "../pages/Index";

const AppRoutes = () => {
  const { auth } = useContext(Contexts);

  return (
    <Router>
      {auth === false ? (
        <Routes>
          <Route path="/" exact element={<Pages.Login />} />
          <Route path="/register" exact element={<Pages.Register />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" exact element={<Pages.Home />} />
        </Routes>
      )}
    </Router>
  );
};

export default AppRoutes;
