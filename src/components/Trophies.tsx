import type { NextComponentType } from 'next'
import styled from 'styled-components'
import { EmojiEvents } from '@material-ui/icons';
import TrophiesCounterInterface from '../interfaces/trophies'

const TrophiesCounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin-bottom: 16px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & + div {
      margin-left: 16px;
    }

    &#gold {
      svg {
        color: yellow;
      }
    }

    &#silver {
      svg {
        color: gray;
      }
    }

    &#bronze {
      svg {
        color: orange;
      }
    }
  }

  span {
    font-size: 14;
    font-weight: 600;
  }

  svg {
    font-size: 40px;
    margin-bottom: 4px;

    &#gold {
      color: yellow;
    }
  }
`;

const TrophiesCounter: NextComponentType = ({data} : TrophiesCounterInterface) => {
  const goldCount = data.filter(item => item.level === 3).length;
  const silverCount = data.filter(item => item.level === 2).length;
  const bronzeCount = data.filter(item => item.level === 1).length;

  return (
    <TrophiesCounterContainer>
      <div>
        <EmojiEvents htmlColor='yellow'/>
        <span>{goldCount}</span>
      </div>
      <div>
        <EmojiEvents htmlColor='silver'/>
        <span>{silverCount}</span>
      </div>
      <div>
        <EmojiEvents htmlColor='orange'/>
        <span>{bronzeCount}</span>
      </div>
    </TrophiesCounterContainer>
  )
}

export default TrophiesCounter
