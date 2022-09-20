import { useEffect, useState } from "react";

import { Container, TaskList } from "./Styles";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import SubTitle from "./components/SubTitle/SubTitle";
import TaskItem from "./components/TaskItem/TaskItem";

import { addTask, removeTask, taskEdit, taskList } from "../../utils/task";

const TaskAppPage = () => {
  const [task, setTask] = useState({
    description: "",
    id: "",
    isFinished: false,
    userID: "",
  });
  const [isEdit, setIsEdit] = useState();
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([""]);

  const RemoveTask = (taskId) => {
    removeTask(taskId, setInput, input);

    List();
  };

  const HandleOnSubmit = (event) => {
    event.preventDefault();
    if (isEdit === "") {
      addTask(task);
      setInput("");
    } else {
      taskEdit(task, isEdit);
      setInput("");
      setIsEdit("");
    }
  };

  const List = () => {
    setToDoList(taskList);
  };

  useEffect(() => {
    List();
  }, [input]);

  const TaskEdit = (task) => {
    setTask({
      description: task.description,
      id: task.id,
      isFinished: false,
      userID: "",
    });

    setInput(task.description);

    setIsEdit(task.id);
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
