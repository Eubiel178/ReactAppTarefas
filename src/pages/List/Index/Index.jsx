import Contexts from "../../../contexts/Contexts";

//hooks
import { useContext, useState, useEffect } from "react";

//styled-components
import { MainContainer, FeedBack } from "./Styles";

//libs

import { v4 as uuidv4 } from "uuid";

//page utills
import { add, edit, get } from "../../../utils/backend/task";

//components
import {
  ContainerPages,
  Title,
  NavBar,
  ModalUrgencyTask,
  ListItem,
} from "../../../components/Index";
import { EditForm, SubTitle, TaskItem } from "../components/Index";
import { swalModal } from "../../../utils/frontend/swalModal";
import { useNavigate } from "react-router-dom";
import { isLogged } from "../../../utils/frontend/isLogged";

const List = () => {
  const [editId, setEditId] = useState("");
  const [loading, setLoading] = useState(false);
  const [toDoList, setToDoList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const navigate = useNavigate();

  const { input, setInput, userJson, setUserJson, setAuth } =
    useContext(Contexts);

  const handleOnSubmit = async (color) => {
    const _id = userJson._id;

    if (loading === false) {
      setLoading(true);

      if (editId) {
        await edit({ description: input, urgency: color }, editId);

        const indexTaskEdit = toDoList.findIndex((element) => {
          return element._id === editId;
        });

        toDoList[indexTaskEdit].description = input;
        toDoList[indexTaskEdit].urgency = color;
      } else if (input) {
        const task = {
          description: input,
          isFinished: false,
          userID: _id,
          _id: uuidv4(),
          index: toDoList.length,
          key: uuidv4(),
          urgency: color,
        };

        await add(task);

        setToDoList([task, ...toDoList]);
      }

      setInput("");
      setEditId("");
      setIsOpenModal(false);
      setLoading(false);
    }
  };

  const handleEdit = (task) => {
    if (task.isFinished === false) {
      setInput(task.description);
      setEditId(task._id);
    } else {
      swalModal();
    }
  };

  const handleCancelEdit = async () => {
    const { value } = await swalModal(
      "Essa tarefa esta sendo editada. Deseja cancelar edição?"
    );

    if (value === true) {
      setEditId("");
      setInput("");
    }
  };

  useEffect(() => {
    (async () => {
      const list = await get();

      const unCheckedList = list.filter((element) => {
        return element.isFinished === false;
      });

      unCheckedList.sort((currentElement, nextElement) => {
        return parseInt(nextElement.index) - parseInt(currentElement.index);
      });

      setToDoList(unCheckedList);
      isLogged(setUserJson, setAuth, navigate);
    })();

    // eslint-disable-next-line
  }, []);
  return (
    <ContainerPages>
      <ModalUrgencyTask
        loading={loading}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        action={handleOnSubmit}
      />

      <NavBar />
      <MainContainer>
        <Title text="ADICIONAR TAREFAS" />

        <EditForm
          setModalState={setIsOpenModal}
          setInput={setInput}
          isEdit={editId}
          load={loading}
        />

        <SubTitle toDoList={toDoList} setToDoList={setToDoList} />

        <ListItem>
          {toDoList.length === 0 ? (
            <FeedBack>Nenhuma tarefa foi adicionada</FeedBack>
          ) : (
            toDoList.map((element, index, array) => {
              return (
                <TaskItem
                  key={element.key}
                  taskId={element._id}
                  array={array}
                  index={index}
                  description={element.description}
                  task={element}
                  edited={handleEdit}
                  cancelEdited={handleCancelEdit}
                  isFinished={element.isFinished}
                  id={element._id}
                  editId={editId}
                  setToDoList={setToDoList}
                  setInput={input}
                />
              );
            })
          )}
        </ListItem>
      </MainContainer>
    </ContainerPages>
  );
};

export default List;
