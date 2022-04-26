import type { NextComponentType } from 'next'
import Image from 'next/image'
import styled from 'styled-components'
import { format } from 'date-fns'
import { Folder, EmojiEvents } from '@material-ui/icons';
import getColor from '../utils/getColors';

import CardInterface from '../interfaces/card';

const CardContainer = styled.li<{ lvl:number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  border: 2px solid rgba(0,0,0, 0.1);

  width: 100%;
  height: 165px;
  padding: 24px 16px;

  span {
    font-size: 18px;
    font-weight: 600;
    margin: 16px 0;
  }
  svg {
    font-size: 24px;
    color: ${({lvl}) => getColor(lvl)};
  }
  small {
    margin-top: auto;
  }
`;

const Card: NextComponentType = ({
  id,
  title,
  icon,
  level,
  startDate,
  endDate
}: CardInterface) => {

  console.log('#####', startDate, endDate)

  return (
    <CardContainer key={id} lvl={level ?? 0}>
      {icon ? (
        <Image
          src={icon}
          alt={title}
          height={32}
          width={32}
        />
      ) : (
        <Folder />
      )}
      <span>{title}</span>
      {level && <EmojiEvents />}
      {startDate || endDate && (
        <small>
          {format(new Date(startDate), 'MMM, yyyy')} -
          {endDate !== '-' ? format(new Date(endDate), 'MMM, yyyy') : ''}
        </small>
      )}
    </CardContainer>
  )
}

export default Card
