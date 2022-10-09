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
import { add, remove, edit, get, concluded } from "../../utils/task";
//components
import Header from "./components/Header/index";
import Form from "./components/Form/index";
import SubTitle from "./components/SubTitle/index";
import TaskItem from "./components/TaskItem/index";

const TaskApp = () => {
  const [toDoList, setToDoList] = useState([]);
  const [editId, setEditId] = useState("");
  const [parent] = useAutoAnimate();
  const { input, setInput, mode } = useContext(Contexts);

  const handleToDoList = async () => {
    const response = await get();

    setToDoList(response.data);
  };

  useEffect(() => {
    handleToDoList();
  }, []);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (editId) {
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
        shelf: 1,
        image_url: input,
        grade: input,
        categories: input,
        review: input,
        google_book_id: input,
      });
    }

    setInput("");
    handleToDoList();
  };

  const handleEdit = (task) => {
    if (task.shelf === 1) {
      setInput(task.title);
      setEditId(task.id);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tarefas concluidas não podem ser editada!",
      });
    }

    handleToDoList();
  };

  const handleRemove = async (task) => {
    if (task.shelf === 1) {
      await Swal.fire({
        title: "Deseja remover essa tarefa?",
        icon: "question",
        iconHtml: "?",
        confirmButtonText: "Sim",
        cancelButtonText: "Não",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        showCancelButton: true,
        showCloseButton: true,

        preConfirm: async (value) => {
          if (value === true) {
            await remove(task.id);
          }
        },
      });
    } else {
      await remove(task.id);
    }

    handleToDoList();
  };

  const handleSetFinishTask = async (task) => {
    if (task.shelf === 1) {
      await Swal.fire({
        title: "Deseja mesmo marcar esta tarefa como concluida?",
        icon: "question",
        iconHtml: "?",
        confirmButtonText: "Sim",
        cancelButtonText: "Não",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        showCancelButton: true,
        showCloseButton: true,

        preConfirm: async (value) => {
          if (value === true) {
            await edit({ shelf: 2 }, task.id);
            concluded(task);
          }
        },
      });

      handleToDoList();
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
              renderList={handleToDoList}
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

export default TaskApp;
