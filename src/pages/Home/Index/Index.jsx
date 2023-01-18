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
  const [completedTask, setCompletedTask] = useState([]);
  const [parent] = useAutoAnimate();
  const { input, setInput, mode } = useContext(Contexts);

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

  const handleRenderingToDoList = async () => {
    const list = await get();
    setToDoList(list);

    return list;
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const { _id } = getLoggedUser();

    if (loading === false) {
      setLoading(true);

      if (toDoList.length > 0 && editId) {
        await edit({ description: input }, editId);
      } else if (input) {
        await add({
          description: input,
          isFinished: false,
          userID: _id,
        });
      }

      setInput("");
      setEditId("");
      handleRenderingToDoList();
      setLoading(false);
    }
  };

  const handleEdit = (task) => {
    if (task.isFinished === false) {
      setInput(task.description) && setEditId(task._id);
    } else {
      swalModal();
    }
  };

  const handleCompletedTask = (data) => {
    const isFinished = data.filter((element) => {
      return element.isFinished === true;
    });

    if (isFinished.length > 0) {
      setCompletedTask(isFinished.length);
    } else {
      setCompletedTask([].length);
    }
  };

  const handleRemove = async (task) => {
    if (task.isFinished === false) {
      const { value } = await swalModal("Deseja remover essa tarefa?");

      if (value === true) {
        await remove(task._id);

        handleRenderingToDoList();
      }
    } else {
      await remove(task._id);
      const list = await handleRenderingToDoList();

      handleCompletedTask(list);
    }
  };

  const handleSetFinishTask = async (task) => {
    if (task.isFinished === false) {
      const { value } = await swalModal(
        "Deseja mesmo marcar esta tarefa como concluida?"
      );

      if (value === true) {
        await edit({ isFinished: true }, task._id);

        const list = await handleRenderingToDoList();

        handleCompletedTask(list);
      }
    }
  };

  useEffect(() => {
    (async () => {
      const list = await handleRenderingToDoList();

      handleCompletedTask(list);
    })();
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
              completedTask={completedTask}
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
