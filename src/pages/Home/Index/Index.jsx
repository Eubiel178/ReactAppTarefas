import Contexts from "../../../contexts/Contexts";

//hooks
import { useContext, useEffect, useState } from "react";

//styled-components
import {
  Container,
  TaskList,
  MainContainer,
  ContainerContent,
  FeedBack,
} from "./Styles";

//libs
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Swal from "sweetalert2";

//page utills
import { add, remove, edit, get } from "../../../utils/task";

//components
import Header from "../components/Header/Index";
import EditForm from "../components/Edit/Index";
import SubTitle from "../components/SubTitle/Index";
import TaskItem from "../components/TaskItem/Index";
import { getLoggedUser } from "../../../utils/user";

const Home = () => {
  const [toDoList, setToDoList] = useState([]);
  const [editId, setEditId] = useState("");
  const [loading, setLoading] = useState(false);
  const [parent] = useAutoAnimate();
  const { input, setInput, mode } = useContext(Contexts);

  const handleRenderingToDoList = async () => {
    const list = await get();
    setToDoList(list);
  };

  const swalModal = (title) => {
    if (title) {
      return Swal.fire({
        title: title,
        icon: "question",
        iconHtml: "?",
        confirmButtonText: "Sim",
        cancelButtonText: "Não",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        showCancelButton: true,
        showCloseButton: true,

        preConfirm: (value) => {
          return value;
        },
      });
    } else {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tarefas concluidas não podem ser editada!",
      });
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const { _id } = getLoggedUser();

    if (loading === false && toDoList.length > 0 && editId) {
      setLoading(true);

      await edit({ description: input }, editId);
    } else if (loading === false && input) {
      setLoading(true);

      await add({
        description: input,
        isFinished: false,
        userID: _id,
      });
    }

    setLoading(false);
    setInput("");
    setEditId("");
    handleRenderingToDoList();
  };

  const handleEdit = (task) => {
    if (task.isFinished === false) {
      setInput(task.description);
      setEditId(task._id);
    } else {
      swalModal();
    }
  };

  const handleRemove = async (task) => {
    if (task.isFinished === false) {
      const { value } = await swalModal("Deseja remover essa tarefa?");

      if (value === true) {
        await remove(task._id);
      }
    } else {
      await remove(task._id);
    }

    handleRenderingToDoList();
  };

  const handleSetFinishTask = async (task) => {
    if (task.isFinished === false) {
      const swalAlert = await swalModal(
        "Deseja mesmo marcar esta tarefa como concluida?"
      );

      if (swalAlert.value === true) {
        await edit({ isFinished: true }, task._id);

        handleRenderingToDoList();
      }
    }
  };

  useEffect(() => {
    handleRenderingToDoList();
  }, []);

  return (
    <Container background={mode ? " rgb(0, 0, 0)" : "#edf0f2"}>
      <ContainerContent background={mode ? "#121212" : "white"}>
        <Header />
        <MainContainer>
          <EditForm
            AddTask={handleOnSubmit}
            input={input}
            setInput={setInput}
            isEdit={editId}
          />
          <div>
            <SubTitle
              toDoList={toDoList}
              setToDoList={setToDoList}
              renderList={handleRenderingToDoList}
            />

            <TaskList color={mode ? "white" : "black"} ref={parent}>
              {toDoList.length === 0 ? (
                <FeedBack>Nenhuma tarefa foi adicionada</FeedBack>
              ) : (
                toDoList.map((element) => {
                  return (
                    <TaskItem
                      description={element.description}
                      task={element}
                      setFinish={handleSetFinishTask}
                      edited={handleEdit}
                      remove={handleRemove}
                      isFinished={element.isFinished}
                      id={element._id}
                    />
                  );
                })
              )}
            </TaskList>
          </div>
        </MainContainer>
      </ContainerContent>
    </Container>
  );
};

export default Home;