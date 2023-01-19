import Contexts from "../../../contexts/Contexts";

//hooks
import { useContext, useEffect, useState } from "react";

//styled-components
import { TaskList, MainContainer, ContainerContent, FeedBack } from "./Styles";

//libs
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { v4 as uuidv4 } from "uuid";

import Swal from "sweetalert2";

//page utills
import { add, remove, edit, get } from "../../../utils/task";

//components
import Header from "../components/Header/Index";
import EditForm from "../components/Edit/Index";
import SubTitle from "../components/SubTitle/Index";
import TaskItem from "../components/TaskItem/Index";
import { getLoggedUser } from "../../../utils/user";

const Home = () => {
  const [toDoList, setToDoList] = useState([]);
  const [editId, setEditId] = useState("");
  const [loading, setLoading] = useState(false);
  const [completedTask, setCompletedTask] = useState([]);
  const [animationParent] = useAutoAnimate();
  const { input, setInput, mode } = useContext(Contexts);

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

  const handleCompletedTask = (data) => {
    const isFinished = data.filter((element) => {
      return element.isFinished === true;
    });

    if (isFinished.length > 0) {
      setCompletedTask(isFinished.length);
    } else {
      setCompletedTask([].length);
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const { _id } = getLoggedUser();

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
          index: toDoList.length,
          key: uuidv4(),
        };
        const newArray = [task, ...toDoList];

        await add(task);

        setToDoList(newArray);
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

  const handleRemove = async (task, index) => {
    const newArray = [...toDoList];
    if (editId) {
      setEditId("");
    }

    if (task.isFinished === false) {
      const { value } = await swalModal("Deseja remover essa tarefa?");

      if (value === true) {
        await remove(task._id);

        newArray.splice(index, 1);
        setToDoList(newArray);
      }
    } else {
      await remove(task._id);

      newArray.splice(index, 1);

      setToDoList(newArray);
    }
  };

  const handleSetFinishTask = async (task, index) => {
    if (editId) {
      setEditId("");
    }

    if (task.isFinished === false) {
      const newArray = [...toDoList];
      const { value } = await swalModal(
        "Deseja mesmo marcar esta tarefa como concluida?"
      );

      if (value === true) {
        await edit({ isFinished: true }, task._id);

        newArray[index].isFinished = true;

        setToDoList(newArray);
      }
    }
  };

  const handlePositionTask = async (pos, task, index) => {
    if (pos === "up" || pos === "bottom") {
      const newArray = [...toDoList];

      if (pos === "up" && index !== 0) {
        newArray.splice(index, 1);

        newArray.splice(index - 1, 0, task);
      }

      if (pos === "bottom" && index < toDoList.length) {
        newArray.splice(index, 1);
        newArray.splice(index + 1, 0, task);
      }

      setToDoList(newArray);

      newArray.forEach(async (element, index) => {
        await edit({ ...element, index: index }, element._id);
      });
    }
  };

  useEffect(() => {
    (async () => {
      const list = await get();

      list.sort((smallestElement, greatestElement) => {
        return smallestElement.index - greatestElement.index;
      });

      setToDoList(list);
      handleCompletedTask(list);
    })();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ContainerContent background={mode ? "#121212" : "white"}>
        <Header />
        <MainContainer>
          <EditForm
            AddTask={handleOnSubmit}
            setInput={setInput}
            isEdit={editId}
          />
          <div>
            <SubTitle
              toDoList={toDoList}
              setToDoList={setToDoList}
              completedTask={completedTask}
              handleCompletedTask={handleCompletedTask}
            />

            <TaskList color={mode ? "white" : "black"} ref={animationParent}>
              {toDoList.length === 0 ? (
                <FeedBack>Nenhuma tarefa foi adicionada</FeedBack>
              ) : (
                toDoList.map((element, index, array) => {
                  return (
                    <TaskItem
                      key={element.key}
                      array={array}
                      index={index}
                      description={element.description}
                      task={element}
                      setFinish={handleSetFinishTask}
                      edited={handleEdit}
                      remove={handleRemove}
                      isFinished={element.isFinished}
                      id={element._id}
                      position={handlePositionTask}
                    />
                  );
                })
              )}
            </TaskList>
          </div>
        </MainContainer>
      </ContainerContent>
    </>
  );
};

export default Home;
