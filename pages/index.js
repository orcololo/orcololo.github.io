import styled from "styled-components";
import Navbar from "../components/Navbar";

const Title = styled.h1`
  font-size: 72px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.ayu.dark.fg};
`;

const Body = styled.body`
  font-family: "Roboto", sans-serif;
`;
const Background = styled.body`
  background-color: ${({ theme }) => theme.colors.ayu.dark.bg};
  height: 100%;
  width: 100%;
`;

export default function Home() {
  return (
    <div>
      <Background>
        <Navbar />
      </Background>
    </div>
  );
}
