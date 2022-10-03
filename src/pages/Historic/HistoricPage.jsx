import { useContext, useEffect, useState } from "react";

import { getSavedTasks } from "../../utils/task";

import { Container, ContainerContent, TaskList } from "./Styles";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import Header from "./components/Header/Header";
import Contexts from "../../contexts/Contexts";
import TaskItem from "./components/TaskItem/TaskItem";

const HistoricPage = () => {
  const { input, mode } = useContext(Contexts);
  const [tasks, setTasks] = useState();

  const [parent] = useAutoAnimate();

  useEffect(() => {
    if (localStorage.getItem("Historic") !== "") {
      let tasks = getSavedTasks();
      setTasks(tasks);
    }
  }, [input]);

  return (
    <section>
      <Container background={mode ? " rgb(32, 28, 28)" : "#edf0f2"}>
        <ContainerContent background={mode ? "black" : "white"}>
          <Header set={setTasks} />

          <TaskList color={mode ? "white" : "black"} ref={parent}>
            {tasks &&
              tasks.map((task) => {
                return <TaskItem task={task.description} id={task.id} />;
              })}
          </TaskList>
        </ContainerContent>
      </Container>
    </section>
  );
};

export default HistoricPage;
