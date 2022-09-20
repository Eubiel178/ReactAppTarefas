import { FaTrashAlt } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";

import { Task, Text, IconsContainer, ButtonEdit, ButtonRemove } from "./Styles";
import { useState } from "react";

const TaskItem = ({ task, remove, id, edit, completed }) => {
  return (
    <Task id={id} key={id}>
      <input onClick={completed} type="checkbox" />
      <Text>{task}</Text>
      <IconsContainer>
        <ButtonEdit onClick={edit}>
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
