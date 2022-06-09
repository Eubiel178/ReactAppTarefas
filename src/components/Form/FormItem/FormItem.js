import { FaTrashAlt } from "react-icons/fa"
import Styles from "../Form.module.css"

function FormItem({element, event, id, key}) {
    return (
        <>
            <li id={id} key={key} className={Styles.listItem}>
                <input type="checkbox"/><span className={Styles.textWrap}>{element}</span><button onClick={event}className={Styles.buttonRemove}><FaTrashAlt/></button>
            </li>
        </>
    )
}

export default FormItem