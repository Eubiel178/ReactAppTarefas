import Contexts from "../../contexts/Contexts";

//hooks
import { useContext, useEffect, useState } from "react";

//styled-components
import {
  Container,
  TaskList,
  MainContainer,
  ContainerContent,
  FeedBack,
} from "./styles";

//libs
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Swal from "sweetalert2";

//page utills
import { add, remove, edit, get } from "../../utils/task";

//components
import Header from "./components/Header/index";
import Form from "./components/Form/index";
import SubTitle from "./components/SubTitle/index";
import TaskItem from "./components/TaskItem/index";

const Home = () => {
  const [toDoList, setToDoList] = useState([]);
  const [editId, setEditId] = useState("");
  const [parent] = useAutoAnimate();
  const { input, setInput, mode } = useContext(Contexts);

  const handleRenderingToDoList = async () => {
    const list = await get();

    const tasks = list.filter((element) => {
      if (element.shelf === 1 || element.shelf === 2) {
        return element;
      }
    });

    setToDoList(tasks);
  };

  useEffect(() => {
    handleRenderingToDoList();
  }, []);

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

    if (toDoList.length > 0 && editId) {
      await edit(
        {
          title: input,
          author: input,
          image_url: input,
          grade: input,
          categories: input,
          review: input,
          google_book_id: input,
        },
        editId
      );

      setEditId("");
    } else if (input) {
      await add({
        title: input,
        author: input,
        image_url: input,
        grade: input,
        categories: input,
        shelf: 1,
        review: input,
        google_book_id: input,
      });
    }

    setInput("");
    setEditId("");
    handleRenderingToDoList();
  };

  const handleEdit = (task) => {
    if (task.shelf === 1) {
      setInput(task.title);
      setEditId(task.id);
    } else {
      swalModal();
    }

    handleRenderingToDoList();
  };

  const handleRemove = async (task) => {
    if (task.shelf === 1) {
      const swalAlert = await swalModal("Deseja remover essa tarefa?");

      if (swalAlert.value === true) {
        if (task.shelf === 2) {
          await edit({ shelf: 3 }, task.id);

          handleRenderingToDoList();
        } else {
          await remove(task.id);

          handleRenderingToDoList();
        }
      }
    } else {
      await edit({ shelf: 3 }, task.id);

      handleRenderingToDoList();
    }
  };

  const handleSetFinishTask = async (task) => {
    if (task.shelf === 1) {
      const swalAlert = await swalModal(
        "Deseja mesmo marcar esta tarefa como concluida?"
      );

      if (swalAlert.value === true) {
        await edit({ shelf: 2 }, task.id);

        handleRenderingToDoList();
      }
    }
  };

  return (
    <Container background={mode ? " rgb(0, 0, 0)" : "#edf0f2"}>
      <ContainerContent background={mode ? "#121212" : "white"}>
        <Header />
        <MainContainer>
          <Form
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
                      task={element}
                      setFinish={handleSetFinishTask}
                      edited={handleEdit}
                      remove={handleRemove}
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
