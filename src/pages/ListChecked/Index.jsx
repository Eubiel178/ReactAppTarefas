import { FeedBack, MainContainer, TaskList } from "./Styles";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import { ContainerPages, NavBar, Title } from "../../components/Index";

import TaskItem from "./components/TaskItem/Index";
import { edit, remove, get } from "../../utils/task";
import { useEffect, useState, useContext } from "react";
import { swalModal } from "../../utils/swalModal";
import { isLogged } from "../../utils/isLogged";
import Contexts from "../../contexts/Contexts";
import { useNavigate } from "react-router-dom";

const ListChecked = () => {
  const [animationParent] = useAutoAnimate();
  const [listChecked, setListChecked] = useState([]);
  const { setUserJson, setAuth } = useContext(Contexts);
  const navigate = useNavigate();

  const handleRemove = async (task, index) => {
    const newArray = [...listChecked];

    const { value } = await swalModal("Deseja remover essa tarefa?");

    if (value === true) {
      await remove(task._id);

      newArray.splice(index, 1);
      setListChecked(newArray);
    }
  };

  const handleSetFinishTask = async (task, taskId, index) => {
    const { value } = await swalModal(
      "Deseja mesmo desmarcar esta tarefa como concluida?"
    );

    if (value === true) {
      const newArray = [...listChecked];

      await edit({ isFinished: false }, taskId);

      newArray[index].isFinished = false;

      setListChecked(newArray);
    }
  };

  useEffect(() => {
    (async () => {
      const list = await get();

      list.sort((currentElement, nextElement) => {
        return parseInt(currentElement.index) - parseInt(nextElement.index);
      });

      const checkedList = list.filter((element) => {
        return element.isFinished === true;
      });

      setListChecked(checkedList);

      isLogged(setUserJson, setAuth, navigate);
    })();

    // eslint-disable-next-line
  }, []);

  return (
    <ContainerPages>
      <NavBar />
      <MainContainer>
        <Title text="Tarefas Concluidas" />
        <TaskList ref={animationParent}>
          {listChecked.length === 0 ? (
            <FeedBack>Nenhuma tarefa foi concluida</FeedBack>
          ) : (
            listChecked.map((element, index, array) => {
              return (
                <TaskItem
                  key={element.key}
                  taskId={element._id}
                  array={array}
                  index={index}
                  description={element.description}
                  task={element}
                  remove={handleRemove}
                  isFinished={element.isFinished}
                  id={element._id}
                  handleSetFinishTask={handleSetFinishTask}
                />
              );
            })
          )}
        </TaskList>
      </MainContainer>
    </ContainerPages>
  );
};

export default ListChecked;
