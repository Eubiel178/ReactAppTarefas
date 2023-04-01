import AppRoutes from "./routes/routes";
import Contexts from "./contexts/Contexts";
import GlobalStyle from "./styles/global";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";

const App = () => {
  const [input, setInput] = useState("");
  const [auth, setAuth] = useState(false);
  const [mode, setMode] = useState(false);
  const [userJson, setUserJson] = useState({});

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mode ? darkTheme : lightTheme}>
        <Contexts.Provider
          value={{
            input,
            setInput,
            auth,
            setAuth,
            mode,
            setMode,
            userJson,
            setUserJson,
          }}
        >
          <main>
            <AppRoutes />
          </main>
        </Contexts.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
