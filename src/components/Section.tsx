import type { NextComponentType } from 'next'
import { useState, useMemo } from 'react'
import styled from 'styled-components'
import data from '../data/index.json'
import SectionInterface from '../interfaces/section'
import Card from './Card'
import Trophies from './Trophies'

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background: #fff;
  border-radius: 4px;

  padding: 16px;
  margin-bottom: 16px;
  height: 600px;
  width: 100%;

  overflow-y: auto;

  h2 {
    font-size: 22px;
    font-weight: 300;
    margin-bottom: 16px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 100%;
  }
`;

const Section: NextComponentType = ({
  title,
  content
}: SectionInterface) => {
  const [ showMore, setShowMore ] = useState(false);
  const [ body, setBody ] = useState([]);

  const hiddenCards = useMemo(() => {
    return data[content].length > 4
  }, [body])

  useMemo(() => {
    if(showMore) {
      setBody(data[content])
    } else {
      setBody(data[content].slice(0, 4))

    }
  }, [showMore])

  return (
    <SectionContainer>
      <h2>{title}</h2>
      {content === 'skills' && <Trophies data={data[content]} />}
      <ul>
        {body.map((item) => (
          <Card key={item.title} {...item}  />
        ))}
        {hiddenCards &&
          <li>
            <button type="button" onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Ver menos...' : 'Ver mais...'}
            </button>
          </li>
        }
      </ul>
    </SectionContainer>
  )
}

export default Section
