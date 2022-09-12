import { useState } from "react";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import { Container, Feedback, TaskList } from "./Styles";
import SubTitle from "./components/SubTitle/SubTitle";
import Tasks from "./components/TaskItem/TaskItem";

function TaskAppPage() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function AddTask(event) {
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
  }

  function RemoveTask(elementId) {
    const newList = tasks.filter((task) => {
      return elementId != task.id;
    });
    setTasks(newList);
  }

  return (
    <Container>
      <Header />
      <section>
        <Form AddTask={AddTask} task={task} setTask={setTask} />
        <div>
          <SubTitle tasks={tasks} />

          <TaskList>
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
          </TaskList>
        </div>
      </section>
    </Container>
  );
}

export default TaskAppPage;
