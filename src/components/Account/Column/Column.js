import { AsideContent } from "./Styles";
import { Link } from "react-router-dom";

function Column({ primaryText, secondText, register, text, to }) {
  return (
    <AsideContent>
      <aside>
        <p>
          <strong>
            {primaryText} <br />
            <span>{secondText}</span>
          </strong>
        </p>

        <div>
          <p>
            {text}
            <Link to={to}>{register}</Link>
          </p>
        </div>
      </aside>
    </AsideContent>
  );
}

export default Column;
