import type { NextComponentType } from 'next'
import Image from 'next/image'
import styled from 'styled-components'
import { EmojiEvents } from '@material-ui/icons';
import getColor from '../utils/getColors';
import CardInterface from '../interfaces/card';

const CardContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  border-radius: 4px;
  background-color: #fafafa;
  color: #000;

  width: 100%;
  height: 80px;

  padding: 8px;
  margin-bottom: 16px;
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  margin-left: 16px;

  p {
    font-size: 10px;
    font-weight: 300;
    padding-left: 8px;
  }
`;
const CardTitle = styled.div<{ lvl:number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  span {
    font-size: 18px;
    font-weight: 600;
    margin-left: 8px;
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
  description
}: CardInterface) => {
  return (
    <CardContainer>
      <Image
        src={icon}
        alt={title}
        height={28}
        width={28}
      />
      <CardBody>
        <CardTitle lvl={level}>
          {level != 0 && <EmojiEvents />}
          <span>{title}</span>
        </CardTitle>
        <p>{description}</p>
      </CardBody>
    </CardContainer>
  )
}

export default Card
