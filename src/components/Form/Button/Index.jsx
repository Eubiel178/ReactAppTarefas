import { ButtonItem } from "./Styles";

import ReactLoading from "react-loading";

export const Button = ({ value, loading }) => {
  return (
    <ButtonItem type="submit">
      {loading ? (
        <ReactLoading type="spin" color="#ffffff" height="1em" width="1em" />
      ) : (
        <>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div>{value}</div>
        </>
      )}
    </ButtonItem>
  );
};
