import styled from 'styled-components'
import { EmojiEvents } from '@material-ui/icons';
import data from '../data/index.json'

const TrophiesCounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & + div {
      margin-left: 16px;
    }
  }

  span {
    font-size: 14px;
    color: #999;
  }

  svg {
    font-size: 30px;
    margin-bottom: 4px;
  }
`;

const TrophiesCounter: React.FC = () => {
  const goldCount = data.skills.filter(item => item.level === 3).length;
  const silverCount = data.skills.filter(item => item.level === 2).length;
  const bronzeCount = data.skills.filter(item => item.level === 1).length;

  return (
    <TrophiesCounterContainer>
      <div>
        <EmojiEvents htmlColor="#F2D022"/>
        <span>{goldCount}</span>
      </div>
      <div>
        <EmojiEvents htmlColor="#BFBFBF"/>
        <span>{silverCount}</span>
      </div>
      <div>
        <EmojiEvents htmlColor="#D98D62"/>
        <span>{bronzeCount}</span>
      </div>
    </TrophiesCounterContainer>
  )
}

export default TrophiesCounter
