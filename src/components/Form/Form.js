import Styles from "./Form.module.css"
import { useState } from "react"

function Form() {
    const[tarefa, setTarefa] = useState()
    const[tarefas, setTarefas] = useState([])

    function Tarefa(event) {
        setTarefa(event.target.value)
    }

    function adicionarTarefa() {
        setTarefas((prevState) => {
            return [...prevState, tarefa]
        })
        setTarefa("")
    }

    function removerTarefa(element) {
        const novaLista = tarefas.filter((tarefa, index) => {
            return element != tarefa
        }) 
        setTarefas(novaLista)
    }

    return (
        <>
            <form className={Styles.form}>
                <input value={tarefa} onChange={Tarefa} className={Styles.inputTarefa} type="text" name="tarefa" placeholder="Descrição da tarefa"/>
                <button className={Styles.botao} type="button" onClick={adicionarTarefa}>Adicionar Tarefa</button>
            </form>

            <h2 className={Styles.subTitle}>TAREFAS</h2>
            <section className={Styles.tarefaItem}>
            {tarefas &&(
                    tarefas.map((element, index) => (
                        <p key={index} className={Styles.listItem}><input type="checkbox"/> {element} <button className={Styles.buttonRemove} onClick={() => {removerTarefa(element)}}>Remover</button> </p>
                        ))
                    )}
            </section>
        </>
    )
}

export default Form