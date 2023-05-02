import ReactLoading from "react-loading";
import { Loading } from "./Styles";
import { useEffect } from "react";
import { getSaveMode } from "../../utils/frontend/mode";
import { useContext } from "react";
import Contexts from "../../contexts/Contexts";
import { useState } from "react";

export const LoadingPage = () => {
  const [loading, setLoading] = useState(true);
  const { setMode } = useContext(Contexts);

  useEffect(() => {
    const getMode = getSaveMode();

    if (getMode === "true") {
      setMode(true);
    } else {
      setMode(false);
    }

    setLoading(false);
  }, []);

  return (
    <Loading>
      {loading === false && (
        <ReactLoading type="spin" color={"red"} height="5em" width="5em" />
      )}
    </Loading>
  );
};
