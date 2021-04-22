import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  font-weight: lighter;

  color: ${({ theme }) => theme.colors.ayu.dark.fg};
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const ContainerWrapper = styled.div`
  width: 960px;
  max-width: 100%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
`;

const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const List = styled.ul`
  margin: 1em 0 0.5em;
  text-align: center;
`;

const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.ayu.dark.fg};
  display: inline;
`;

const Article = styled.a`
  display: inline-block;
  padding: 0.5em 1.5em;
`;

export default function Navbar(post) {
  const title = post.title || "Início";
  return (
    <div>
      <MainHeader>
        <ContainerWrapper>
          <Image src="/img/logo-light.svg" width="300" height="95" alt="Logo" />

          <nav class="main-nav">
            <List>
              <ListItem>
                <Article href="#">Início</Article>
              </ListItem>
              <ListItem>
                <Article href="#">Contato</Article>
              </ListItem>
              <ListItem>
                <Article href="#">Lorem Ipsum?</Article>
              </ListItem>
              <ListItem>
                <Article href="#">Não sei</Article>
              </ListItem>
            </List>
          </nav>
        </ContainerWrapper>
      </MainHeader>
      <Title>Orcololo's blog - {title}</Title>
    </div>
  );
}
