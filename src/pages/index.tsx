import type { NextPage } from 'next'
import styled from 'styled-components'
import Header from '../components/Header'
import List from '../components/List'
import ProjectsInterface from '../interfaces/projects'
import data from '../data/index.json'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100vw;
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
  max-width: 800px;
  height: 100%;
`;

const Home: NextPage = ({ projects }: ProjectsInterface) => {
  return (
    <Container>
      <Header />
      <Content>
        <List title={"Skills"} list={data.skills}/>
        <List title={"History"} list={data.history}/>
        <List title={"Projects"} list={projects}/>
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
        title: item.name,
        url: item.html_url,
        svg: 'folder',
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
