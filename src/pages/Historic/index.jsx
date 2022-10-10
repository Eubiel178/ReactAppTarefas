//hooks
import { useContext, useEffect, useState } from "react";

//styled-components
import { Container, ContainerContent, TaskList } from "./styles";

//libs
import { useAutoAnimate } from "@formkit/auto-animate/react";

//page uttils
import { get } from "../../utils/task";

//components
import Header from "./components/Header/index";
import Contexts from "../../contexts/Contexts";
import TaskItem from "./components/TaskItem/index";

const Historic = () => {
  const { mode } = useContext(Contexts);
  const [completed, setCompleted] = useState([]);
  const [parent] = useAutoAnimate();

  const handleRenderinglist = async () => {
    const response = await get();

    let tasksCompleted = response.data.filter((element) => {
      if (element.shelf === 3) {
        return element;
      }
    });

    setCompleted(tasksCompleted);
  };

  useEffect(() => {
    handleRenderinglist();
  }, []);

  return (
    <section>
      <Container background={mode ? " rgb(0, 0, 0)" : "#edf0f2"}>
        <ContainerContent background={mode ? "#121212" : "white"}>
          <Header list={completed} renderList={handleRenderinglist} />
          <TaskList color={mode ? "white" : "black"} ref={parent}>
            {completed &&
              completed.map((element) => {
                return <TaskItem task={element.title} id={element.id} />;
              })}
          </TaskList>
        </ContainerContent>
      </Container>
    </section>
  );
};

export default Historic;
