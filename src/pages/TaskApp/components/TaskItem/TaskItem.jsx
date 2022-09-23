import { FaTrashAlt } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { FcClock } from "react-icons/fc";

import {
  Task,
  Clock,
  Text,
  IconsContainer,
  ButtonEdit,
  ButtonRemove,
  ButtonClock,
} from "./Styles";

import { useStopwatch } from "react-timer-hook";
import { useState } from "react";
import { useEffect } from "react";

const TaskItem = ({ task, remove, id, edit, isFinished, setFinishTask }) => {
  const [clock, setClock] = useState(false);

  const { seconds, minutes, hours, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  return (
    <Task id={id} key={id} style={{ marginBottom: clock === true && "5em" }}>
      <Clock style={{ display: clock === true ? "initial" : "none" }}>
        <div style={{ fontSize: "20px" }}>
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>

        <button onClick={start}>Start</button>
        <button onClick={pause}> Pause</button>
        <button onClick={reset}>Reset</button>
      </Clock>
      <div>
        <input
          onClick={() => setFinishTask({ description: task, id: id })}
          type="checkbox"
          checked={isFinished}
        />
        <Text style={{ textDecoration: isFinished && "line-through" }}>
          {task}
        </Text>
      </div>
      <IconsContainer>
        <ButtonClock
          onClick={() => {
            setClock(!clock);
          }}
        >
          <FcClock />
        </ButtonClock>
        <ButtonEdit style={{ color: isFinished && " #e0d2d4" }} onClick={edit}>
          <BsPencil />
        </ButtonEdit>
        <ButtonRemove onClick={remove}>
          <FaTrashAlt />
        </ButtonRemove>
      </IconsContainer>
    </Task>
  );
};

export default TaskItem;
