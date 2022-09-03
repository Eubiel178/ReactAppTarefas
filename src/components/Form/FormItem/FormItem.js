import { FaTrashAlt } from "react-icons/fa";
import Styles from "./FormItem.module.css";

function FormItem({ element, event, id, key }) {
  return (
    <>
      <p id={id} key={key}>
        <input type="checkbox" />
        <span className={Styles.textWrap}>{element}</span>
        <button onClick={event} className={Styles.buttonRemove}>
          <FaTrashAlt />
        </button>
      </p>
    </>
  );
}

export default FormItem;
