import type { NextComponentType } from 'next'
import { useState, useMemo } from 'react'
import styled from 'styled-components'
import Title from './Title';
import Card from './Card';
import HiddeButton from './HiddeButton';

import ListInterface from '../interfaces/list'

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;

  width: 100%;
  margin-bottom: 64px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const List: NextComponentType = ({ title, list } : ListInterface) => {
  const [ showMore, setShowMore ] = useState(false);
  const [ body, setBody ] = useState([]);

  const hiddenCards = useMemo(() => {
    return list.length > 3
  }, [body])

  useMemo(() => {
    if(showMore) {
      setBody(list)
    } else {
      setBody(list.slice(0, 3))

    }
  }, [showMore])

  return (
    <>
      <Title text={title} />
      <ListContainer>
        {body.map((item) => (
          <Card {...item}/>
        ))}
        {hiddenCards && (
          <HiddeButton
            showMore={showMore}
            onShowMore={() => setShowMore(!showMore)}
          />
        )}
      </ListContainer>
    </>
  )
}

export default List
