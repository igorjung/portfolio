import styled from 'styled-components'

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  margin-bottom: 16px;

  h2 {
    color: ${({theme}) => theme.colors.primary};
  }

  hr {
    width: 100%;
    height: 4px;
    background-color: ${({theme}) => theme.colors.primary};

    margin-left: 8px;
  }
`;

const Title: React.FC<{ text: string }> = ({ text }) => {
  return (
    <TitleContainer>
      <h2>{text}</h2>
      <hr />
    </TitleContainer>
  )
}

export default Title
