import Context from "./contexts/Contexts";

import { useState } from "react";

import AppRoutes from "./routes/routes";

const App = () => {
  const [auth, setAuth] = useState(false);
  
  return (
    <main>
      <Context.Provider value={{ auth, setAuth }}>
        <AppRoutes />
      </Context.Provider>
    </main>
  );
};

export default App;
