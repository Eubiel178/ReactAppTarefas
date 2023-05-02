//libs
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import * as Pages from "../pages/Index";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" exact element={<Pages.Home />} />
        <Route path="/home/list" exact element={<Pages.List />} />
        <Route
          path="/home/list-checked"
          exact
          element={<Pages.ListChecked />}
        />
        <Route path="/home/sticky-note" exact element={<Pages.StickyNote />} />
        <Route path="/" exact element={<Pages.Login />} />
        <Route path="/home/profile" exact element={<Pages.Profile />} />
        <Route path="/register" exact element={<Pages.Register />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
