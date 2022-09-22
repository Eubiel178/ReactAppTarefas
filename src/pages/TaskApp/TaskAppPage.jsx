import { useEffect, useState } from "react";

import {
  Container,
  TaskList,
  //FeedBack,
  MainContainer,
  ContainerContent,
} from "./Styles";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import SubTitle from "./components/SubTitle/SubTitle";
import TaskItem from "./components/TaskItem/TaskItem";

import { add, remove, edit, list } from "../../utils/task";

import Swal from "sweetalert2";
import { getLoggedUser } from "../../utils/user";

const TaskAppPage = () => {
  const [task, setTask] = useState({
    description: "",
    id: "",
    isFinished: false,
    userID: "",
  });
  const [isEdit, setIsEdit] = useState("");
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const removeTask = (taskId) => {
    Swal.fire({
      title: "Deseja remover essa tarefa?",
      icon: "question",
      iconHtml: "?",
      confirmButtonText: "confirmar",
      cancelButtonText: "cancel",
      showCancelButton: true,
      showCloseButton: true,

      preConfirm: (value) => {
        if (value === true) {
          remove(taskId);

          taskList();
        }
      },
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (isEdit === "") {
      add(task);
    } else {
      edit(task, isEdit);
      setIsEdit("");
    }

    setInput("");
  };

  const taskList = () => {
    const user = getLoggedUser();
    const allTasks = list();

    const userTasks = allTasks.filter((element) => {
      return element.userID === user[0].id;
    });

    console.log(userTasks);
    if (userTasks) {
      setToDoList(userTasks);
    }
  };

  useEffect(() => {
    taskList();
  }, [input]);

  const handleSetFinishTask = (task) => {
    let data;

    if (task.isFinished === false) {
      Swal.fire({
        title: "Deseja mesmo marcar esta tarefa como concluida?",
        icon: "question",
        iconHtml: "?",
        confirmButtonText: "confirmar",
        cancelButtonText: "cancel",
        showCancelButton: true,
        showCloseButton: true,

        preConfirm: async (value) => {
          if (value === true) {
            data = {
              description: task.description,
              id: task.id,
              isFinished: true,
            };
            await edit(data, task.id);

            taskList();
          }
        },
      });
    }
  };

  const taskEdit = (task) => {
    if (task.isFinished === false) {
      setTask({
        description: task.description,
        id: task.id,
        isFinished: false,
        userID: "",
      });

      setInput(task.description);

      setIsEdit(task.id);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tarefa concluida não pode ser editada!",
      });
    }
  };

  return (
    <Container>
      <ContainerContent>
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

            <TaskList>
              {toDoList &&
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
                        removeTask(taskJSON.id);
                      }}
                      edit={() => {
                        taskEdit(taskJSON);
                      }}
                    />
                  );
                })}
            </TaskList>
          </div>
        </MainContainer>
      </ContainerContent>
    </Container>
  );
};

export default TaskAppPage;
