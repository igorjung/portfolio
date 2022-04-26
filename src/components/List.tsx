import type { NextComponentType } from 'next'
import styled from 'styled-components'

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

const List: NextComponentType = ({ child } : ListInterface) => {
  return (
    <ListContainer>
      {child}
    </ListContainer>
  )
}

export default List
