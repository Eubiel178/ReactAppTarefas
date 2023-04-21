import Contexts from "../../../contexts/Contexts";

//hooks
import { useContext, useState, useEffect } from "react";

//styled-components
import {
  ModalContainer,
  Loading,
  Modal,
  ButtonUrgency,
  UrgencyListColors,
  TaskList,
  MainContainer,
  FeedBack,
  HeaderModal,
} from "./Styles";

//libs
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { v4 as uuidv4 } from "uuid";
import { IoClose } from "react-icons/io5";
import ReactLoading from "react-loading";

//page utills
import { add, remove, edit, get } from "../../../utils/task";

//components
import { ContainerPages, Title, NavBar } from "../../../components/Index";
import { EditForm, SubTitle, TaskItem } from "../components/Index";
import { swalModal } from "../../../utils/swalModal";
import { useNavigate } from "react-router-dom";
import { isLogged } from "../../../utils/isLogged";

const List = () => {
  const [editId, setEditId] = useState("");
  const [loading, setLoading] = useState(false);
  const [animationParent] = useAutoAnimate();
  const [toDoList, setToDoList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const colors = ["#FF0000", "#ffa500", "#00ff80"];
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

  const handleRemove = async (task, index) => {
    const newArray = [...toDoList];

    if (task._id === editId) {
      const { value } = await swalModal(
        "Essa tarefa esta sendo editada no momento! Deseja remover essa tarefa?"
      );

      if (value === true) {
        setEditId("");
        await remove(task._id);

        newArray.splice(index, 1);
        setToDoList(newArray);
      }
    } else {
      const { value } = await swalModal("Deseja remover essa tarefa?");

      if (value === true) {
        await remove(task._id);
        newArray.splice(index, 1);
        setToDoList(newArray);
      }
    }
  };

  const handleSetFinishTask = async (task, taskId, index) => {
    if (editId !== "") {
      const { value } = await swalModal(
        "Essa tarefa esta sendo editada. Deseja cancelar edição e finalizar a tarefa?"
      );

      if (value === true) {
        setEditId("");
        setInput("");

        const newArray = [...toDoList];

        await edit({ isFinished: true }, taskId);

        newArray[index].isFinished = true;

        setToDoList(newArray);
      }
    } else if (task.isFinished === false) {
      const { value } = await swalModal(
        "Deseja mesmo marcar esta tarefa como concluida?"
      );

      if (value === true) {
        const newArray = [...toDoList];

        await edit({ isFinished: true, urgency: "#90ee90" }, taskId);

        newArray[index].isFinished = true;

        setToDoList(newArray);
      }
    }
  };

  const handlePositionTask = async (pos, task, index) => {
    if (pos === "up" || pos === "bottom") {
      const newArray = [...toDoList];

      if (pos === "up" && index > 0) {
        newArray.splice(index, 1);
        newArray.splice(index - 1, 0, task);

        newArray.forEach(async (element, index) => {
          await edit({ ...element, index: index - 1 }, element._id);
        });

        setToDoList(newArray);
      }

      if (pos === "bottom" && index < toDoList.length) {
        newArray.splice(index, 1);
        newArray.splice(index + 1, 0, task);

        newArray.forEach(async (element, index) => {
          await edit({ ...element, index: index + 1 }, element._id);

          setToDoList(newArray);
        });
      }
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
      <ModalContainer style={{ display: isOpenModal === false && "none" }}>
        {loading ? (
          <Loading>
            <ReactLoading type="spin" color="red" height="5em" width="5em" />
          </Loading>
        ) : (
          <Modal>
            <HeaderModal>
              <h3>Classificar tarefa</h3>

              <button onClick={() => setIsOpenModal(false)}>
                <IoClose style={{ fontSize: "25px" }} />
              </button>
            </HeaderModal>
            <UrgencyListColors>
              <div>
                <ButtonUrgency
                  color={colors[0]}
                  onClick={() => {
                    handleOnSubmit(colors[0]);
                  }}
                >
                  <div></div> <span>Urgente</span>
                </ButtonUrgency>
              </div>

              <div>
                <ButtonUrgency
                  color={colors[1]}
                  onClick={() => {
                    handleOnSubmit(colors[1]);
                  }}
                >
                  <div></div> <span>Pouco urgente</span>
                </ButtonUrgency>
              </div>

              <div>
                <ButtonUrgency
                  color={colors[2]}
                  onClick={() => {
                    handleOnSubmit(colors[2]);
                  }}
                >
                  <div></div> <span>Não urgente ou finalizada</span>
                </ButtonUrgency>
              </div>
            </UrgencyListColors>
          </Modal>
        )}
      </ModalContainer>

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

        <TaskList ref={animationParent}>
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
                  handleFinish={handleSetFinishTask}
                  edited={handleEdit}
                  cancelEdited={handleCancelEdit}
                  remove={handleRemove}
                  isFinished={element.isFinished}
                  id={element._id}
                  position={handlePositionTask}
                  editId={editId}
                />
              );
            })
          )}
        </TaskList>
      </MainContainer>
    </ContainerPages>
  );
};

export default List;
