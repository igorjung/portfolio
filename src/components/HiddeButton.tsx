import type { NextComponentType } from 'next'
import styled from 'styled-components'
import { Visibility, VisibilityOff } from '@material-ui/icons';

import HiddeButtonInterface from '../interfaces/hiddeButton';

const HiddeButtonContent = styled.button`
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

const HiddeButton: NextComponentType = ({ showMore, onShowMore }: HiddeButtonInterface) => {
  return (
    <li>
      <HiddeButtonContent type="button" onClick={onShowMore}>
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
      </HiddeButtonContent>
    </li>
  )
}

export default HiddeButton
