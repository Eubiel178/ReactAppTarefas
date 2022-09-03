import Styles from "./Form.module.css";
import { useState } from "react";
import FormItem from "./FormItem/FormItem.js";

function Form() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function AddTask(event) {
    event.preventDefault();
    if (task.length > 0) {
      setTasks((prevState) => {
        console.log(prevState);
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
    <section>
      <form onSubmit={AddTask} className={Styles.form}>
        <input
          onChange={(event) => setTask(event.target.value)}
          className={Styles.inputTask}
          type="text"
          name="tarefa"
          placeholder="Descrição da tarefa"
          value={task}
        />
        <button className={Styles.button}>Adicionar</button>
      </form>

      <h2 className={Styles.subTitle}>TAREFAS</h2>
      {tasks.length == 0 && (
        <p className={Styles.taskUndefined}>Nenhuma tarefa foi adicionada</p>
      )}

      <div className={Styles.taskList}>
        {tasks &&
          tasks.map((element, index) => (
            <FormItem
              element={element.value}
              key={index}
              id={element.id}
              event={() => {
                RemoveTask(element.id);
              }}
            />
          ))}
      </div>
    </section>
  );
}

export default Form;
