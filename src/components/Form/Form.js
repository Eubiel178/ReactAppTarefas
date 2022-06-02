import Styles from "./Form.module.css"
import {useState} from "react"

function Form() {
    const[tarefa, setTarefa] = useState(String)
    const[tarefas, setTarefas] = useState([])

    function Tarefa(event) {
        setTarefa(event.target.value)
    }

    function adicionarTarefa() {
        setTarefas((prevState) => {
            return [...prevState, tarefa]
        })
    }

    function removerTarefa(element) {
        const novaLista = tarefas.filter((tarefa, index, array) => {
            return element != tarefa
        }) 
        setTarefas(novaLista)
    }

    console.log(tarefas)
    return (
        <>
            <form className={Styles.form}>
                <input onChange={Tarefa} className={Styles.inputTarefa} type="text" name="tarefa" placeholder="Descrição da tarefa"/>
                <button type="button" onClick={adicionarTarefa} className={Styles.botao}>Adicionar</button>
            </form>

            <h2 className={Styles.subTitle}>TAREFAS</h2>
            <ul className={Styles.tarefaItem}>
                {tarefas &&(
                    tarefas.map((element, index) => (
                        <li key={index} className={Styles.listItem}> {element} <input type="checkbox"/><button onClick={() => {
                        removerTarefa(element)
                        }}
                        className={Styles.buttonRemove}>Remover</button> </li>
                        ))
                    )}
            </ul>
        </>
        )
}

export default Form