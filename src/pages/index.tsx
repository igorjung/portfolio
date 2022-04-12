import type { NextPage } from 'next'
import styled from 'styled-components'
import Header from '../components/Header';
import ExperienceBar from '../components/ExperienceBar';
import History from '../components/History';
import Section from '../components/Section';

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 16px;

  width: 100%;
  height: 100%;

  margin-top: 32px;
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
        <GridColumn>
          <History />
        </GridColumn>
        <GridColumn>
          <Section title="My skills" content="skills"/>
        </GridColumn>
      </Content>
    </Container>
  )
}

export default Home
