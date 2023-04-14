import { FeedBack, MainContainer, TaskList } from "./Styles";

import { useContext } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import Contexts from "../../contexts/Contexts";

import { ContainerPages, NavBar, Title } from "../../components/Index";

import TaskItem from "./components/TaskItem/Index";
import { edit, remove, get } from "../../utils/task";
import Swal from "sweetalert2";
import { useEffect } from "react";

const ListChecked = () => {
  const [animationParent] = useAutoAnimate();
  const { toDoList, setToDoList } = useContext(Contexts);

  const handleRemove = async (task, index) => {
    await remove(task._id);
  };

  const handleSetFinishTask = async (task, taskId, index) => {
    const { value } = await Swal.fire({
      title: "Deseja mesmo marcar desmarcar esta tarefa como concluida?",
      icon: "question",
      iconHtml: "?",
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      showCancelButton: true,
      showCloseButton: true,

      preConfirm: (value) => {
        return value;
      },
    });

    if (value === true) {
      const newArray = [...toDoList];

      await edit({ isFinished: true }, taskId);

      newArray[index].isFinished = true;

      setToDoList(newArray);
    }
  };

  useEffect(() => {
    (async () => {
      const list = await get();

      list.sort((currentElement, nextElement) => {
        return parseInt(currentElement.index) - parseInt(nextElement.index);
      });

      setToDoList(list);
    })();

    // eslint-disable-next-line
  }, []);

  return (
    <ContainerPages>
      <NavBar />
      <MainContainer>
        <Title text="Tarefas Concluidas" />
        <TaskList ref={animationParent}>
          {toDoList.length === 0 ? (
            <FeedBack>Nenhuma tarefa foi concluida</FeedBack>
          ) : (
            toDoList.map((element, index, array) => {
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
                  handleFinish={handleSetFinishTask}
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
