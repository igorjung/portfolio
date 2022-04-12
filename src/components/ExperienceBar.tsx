import type { NextComponentType } from 'next'
import { useMemo } from 'react'
import {
  isBefore,
  getYear,
  addYears,
  differenceInYears,
  differenceInDays
} from 'date-fns'
import styled from 'styled-components'

const BarContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  max-width: 260px;
  margin-top: 8px;

  span {
    font-weight: 600;
    font-size: 18px;

    padding-left: 8px;
  }

  small {
    padding-left: 8px;
    font-weight: 600;

    &.absolute {
      position: absolute;
      top: 4px;
      right: 8px;

      color: #666;
    }
  }
`;
const ProgressBar = styled.div`
  height: 20px;
  width: 100%;

  border: 2px solid ${({theme}) => theme.colors.secondary};
  border-radius: 20px;
  margin: 2px 0;
  background: ${({theme}) => theme.colors.background};

  div {
    height: 100%;
    background-color: ${({theme}) => theme.colors.secondary};
    border-radius: 20px 0 0 20px;
  }
`;

const ExperienceBar: NextComponentType = () => {
  const level = differenceInYears(new Date(), new Date('2020-03-25'))

  const xp = useMemo(() => {
    const newLevelDate = new Date(`${getYear(new Date())}-03-25`)
    let daysRemaining = 0

    if(isBefore(new Date(), newLevelDate)) {
      daysRemaining = differenceInDays(newLevelDate, new Date())
    } else {
      daysRemaining = differenceInDays(addYears(newLevelDate, 1), new Date())
    }

    return {
      days: 365 - daysRemaining,
      percent: 100-((daysRemaining/365)*100),
    }
  }, [])

  return (
    <BarContainer>
      <span>Lv. {level}</span>
      <ProgressBar>
        <div style={{width: `${xp.percent}%`}} />
      </ProgressBar>
      <small>{xp.days}/365</small>
      <small className="absolute">years of work</small>
    </BarContainer>
  )
}

export default ExperienceBar
