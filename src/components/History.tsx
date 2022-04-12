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
  justify-content: center;

  background: #fff;
  border-radius: 4px;

  width: 100%;
  padding: 16px;
  margin-bottom: 16px;

  h2 {
    font-size: 22px;
    font-weight: 300;
    margin-bottom: 16px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 100%;
  }
`;
const HistoryItem = styled.li`
  display: grid;
  grid-template-columns: 0.8fr 2fr 1fr 1fr;

  height: 32px;
  width: 100%;

  text-align: left;

  strong {
    font-size: 14px;
    font-weight: 600;
  }

  span {
    font-size: 14px;
  }

  &+li{
    margin-top: 32px;
  }
`;
const HistoryTitle = styled.li`
  display: grid;
  grid-template-columns: 0.8fr 2fr 1fr 1fr;

  height: 24px;
  width: 100%;

  text-align: left;

  strong {
    font-size: 14px;
    font-weight: 600;
  }

  span {
    font-size: 14px;
  }

  margin-bottom: 24px;
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
      <h2>History</h2>
      <ul>
        <HistoryTitle>
          <strong></strong>
          <strong>Title</strong>
          <strong>School</strong>
          <span>Date</span>
        </HistoryTitle>
        {body && body.map(item => (
          <HistoryItem key={item.title}>
            <Image
              src={item.icon}
              alt={item.title}
              layout="responsive"
              objectFit="contain"
              height={18}
              width={18}
            />
            <strong>{item.title}</strong>
            <span>{item.description}</span>
            <span>{format(new Date(item.date), 'MMM dd, yyyy')}</span>
          </HistoryItem>
        ))}
      </ul>
      {hiddenCards && <button type="button" onClick={() => setShowMore(!showMore)}></button>}
    </HistoryContainer>
  )
}

export default History
