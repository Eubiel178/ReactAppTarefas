//hooks
import { useContext, useEffect, useState } from "react";

//styled-components
import { Container, ContainerContent, TaskList } from "./styles";

//libs
import { useAutoAnimate } from "@formkit/auto-animate/react";

//page utills
import { getConcluded } from "../../utils/task";

//components
import Header from "./components/Header/index";
import Contexts from "../../contexts/Contexts";
import TaskItem from "./components/TaskItem/index";

const Historic = () => {
  const { mode } = useContext(Contexts);
  const [toDoList, setToDoList] = useState([]);
  const [parent] = useAutoAnimate();

  const handleList = async () => {
    const conclued = await getConcluded();
    setToDoList(conclued);
  };

  useEffect(() => {
    handleList();
  }, []);

  return (
    <section>
      <Container background={mode ? " rgb(0, 0, 0)" : "#edf0f2"}>
        <ContainerContent background={mode ? "#121212" : "white"}>
          <Header list={toDoList} renderList={handleList} />
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

export default Historic;
