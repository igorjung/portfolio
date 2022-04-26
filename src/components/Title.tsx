import type { NextComponentType } from 'next'
import styled from 'styled-components'

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  margin-bottom: 16px;

  hr {
    width: 100%;
    height: 4px;
    background-color: #333;

    margin-left: 8px;
  }
`;

const Title: NextComponentType = ({ text } : { text: string }) => {
  return (
    <TitleContainer>
      <h2>{text}</h2>
      <hr />
    </TitleContainer>
  )
}

export default Title
