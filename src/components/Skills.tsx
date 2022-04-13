import type { NextComponentType } from 'next'
import { useState, useMemo } from 'react'
import styled from 'styled-components'
import { Visibility, VisibilityOff } from '@material-ui/icons';
import data from '../data/index.json'
import Card from './Card'

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;

  width: 100%;
  margin-bottom: 64px;
`;
const ShowAllButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  border: 1px solid rgba(0,0,0, 0.06);
  background-color: ${({ theme }) => theme.colors.secondary};

  width: 100%;
  height: 100%;
  padding: 24px 16px;

  cursor: pointer;

  span {
    font-size: 18px;
    font-weight: 600;
    margin: 16px 0;
    color: ${({ theme }) => theme.colors.background};
  }

  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.background};
  }
`;

const Skills: NextComponentType = () => {
  const [ showMore, setShowMore ] = useState(false);
  const [ body, setBody ] = useState([]);

  const hiddenCards = useMemo(() => {
    return data.skills.length > 3
  }, [body])

  useMemo(() => {
    if(showMore) {
      setBody(data.skills)
    } else {
      setBody(data.skills.slice(0, 3))

    }
  }, [showMore])

  return (
    <SkillsContainer>
      {body.map((item) => (
        <Card key={item.title} {...item}  />
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
    </SkillsContainer>
  )
}

export default Skills
