import AppRoutes from "./routes/routes";

import Contexts from "./contexts/Contexts";

import { useState } from "react";

const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <Contexts.Provider value={{ auth, setAuth }}>
      <main>
        <AppRoutes />
      </main>
    </Contexts.Provider>
  );
};

export default App;
