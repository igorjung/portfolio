import Image from 'next/image'
import styled from 'styled-components'
import { format } from 'date-fns'
import { Folder, Apartment, EmojiEvents, OpenInNew } from '@material-ui/icons';
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
    text-align: center;
  }
  svg {
    font-size: 24px;
    color: ${({lvl}) => getColor(lvl)};
  }
  small {
    font-size: 11px;
    font-weight: 600;
    margin-top: auto;
  }
  a {
    margin-top: auto;

    svg {
      font-size: 24px;
      color: #0000EE;
    }
  }
`;

const Icon = (svg:string) => {
  switch (svg) {
    case 'folder':
      return <Folder />
    case 'apartment':
      return <Apartment />
    default:
      return <Folder />
  }
}

const Card: React.FC<CardInterface> = ({
  title,
  icon,
  svg,
  level,
  startDate,
  endDate,
  url
}) => {
  return (
    <CardContainer lvl={level ?? 0}>
      {icon && (
        <Image
          src={icon}
          alt={title}
          height={32}
          width={32}
        />
      )}
      {svg && Icon(svg)}
      <span>{title}</span>
      {level && <EmojiEvents />}
      {(startDate || endDate) && (
        <small>
          {format(new Date(startDate), 'MMM, yyyy')} -
          {endDate !== '-' && ` ${format(new Date(endDate), 'MMM, yyyy')}`}
        </small>
      )}
      {url && (
        <a href={url} target="blank">
          <OpenInNew />
        </a>
      )}
    </CardContainer>
  )
}

export default Card
