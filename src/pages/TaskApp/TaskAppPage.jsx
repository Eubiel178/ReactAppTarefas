import {
  Container,
  TaskList,
  MainContainer,
  ContainerContent,
  FeedBack,
} from "./Styles";

import { useContext, useEffect, useState } from "react";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import { add, remove, edit, list, saveCompletedTasks } from "../../utils/task";

import { getLoggedUser } from "../../utils/user";

import Swal from "sweetalert2";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import SubTitle from "./components/SubTitle/SubTitle";
import TaskItem from "./components/TaskItem/TaskItem";
import Contexts from "../../contexts/Contexts";

const TaskAppPage = () => {
  const [task, setTask] = useState({
    description: "",
    id: "",
    isFinished: false,
    userID: "",
  });
  const [isEdit, setIsEdit] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [parent] = useAutoAnimate();
  const { input, setInput, mode, porgress } = useContext(Contexts);

  const handleRemove = (task) => {
    if (task.isFinished === false) {
      Swal.fire({
        title: "Deseja remover essa tarefa?",
        icon: "question",
        iconHtml: "?",
        confirmButtonText: "Sim",
        cancelButtonText: "Não",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        showCancelButton: true,
        showCloseButton: true,

        preConfirm: (value) => {
          if (value === true) {
            remove(task.id);

            handleToDoList();
          }
        },
      });
    } else {
      remove(task.id);

      handleToDoList();
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (toDoList.length === 0 && isEdit !== "") {
      add(task);

      handleToDoList();
    } else if (isEdit) {
      edit(task, isEdit);
    } else {
      add(task);
    }

    setInput("");
    setIsEdit("");
  };

  const handleToDoList = async () => {
    const user = await getLoggedUser();
    const allTasks = await list();

    const userTasks = allTasks.filter((task) => {
      return task.userID === user[0].id;
    });

    if (userTasks) {
      setToDoList(userTasks);
    }
  };

  useEffect(() => {
    handleToDoList();
  }, [input]);

  const handleSetFinishTask = (task) => {
    let data;

    if (task.isFinished === false) {
      Swal.fire({
        title: "Deseja mesmo marcar esta tarefa como concluida?",
        icon: "question",
        iconHtml: "?",
        confirmButtonText: "Sim",
        cancelButtonText: "Não",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        showCancelButton: true,
        showCloseButton: true,

        preConfirm: async (value) => {
          if (value === true) {
            data = {
              description: task.description,
              id: task.id,
              isFinished: true,
            };

            saveCompletedTasks(data);

            await edit(data, task.id);

            handleToDoList();
          }
        },
      });
    }
  };

  const handleEdit = (task) => {
    if (task.isFinished === false) {
      setTask({
        description: task.description,
        id: task.id,
        isFinished: false,
        userID: task.userID,
      });

      setInput(task.description);

      setIsEdit(task.id);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tarefas concluidas não podem ser editada!",
      });
    }
  };

  const handlePosition = (id, position) => {
    if (position === "up") {
    }
  };

  return (
    <Container background={mode ? " rgb(0, 0, 0)" : "#edf0f2"}>
      <ContainerContent background={mode ? "#121212" : "white"}>
        <Header />
        <MainContainer>
          <Form
            AddTask={handleOnSubmit}
            input={input}
            setTask={setTask}
            setInput={setInput}
            isEdit={isEdit}
          />
          <div>
            <SubTitle toDoList={toDoList} setToDoList={setToDoList} />

            <TaskList color={mode ? "white" : "black"} ref={parent}>
              {toDoList.length === 0 ? (
                <FeedBack>Nenhuma tarefa foi adicionada</FeedBack>
              ) : (
                toDoList.map((taskJSON, index) => {
                  return (
                    <TaskItem
                      setFinishTask={() => {
                        handleSetFinishTask(taskJSON);
                      }}
                      isFinished={taskJSON.isFinished}
                      task={taskJSON.description}
                      key={index}
                      id={taskJSON.id}
                      remove={() => {
                        handleRemove(taskJSON);
                      }}
                      edit={() => {
                        handleEdit(taskJSON);
                      }}
                      index={taskJSON.index}
                      position={handlePosition}
                    />
                  );
                })
              )}
            </TaskList>
          </div>
        </MainContainer>
      </ContainerContent>
    </Container>
  );
};

export default TaskAppPage;
