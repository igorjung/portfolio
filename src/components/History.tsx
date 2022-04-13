import type { NextComponentType } from 'next'
import { useState, useMemo } from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import styled from 'styled-components'
import data from '../data/index.json'

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background: #fff;
  border-radius: 4px;

  width: 100%;
  margin-bottom: 16px;
`;
const HistoryTitle = styled.li`
  display: grid;
  grid-template-columns: 0.2fr 0.5fr 2fr 0.5fr 0.8fr 1fr;

  height: 24px;
  width: 100%;

  text-align: left;
  font-size: 14px;
  font-weight: 600;

  margin-bottom: 24px;
`;
const HistoryItem = styled.li`
  display: grid;
  grid-template-columns: 0.2fr 0.5fr 2fr 0.5fr 0.8fr 1fr;

  height: 32px;
  width: 100%;

  text-align: left;
  font-size: 14px;

  span {
    font-size: 14px;
    font-weight: 600;
  }

  &+li{
    margin-top: 32px;
  }
`;

const History: NextComponentType = () => {
  const [ showMore, setShowMore ] = useState(false);
  const [ body, setBody ] = useState([]);

  const hiddenCards = useMemo(() => {
    return data.courses.length > 4
  }, [body])

  useMemo(() => {
    if(showMore) {
      setBody(data.courses)
    } else {
      setBody(data.courses.slice(0, 4))

    }
  }, [showMore])

  return (
    <HistoryContainer>
      <HistoryTitle>
        <li>#</li>
        <li />
        <li>Title</li>
        <li>Time</li>
        <li>Date</li>
        <li>School</li>
      </HistoryTitle>
      {body && body.map((item, index) => (
        <HistoryItem key={item.title}>
          <li><span>{index}</span></li>
          <Image
            src={item.icon}
            alt={item.title}
            layout="responsive"
            objectFit="contain"
            height={18}
            width={18}
          />
          <li><span>{item.title}</span></li>
          <li>8:00</li>
          <li>{format(new Date(item.date), 'MMM dd, yyyy')}</li>
          <li>{item.description}</li>
        </HistoryItem>
      ))}
      {hiddenCards && <button type="button" onClick={() => setShowMore(!showMore)}></button>}
    </HistoryContainer>
  )
}

export default History
