//icons
import { FaTrashAlt } from "react-icons/fa";

//libs

//styled-components
import {
  TaskContainer,
  TaskDescription,
  Task,
  ReadMoreActive,
  ConcluedButton,
  Container,
  ActionContainer,
  DivButtons,
  ButtonRemove,
} from "./Styles";
import { useState } from "react";

const TaskItem = ({
  taskId,
  index,
  description,
  task,
  handleSetFinishTask,
  remove,
  isFinished,
  id,
}) => {
  const [isReadMoreActive, setIsReadMoreActive] = useState(false);

  const handleDescription = (text) => {
    if (text.length > 110) {
      const newString = [
        text.substring(0, 110),
        text.substring(110, text.length),
      ];

      return (
        <Task id={id}>
          {newString[0]}
          <ReadMoreActive
            style={{ display: isReadMoreActive === false && "none" }}
          >
            {newString[1]}
          </ReadMoreActive>
          <button
            onClick={() => {
              setIsReadMoreActive(!isReadMoreActive);
            }}
          >
            {isReadMoreActive ? "Ler menos" : "Ler mais..."}
          </button>
        </Task>
      );
    } else {
      return <Task>{text}</Task>;
    }
  };

  return (
    <TaskContainer style={{ display: isFinished === false && "none" }}>
      <TaskDescription>
        <ConcluedButton
          type="checkbox"
          onChange={() => {
            handleSetFinishTask(task, taskId, index);
          }}
          checked={isFinished === true && true}
        />

        <> {handleDescription(description)}</>
      </TaskDescription>

      <Container>
        <ActionContainer>
          <DivButtons>
            <ButtonRemove
              onClick={() => {
                remove(task, index);
              }}
            >
              <FaTrashAlt />
            </ButtonRemove>
          </DivButtons>
        </ActionContainer>
      </Container>
    </TaskContainer>
  );
};

export default TaskItem;
