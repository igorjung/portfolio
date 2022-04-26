import type { NextPage } from 'next'
import styled from 'styled-components'
import Header from '../components/Header';
import History from '../components/History';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ProjectsInterface from '../interfaces/projects';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  max-width: 1200px;
  height: 100%;

  padding: 32px;

  @media screen and (max-width: 767px) {
    padding: 32px 0;
  }

`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 700px;
  height: 100%;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0 32px;
  }

`;

const Home: NextPage = ({ projects }: ProjectsInterface) => {
  return (
    <Container>
      <Header />
      <Content>
        <Skills />
        <History />
        <Projects projects={projects} />
      </Content>
    </Container>
  )
}

async function fetchRepositories() {
  const req = await fetch(`https://api.github.com/users/igorjung/repos`);
  return await req.json();
}

export const getStaticProps = async () => {
  const repos = await fetchRepositories()
  let projects = []
  repos.forEach((item) => {
    if(!item.private) {
      projects.push({
        id: item.id,
        name: item.name,
        url: item.html_url,
      })
    }
  })

  return {
    revalidate: 300,
    props: {
      projects
    },
  };
};

export default Home
