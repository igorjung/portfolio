import type { NextComponentType } from 'next'
import { useState, useMemo } from 'react'
import { format } from 'date-fns'
import styled from 'styled-components'
import { Visibility, VisibilityOff } from '@material-ui/icons';
import data from '../data/index.json'
import Title from './Title';

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background: #fff;
  border-radius: 4px;

  width: 100%;
  margin-bottom: 64px;
`;
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
const ShowAllButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  border: 2px solid rgba(0,0,0, 0.1);

  height: 56px;
  width: 100%;
  padding: 16px;

  cursor: pointer;

  span {
    font-size: 14px;
    font-weight: 600;
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.text};
  }

  svg {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.text};
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
      <HistoryContainer>
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
      {hiddenCards &&
        <li style={{ width: '100%' }}>
          <ShowAllButton type="button" onClick={() => setShowMore(!showMore)}>
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
          </ShowAllButton>
        </li>
        }
      </HistoryContainer>
    </>

  )
}

export default History
