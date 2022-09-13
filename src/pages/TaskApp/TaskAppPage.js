import { useState } from "react";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import { Container, Feedback, TaskList } from "./Styles";
import SubTitle from "./components/SubTitle/SubTitle";
import Tasks from "./components/TaskItem/TaskItem";

const TaskAppPage = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const AddTask = (event) => {
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

  const RemoveTask = (elementId) => {
    const newList = tasks.filter((task) => {
      return elementId != task.id;
    });
    setTasks(newList);
  };

  return (
    <>
      <Header />
      <Container>
        <Form AddTask={AddTask} task={task} setTask={setTask} />
        <div>
          <SubTitle tasks={tasks} />

          <TaskList>
            {tasks &&
              tasks.map((element, index) => (
                <Tasks
                  element={element.value}
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
