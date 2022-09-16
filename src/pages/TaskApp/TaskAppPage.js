import { useEffect, useState } from "react";

import { Container, TaskList } from "./Styles";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import SubTitle from "./components/SubTitle/SubTitle";
import TaskItem from "./components/TaskItem/TaskItem";

import { addTask, taskList } from "../../utils/task";

const TaskAppPage = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [toDoList, setToDoList] = useState();

  const AddTask = (event) => {
    event.preventDefault();

    if (task.length > 0) {
      tasks.push({
        taskDescription: task,
        id: tasks.length,
        isFinished: false,
        userID: "",
      });
    }
    console.log(tasks);
    addTask(tasks);

    setTask("");
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

  const AddTaskk = (event) => {
    event.preventDefault();
    if (task.length > 0) {
      setTasks((prevState) => {
        return [
          ...prevState,
          {
            value: task,
            id: tasks.length,
          },
        ];
      });

      setTask("");
    }
  };

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
        <Form AddTask={AddTask} task={task} setTask={setTask} />
        <div>
          <SubTitle tasks={toDoList} />

          <TaskList>
            {/*toDoList === " " &&
              toDoList.map((taskJSON, index) => {
                return (
                  <TaskItem
                    task={taskJSON.taskDescription}
                    key={index}
                    id={taskJSON.id}
                  />
                );
              }) */}
          </TaskList>
        </div>
      </Container>
    </>
  );
};

export default TaskAppPage;
