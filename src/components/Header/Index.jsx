import { HeaderContents } from "./Styles";

export const Header = ({ title }) => {
  return (
    <header>
      <HeaderContents>
        <h1>{title}</h1>
      </HeaderContents>
    </header>
  );
};
