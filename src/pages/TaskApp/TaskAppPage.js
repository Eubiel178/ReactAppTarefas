import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import { Container, Feedback, TaskList } from "./Styles";
import SubTitle from "./components/SubTitle/SubTitle";
import Tasks from "./components/TaskItem/TaskItem";

const TaskAppPage = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [localGet, setLocalGet] = useState(undefined);

  const AddTask = (event) => {
    event.preventDefault();
    if (task.length > 0) {
      setTasks((prevState) => {
        return [
          ...prevState,
          {
            value: task,
            id: task.length,
          },
        ];
      });

      setTask("");
    }
  };

  const RemoveTask = (elementId) => {
    const newList = tasks.filter((task) => {
      return elementId != task.id;
    });
    setTasks(newList);
    if (localGet.length == 1) {
      localStorage.clear("tasks");
    }
  };

  useEffect(() => {
    tasks.map((element, index, array) => {
      localStorage.setItem("tasks", JSON.stringify(array));
      console.log(array);
    });

    setLocalGet(JSON.parse(localStorage.getItem("tasks")));
  }, [tasks]);

  return (
    <>
      <Header />
      <Container>
        <Form AddTask={AddTask} task={task} setTask={setTask} />
        <div>
          <SubTitle localGet={localGet} />

          <TaskList>
            {localGet &&
              localGet.map((element, index) => (
                <Tasks
                  element={element.value}
                  key={index}
                  id={element.id}
                  event={() => {
                    RemoveTask(element.id);
                  }}
                />
              ))}
          </TaskList>
        </div>
      </Container>
    </>
  );
};

export default TaskAppPage;
