import Contexts from "../../../contexts/Contexts";

//hooks
import { useContext, useState, useEffect } from "react";

//styled-components
import { TaskList, MainContainer, FeedBack } from "./Styles";

//libs
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

//page utills
import { add, remove, edit, get } from "../../../utils/task";

//components
import { ContainerPages, Title, NavBar } from "../../../components/Index";
import { EditForm, SubTitle, TaskItem } from "../components/Index";

const List = () => {
  const [editId, setEditId] = useState("");
  const [loading, setLoading] = useState(false);
  const [animationParent] = useAutoAnimate();
  const {
    input,
    setInput,
    userJson,
    completedTask,
    setCompletedTask,
    remainingTasks,
    setRemainingTasks,
    setToDoList,
    toDoList,
  } = useContext(Contexts);

  const swalModal = (title) => {
    if (title) {
      return Swal.fire({
        title: title,
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
    } else {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tarefas concluidas não podem ser editada!",
      });
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const _id = userJson._id;

    if (loading === false) {
      setLoading(true);

      if (toDoList.length > 0 && editId) {
        await edit({ description: input }, editId);

        const indexTaskEdit = toDoList.findIndex((element) => {
          return element._id === editId;
        });

        toDoList[indexTaskEdit].description = input;
      } else if (input) {
        const task = {
          description: input,
          isFinished: false,
          userID: _id,
          _id: uuidv4(),
          index: toDoList.length,
          key: uuidv4(),
        };

        await add(task);

        setToDoList([task, ...toDoList]);
        setRemainingTasks(remainingTasks + 1);
      }

      setInput("");
      setEditId("");
      setLoading(false);
    }
  };

  const handleEdit = (task) => {
    if (task.isFinished === false) {
      setInput(task.description);
      setEditId(task._id);
    } else {
      swalModal();
    }
  };

  const handleCancelEdit = async () => {
    const { value } = await swalModal(
      "Essa tarefa esta sendo editada. Deseja cancelar edição?"
    );

    if (value === true) {
      setEditId("");
      setInput("");
    }
  };

  const handleRemove = async (task, index) => {
    const newArray = [...toDoList];

    if (task.isFinished === false) {
      const { value } = await swalModal("Deseja remover essa tarefa?");

      if (value === true) {
        await remove(task._id);

        newArray.splice(index, 1);
        setRemainingTasks(remainingTasks - 1);
        setToDoList(newArray);
      }
    } else {
      await remove(task._id);

      newArray.splice(index, 1);

      setCompletedTask(completedTask - 1);
      setToDoList(newArray);
    }
  };

  const handleSetFinishTask = async (task, taskId, index) => {
    if (editId !== "") {
      const { value } = await swalModal(
        "Essa tarefa esta sendo editada. Deseja cancelar edição e finalizar a tarefa?"
      );

      if (value === true) {
        setEditId("");
        setInput("");

        const newArray = [...toDoList];

        await edit({ isFinished: true }, taskId);

        newArray[index].isFinished = true;

        setRemainingTasks(remainingTasks - 1);
        setCompletedTask(completedTask + 1);
        setToDoList(newArray);
      }
    } else if (task.isFinished === false) {
      const { value } = await swalModal(
        "Deseja mesmo marcar esta tarefa como concluida?"
      );

      if (value === true) {
        const newArray = [...toDoList];

        await edit({ isFinished: true }, taskId);

        newArray[index].isFinished = true;

        setRemainingTasks(remainingTasks - 1);
        setCompletedTask(completedTask + 1);
        setToDoList(newArray);
      }
    }
  };

  const handlePositionTask = async (pos, task, index) => {
    if (pos === "up" || pos === "bottom") {
      const newArray = [...toDoList];

      if (pos === "up" && index > 0) {
        newArray.splice(index, 1);
        newArray.splice(index - 1, 0, task);

        newArray.forEach(async (element, index) => {
          await edit({ ...element, index: index - 1 }, element._id);
        });

        setToDoList(newArray);
      }

      if (pos === "bottom" && index < toDoList.length) {
        newArray.splice(index, 1);
        newArray.splice(index + 1, 0, task);

        newArray.forEach(async (element, index) => {
          await edit({ ...element, index: index + 1 }, element._id);

          setToDoList(newArray);
        });
      }
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
        <Title text="ADICIONAR TAREFAS" />

        <EditForm
          AddTask={handleOnSubmit}
          setInput={setInput}
          isEdit={editId}
          load={loading}
        />
        <div>
          <SubTitle
            toDoList={toDoList}
            setToDoList={setToDoList}
            completedTask={completedTask}
            setCompletedTask={setCompletedTask}
            remainingTasks={remainingTasks}
          />

          <TaskList ref={animationParent}>
            {toDoList.length === 0 ? (
              <FeedBack>Nenhuma tarefa foi adicionada</FeedBack>
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
                    handleFinish={handleSetFinishTask}
                    edited={handleEdit}
                    cancelEdited={handleCancelEdit}
                    remove={handleRemove}
                    isFinished={element.isFinished}
                    id={element._id}
                    position={handlePositionTask}
                    editId={editId}
                  />
                );
              })
            )}
          </TaskList>
        </div>
      </MainContainer>
    </ContainerPages>
  );
};

export default List;
