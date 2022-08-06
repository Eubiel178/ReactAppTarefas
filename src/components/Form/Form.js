import Styles from "./Form.module.css"
import { useState } from "react"
import FormItem from "./FormItem/FormItem.js"

function Form() {
    const[tarefa, setTarefa] = useState("")
    const[tarefas, setTarefas] = useState([])
    
    function adicionarTarefa(event) {
        event.preventDefault()
        if(tarefa.length > 0) {
            setTarefas((prevState) => {
                console.log(prevState)
                return [...prevState, {
                    value: tarefa, 
                    id: tarefas.length}]
            })
            setTarefa("")
        }
    }

    function removerTarefa(elementId) {
        const novaLista = tarefas.filter((tarefa) => {
            return elementId != tarefa.id
        }) 
        setTarefas(novaLista)
    }

    return (
        <section>
            <form onSubmit={adicionarTarefa} className={Styles.form}>
                <input onChange={(event) => setTarefa(event.target.value)}  className={Styles.inputTarefa} type="text" name="tarefa" placeholder="Descrição da tarefa" value={tarefa}/>
                <button className={Styles.botao} >Adicionar</button>
            </form>

            <h2 className={Styles.subTitle}>TAREFAS</h2>
            {tarefas.length == 0 &&(
                <p className={Styles.tarefaUndefined}>Nenhuma tarefa foi adicionada</p>
            )}

            <ul className={Styles.tarefaItem}>
                {tarefas &&(
                    tarefas.map((element, index) => (
                        <FormItem element={element.value} key={index} id={element.id} event={() => {removerTarefa(element.id)}}/>      
                    ))
                )}
            </ul>
            
        </section>
    )
}

export default Form
