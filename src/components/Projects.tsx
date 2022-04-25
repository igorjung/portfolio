import type { NextComponentType } from 'next'
import { useState, useMemo } from 'react'
import styled from 'styled-components'
import { Folder, Visibility, VisibilityOff } from '@material-ui/icons';
import Title from './Title';
import ProjectsInterface from '../interfaces/projects';

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;

  width: 100%;
  margin-bottom: 64px;
`;
const ProjectItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  border: 2px solid rgba(0,0,0, 0.1);

  width: 100%;
  height: 100%;
  max-height: 190px;
  padding: 24px 16px;

  text-decoration: none;
  cursor: pointer;

  span {
    font-size: 18px;
    font-weight: 600;
    margin: 16px 0;
    color: ${({ theme }) => theme.colors.text};
  }
  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.text};
  }
`;
const ShowAllButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  border: 2px solid rgba(0,0,0, 0.1);

  width: 100%;
  height: 100%;
  padding: 24px 16px;

  cursor: pointer;

  span {
    font-size: 18px;
    font-weight: 600;
    margin: 16px 0;
    color: ${({ theme }) => theme.colors.text};
  }

  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Projects: NextComponentType = ({ projects }: ProjectsInterface) => {
  const [ showMore, setShowMore ] = useState(false);
  const [ body, setBody ] = useState([]);

  const hiddenCards = useMemo(() => {
    return projects.length > 3
  }, [body])

  useMemo(() => {
    if(showMore) {
      setBody(projects)
    } else {
      setBody(projects.slice(0, 3))

    }
  }, [showMore])

  return (
    <>
      <Title text={'Projects'} />
      <ProjectsContainer>
        {body.map(item => (
          <li key={item.id} >
            <ProjectItem href={item.url} target="blank">
              <Folder />
              <span>{item.name}</span>
            </ProjectItem>
          </li>
        ))}
        {hiddenCards &&
          <li>
            <ShowAllButton type="button" onClick={() => setShowMore(!showMore)}>
              {!showMore ? (
                <>
                  <Visibility />
                  <span>Show All</span>
                </>
              ) : (
                <>
                  <VisibilityOff />
                  <span>Hidde</span>
                </>
              )}
            </ShowAllButton>
          </li>
        }
      </ProjectsContainer>
    </>
  )
}

export default Projects
