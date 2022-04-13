import type { NextComponentType } from 'next'
import Image from 'next/image'
import styled from 'styled-components'
import { EmojiEvents } from '@material-ui/icons';
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
  height: 100%;
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
`;

const Card: NextComponentType = ({
  title,
  icon,
  level,
}: CardInterface) => {
  return (
    <CardContainer lvl={level}>
      <Image
        src={icon}
        alt={title}
        height={32}
        width={32}
      />
      <span>{title}</span>
      <EmojiEvents />
    </CardContainer>
  )
}

export default Card
