import { useContext, useEffect, useState } from "react";
import { get } from "../../utils/backend/task";
import { PieChart, Pie, Cell } from "recharts";
import ReactLoading from "react-loading";

import Contexts from "../../contexts/Contexts";

import { ContainerPages, NavBar } from "../../components/Index";

import {
  Container,
  Content,
  UserProgress,
  User,
  Text,
  TextContainer,
  Loading,
} from "./Styles";
import { isLogged } from "../../utils/frontend/isLogged";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState({
    true: 0,
    false: 0,
  });
  const [data, setData] = useState([
    { name: "Group A", value: completed.true },
    { name: "Group B", value: completed.false },
  ]);
  const { mode, userJson, setUserJson, setAuth } = useContext(Contexts);

  const navigate = useNavigate();

  const lighColors = ["#90ee90", "#ffa500"];
  const darkColors = ["#30503a", "#BE5504"];
  const colors = mode ? darkColors : lighColors;

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="red"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {/* {`${(percent * 100).toFixed(0)}%`} */}
      </text>
    );
  };

  useEffect(() => {
    (async () => {
      const list = await get();
      let isConclued = 0;
      let isNotConclued = 0;

      list.forEach((element) => {
        if (element.isFinished) {
          isConclued = isConclued + 1;
        } else {
          isNotConclued = isNotConclued + 1;
        }
      });

      setData(
        isConclued === 0 && isNotConclued === 0
          ? [
              { name: "Group A", value: 50 },
              { name: "Group B", value: 50 },
            ]
          : [
              { name: "Group A", value: isConclued },
              { name: "Group B", value: isNotConclued },
            ]
      );

      setLoading(false);
      setCompleted({ true: isConclued, false: isNotConclued });
      isLogged(setUserJson, setAuth, navigate);
    })();

    // eslint-disable-next-line
  }, []);
  return (
    <>
      {loading ? (
        <Loading>
          <ReactLoading type="spin" color={"red"} height="5em" width="5em" />
        </Loading>
      ) : (
        <ContainerPages>
          <NavBar />
          <Container>
            <Content>
              <UserProgress>
                <PieChart width={400} height={400}>
                  <Pie
                    data={data}
                    cx={""}
                    cy={""}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={85}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={colors[index % colors.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
                <User>
                  <p>{userJson.name}</p>
                </User>
              </UserProgress>

              <TextContainer>
                <Link to="/home/list-checked">
                  <Text color={colors[0]}>
                    <span></span>Tarefas concluidas: {completed.true}
                  </Text>
                </Link>

                <Link to="/home/list">
                  <Text color={colors[1]}>
                    <span></span>Tarefas restantes: {completed.false}
                  </Text>
                </Link>

                <Text>
                  <span></span>Total: {completed.true + completed.false}
                </Text>
              </TextContainer>
            </Content>
          </Container>
        </ContainerPages>
      )}
    </>
  );
};

export default Home;
