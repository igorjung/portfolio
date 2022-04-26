import type { NextComponentType } from 'next'
import { useState, useMemo } from 'react'
import { format } from 'date-fns'
import styled from 'styled-components'
import data from '../data/index.json'
import Title from './Title';
import List from './List';
import HiddeButton from './HiddeButton';

const HistoryItem = styled.li`
  display: grid;
  grid-template-columns: 30% 40% 15% 15%;

  border-radius: 10px;
  border: 2px solid rgba(0,0,0, 0.1);

  height: 56px;
  width: 100%;
  padding: 16px;

  text-align: left;
  font-size: 14px;

  span {
    font-size: 14px;
    font-weight: 600;
  }

  li {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    &:first-child {
      justify-content: flex-start;
    }
  }

  &+li{
    margin-top: 16px;
  }
`;

const History: NextComponentType = () => {
  const [ showMore, setShowMore ] = useState(false);
  const [ body, setBody ] = useState([]);

  const hiddenCards = useMemo(() => {
    return data.history.length > 4
  }, [body])

  useMemo(() => {
    if(showMore) {
      setBody(data.history)
    } else {
      setBody(data.history.slice(0, 4))

    }
  }, [showMore])

  return (
    <>
      <Title text={'History'} />
      <List>
        {body && body.map(item => (
          <HistoryItem key={item.title}>
            <li><span>{item.title}</span></li>
            <li><span>{item.description}</span></li>
            <li>{
              item.startDate !== '-' ?
              format(new Date(item.startDate), 'MMM dd, yyyy') :
              '-'
            }</li>
            <li>{
              item.endDate !== '-' ?
              format(new Date(item.endDate), 'MMM dd, yyyy') :
              '-'
            }</li>
          </HistoryItem>
        ))}
        {hiddenCards && (
          <HiddeButton
            showMore={showMore}
            onShowMore={() => setShowMore(!showMore)}
          />
        )}
      </List>
    </>

  )
}

export default History
