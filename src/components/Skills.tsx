import type { NextComponentType } from 'next'
import { useState, useMemo } from 'react'
import data from '../data/index.json'
import Title from './Title';
import List from './List';
import Card from './Card';
import HiddeButton from './HiddeButton';

const Skills: NextComponentType = () => {
  const [ showMore, setShowMore ] = useState(false);
  const [ body, setBody ] = useState([]);

  const hiddenCards = useMemo(() => {
    return data.skills.length > 3
  }, [body])

  useMemo(() => {
    if(showMore) {
      setBody(data.skills)
    } else {
      setBody(data.skills.slice(0, 3))

    }
  }, [showMore])

  return (
    <>
      <Title text={'Skills'} />
      <List>
        {body.map((item) => (
          <Card key={item.title} {...item}  />
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

export default Skills
