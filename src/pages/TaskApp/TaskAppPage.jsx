import { useEffect, useState } from "react";

import { Container, TaskList } from "./Styles";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import SubTitle from "./components/SubTitle/SubTitle";
import TaskItem from "./components/TaskItem/TaskItem";

import { addTask, removeTask, taskEdit, taskList } from "../../utils/task";

import Swal from "sweetalert2";

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

  const RemoveTask = (taskId) => {
    Swal.fire({
      title: "Deseja remover essa tarefa?",
      icon: "question",
      iconHtml: "?",
      confirmButtonText: "confirmar",
      cancelButtonText: "cancel",
      showCancelButton: true,
      showCloseButton: true,

      preConfirm: async (value) => {
        if (value === true) {
          removeTask(taskId);

          List();
        }
      },
    });
  };

  const HandleOnSubmit = (event) => {
    event.preventDefault();

    if (isEdit === "") {
      addTask(task);
    } else {
      taskEdit(task, isEdit);
      setIsEdit("");
    }

    setInput("");
  };

  const List = () => {
    setToDoList(taskList);
  };

  useEffect(() => {
    List();
  }, [input]);

  const HandleSetFinishTask = (task) => {
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
            if (value === true) {
              data = {
                description: task.description,
                id: task.id,
                isFinished: true,
              };
              await taskEdit(data, task.id);

              List();
            }
          }
        },
      });
    }
  };

  const TaskEdit = (task) => {
    if (task.isFinished === false) {
      setTask({
        description: task.description,
        id: task.id,
        isFinished: false,
        userID: "",
      });

      setInput(task.description);

      setIsEdit(task.id);
    }
  };

  return (
    <>
      <Header />
      <section>
        <Container>
          <Form
            AddTask={HandleOnSubmit}
            input={input}
            setTask={setTask}
            setInput={setInput}
            isEdit={isEdit}
          />
          <div>
            <SubTitle toDoList={toDoList} />

            <TaskList>
              {toDoList &&
                toDoList.map((taskJSON, index) => {
                  return (
                    <TaskItem
                      setFinishTask={() => {
                        HandleSetFinishTask(taskJSON);
                      }}
                      isFinished={taskJSON.isFinished}
                      task={taskJSON.description}
                      key={index}
                      id={taskJSON.id}
                      remove={() => {
                        RemoveTask(taskJSON.id);
                      }}
                      edit={() => {
                        TaskEdit(taskJSON);
                      }}
                    />
                  );
                })}
            </TaskList>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TaskAppPage;
