import type { NextComponentType } from 'next'
import Image from 'next/image'
import styled from 'styled-components'
import { EmojiEvents } from '@material-ui/icons';
import data from '../data/skills.json'
import getColor from '../utils/getColors';

const CardContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  border-radius: 4px;
  background-color: #fff;
  color: #000;

  width: 200px;
  height: 75px;

  padding: 8px;
  margin-bottom: 16px;
`;
const CardIcon = styled.div<{ bgColor:string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: ${({ bgColor }) => bgColor};

  img {
    filter: brightness(0) invert(1);
  }
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
    font-size: 16px;
    font-weight: 600;
    margin-left: 4px;
  }

  svg {
    font-size: 16px;
    color: ${({lvl}) => getColor(lvl)};
  }
`;

interface SectionInterface {
  title: string
  content: string
}

interface CardInterface {
  title: string
  icon: string
  bgColor: string
  level: number
  description: string
}

const Card: NextComponentType = ({
  title,
  icon,
  bgColor,
  level,
  description
}: CardInterface) => {
  return (
    <CardContainer>
      <CardIcon bgColor={bgColor}>
        <Image
          src={icon}
          alt={title}
          height={22}
          width={22}
        />
      </CardIcon>
      <CardBody>
        <CardTitle lvl={level}>
          <EmojiEvents />
          <span>{title}</span>
        </CardTitle>
        <p>{description}</p>
      </CardBody>
    </CardContainer>
  )
}

const Section: NextComponentType = ({
  title,
  content
}: SectionInterface) => {
  const body: [CardInterface] = data[content]

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {body.map((item) => (
          <Card key={item.title} {...item}  />
        ))}
      </ul>
    </div>
  )
}

export default Section
