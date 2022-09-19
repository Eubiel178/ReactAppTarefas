import { useEffect, useState } from "react";

import { Container, TaskList } from "./Styles";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import SubTitle from "./components/SubTitle/SubTitle";
import TaskItem from "./components/TaskItem/TaskItem";

import { addTask, removeTask, taskEdit, taskList } from "../../utils/task";

const TaskAppPage = () => {
  const [task, setTask] = useState("");
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const AddTask = (event) => {
    event.preventDefault();

    if (input.length > 0) {
      addTask(task);

      setInput("");
    }
  };

  const List = () => {
    setToDoList(taskList);
  };

  const RemoveTask = (taskId) => {
    removeTask(taskId, setInput, input);

    List();
  };

  const TaskEdit = (task) => {
    taskEdit(task, setInput, setTask);

    RemoveTask(task.id);
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
                      task={taskJSON.taskDescription}
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
