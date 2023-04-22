import AppRoutes from "./routes/routes";
import Contexts from "./contexts/Contexts";
import GlobalStyle from "./styles/global";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";

import { getOne } from "./utils/backend/user";

const App = () => {
  const [input, setInput] = useState("");
  const [auth, setAuth] = useState(false);
  const [mode, setMode] = useState(false);
  const [userJson, setUserJson] = useState({});
  const [toDoList, setToDoList] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);
  const [remainingTasks, setRemainingTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      (async () => {
        const user = await getOne(token);

        if (user.name) {
          setUserJson(user);
          setAuth(true);
        }
      })();
    }

    // eslint-disable-next-line
  }, []);

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
            completedTask,
            setCompletedTask,
            remainingTasks,
            setRemainingTasks,
            toDoList,
            setToDoList,
            isOpen,
            setIsOpen,
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
