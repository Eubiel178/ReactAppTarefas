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
      {auth ? (
        <Routes>
          <Route path="/home" exact element={<Pages.Home />} />
          <Route path="/home/list" exact element={<Pages.List />} />
          <Route
            path="/home/list-checked"
            exact
            element={<Pages.ListChecked />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" exact element={<Pages.Login />} />
          <Route path="/register" exact element={<Pages.Register />} />
        </Routes>
      )}
    </Router>
  );
};

export default AppRoutes;
