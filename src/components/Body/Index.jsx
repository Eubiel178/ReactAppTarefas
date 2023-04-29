import {
  Container,
  Leaves,
  Set,
  ContainerContent,
  Trees,
  Girl,
} from "./Styles";

//images
import girl from "../../images/girl.png";
import leaf_01 from "../../images/leaf_01.png";
import leaf_02 from "../../images/leaf_02.png";
import leaf_03 from "../../images/leaf_03.png";
import leaf_04 from "../../images/leaf_04.png";
import trees from "../../images/trees.png";

export const Body = ({ children }) => {
  return (
    <Container>
      <Leaves>
        <Set>
          <div>
            <img src={leaf_01} alt="Leaf" />
          </div>

          <div>
            <img src={leaf_02} alt="Leaf" />
          </div>

          <div>
            <img src={leaf_03} alt="Leaf" />
          </div>

          <div>
            <img src={leaf_04} alt="Leaf" />
          </div>

          <div>
            <img src={leaf_01} alt="Leaf" />
          </div>

          <div>
            <img src={leaf_02} alt="Leaf" />
          </div>

          <div>
            <img src={leaf_03} alt="Leaf" />
          </div>

          <div>
            <img src={leaf_04} alt="Leaf" />
          </div>
        </Set>
      </Leaves>

      <Girl src={girl} />
      <Trees src={trees} />

      <ContainerContent>{children}</ContainerContent>
    </Container>
  );
};
