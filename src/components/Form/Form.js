import Styles from "./Form.module.css"
import { useState } from "react"
import { FaTrashAlt } from "react-icons/fa"

function Form() {
    const[tarefa, setTarefa] = useState("")
    const[tarefas, setTarefas] = useState([])
    
    function adicionarTarefa() {
        if(tarefa.length > 0) {
            setTarefas((prevState) => {
                return [...prevState, tarefa]
            })
            setTarefa("")
        }
    }

    function removerTarefa(element) {
        const novaLista = tarefas.filter((tarefa, index, array) => {
            return element != tarefa
        }) 
        setTarefas(novaLista)
    }

    function EventKey(event) {
        if(event.key == "Enter") {
            event.preventDefault()
            adicionarTarefa()
        }
    }

    return (
        <>
            <form className={Styles.form}>
                <input onChange={(event) => setTarefa(event.target.value)} onKeyPress={EventKey} className={Styles.inputTarefa} type="text" name="tarefa" placeholder="Descrição da tarefa" value={tarefa}/>
                <button type="button" onClick={adicionarTarefa} className={Styles.botao} >Adicionar</button>
            </form>

            <h2 className={Styles.subTitle}>TAREFAS</h2>
            {tarefas.length ==0 &&(
                <p className={Styles.tarefaUndefined}>Nenhuma tarefa foi adicionada</p>
            )}

            <ul className={Styles.tarefaItem}>
                {tarefas &&(
                    tarefas.map((element, index) => (
                        <li key={index} className={Styles.listItem}><input type="checkbox"/><span className={Styles.textWrap}>{element}</span><button onClick={() => {
                        removerTarefa(element)
                        }} className={Styles.buttonRemove}><FaTrashAlt/></button></li>
                    ))
                )}
            </ul>
            
        </>
        )
}

export default Form