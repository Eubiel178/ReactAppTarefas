import AppRoutes from "./routes/routes";

import Contexts from "./contexts/Contexts";

import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [auth, setAuth] = useState(false);
  const [mode, setMode] = useState(false);
  const [inProgress, setInProgress] = useState(true);

  return (
    <Contexts.Provider
      value={{
        input,
        setInput,
        auth,
        setAuth,
        mode,
        setMode,
        inProgress,
        setInProgress,
      }}
    >
      <main>
        <AppRoutes />
      </main>
    </Contexts.Provider>
  );
};

export default App;
