import { useContext, useEffect, useState } from "react";

import { getTask } from "../../utils/task";

import { Container, ContainerContent, TaskList } from "./Styles";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import Header from "./components/Header/Header";
import Contexts from "../../contexts/Contexts";
import TaskItem from "./components/TaskItem/TaskItem";

const HistoricPage = () => {
  const { mode } = useContext(Contexts);
  const [toDoList, setToDoList] = useState([]);

  const [parent] = useAutoAnimate();

  useEffect(async () => {
    const list = await getTask();

    console.log(list);
  }, []);

  return (
    <section>
      <Container background={mode ? " rgb(0, 0, 0)" : "#edf0f2"}>
        <ContainerContent background={mode ? "#121212" : "white"}>
          <Header />
          <TaskList color={mode ? "white" : "black"} ref={parent}>
            {toDoList &&
              toDoList.map((element) => {
                return <TaskItem task={element.title} id={element.id} />;
              })}
          </TaskList>
        </ContainerContent>
      </Container>
    </section>
  );
};

export default HistoricPage;
