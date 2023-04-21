import { ButtonItem } from "./Styles";

import ReactLoading from "react-loading";


export const Button = ({ value, loading }) => {
  return (
    <div>
      {loading ? (
        <ButtonItem type="submit" background="#8b80f9">
          <ReactLoading type="spin" color="#ffffff" height="1em" width="1em" />
        </ButtonItem>
      ) : (
        <ButtonItem type="submit" background="transparent">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div> {value}</div>
        </ButtonItem>
      )}
    </div>
  );
};
