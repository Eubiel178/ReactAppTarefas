import { useEffect, useState } from "react";

import { Container, TaskList } from "./Styles";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import SubTitle from "./components/SubTitle/SubTitle";
import TaskItem from "./components/TaskItem/TaskItem";

import { addTask, taskList } from "../../utils/task";

const TaskAppPage = () => {
  const [task, setTask] = useState("");
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const AddTask = (event) => {
    event.preventDefault();

    addTask(task);

    setInput("");
  };

  /*


              {tasks &&
              tasks.map((element, index) => (
                <Tasks
                  element={element.value}
                  key={index}
                  id={element.id}
                  event={() => {
                    RemoveTask(element.id);
                  }}
                />
              ))}
  */

  /*  const RemoveTask = (elementId) => {
    const newList = tasks.filter((task) => {
      return elementId !== task.id;
    });
    console.log(newList);
    setTasks(newList);
  }; */

  return (
    <>
      <Header />
      <Container>
        <Form
          AddTask={AddTask}
          input={input}
          setTask={setTask}
          setInput={setInput}
        />
        <div>
          <SubTitle />

          <TaskList>
            {toDoList.length > 0 &&
              toDoList.map((taskJSON, index) => {
                return (
                  <TaskItem
                    task={taskJSON.taskDescription}
                    key={index}
                    id={taskJSON.id}
                  />
                );
              })}
          </TaskList>
        </div>
      </Container>
    </>
  );
};

export default TaskAppPage;
