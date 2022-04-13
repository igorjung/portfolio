import type { NextPage } from 'next'
import styled from 'styled-components'
import Header from '../components/Header';
import History from '../components/History';
import Skills from '../components/Skills';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  max-width: 1200px;
  height: 100%;

  padding: 32px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  height: 100%;
`;
const GridColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Skills />
        <History />
      </Content>
    </Container>
  )
}

export default Home
