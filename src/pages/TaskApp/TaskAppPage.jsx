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
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [taskIdEdit, setTaskIdEdit] = useState("");

  const AddTask = (event) => {
    event.preventDefault();

    if (taskIdEdit && input.length > 0) {
      setTask({
        description: input,
        id: taskIdEdit,
        isFinished: false,
        userID: "",
      });

      console.log(task.id);
      removeTask(task.id);

      addTask(task);

      setTaskIdEdit("");
    } else if (input.length > 0) {
      addTask(task);
    }

    setInput("");
  };

  const List = () => {
    setToDoList(taskList);
  };

  const RemoveTask = (taskId) => {
    removeTask(taskId, setInput, input);

    List();
  };

  const TaskEdit = (task) => {
    let taskEditReturn = taskEdit(task);

    taskEditReturn.forEach((element) => {
      setInput(element.description);

      setTaskIdEdit(element.id);
    });
  };

  useEffect(() => {
    List();
  }, [input]);

  return (
    <>
      <Header />
      <section>
        <Container>
          <Form
            AddTask={AddTask}
            input={input}
            setTask={setTask}
            setInput={setInput}
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
