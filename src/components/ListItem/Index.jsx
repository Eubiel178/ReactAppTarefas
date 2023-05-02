import { useAutoAnimate } from "@formkit/auto-animate/react";


import { List } from "./Styles";

export const ListItem = ({ children }) => {
  const [animationParent] = useAutoAnimate();

  return <List ref={animationParent}>{children}</List>;
};
