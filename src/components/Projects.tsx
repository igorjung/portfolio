import type { NextComponentType } from 'next'
import { useState, useMemo } from 'react'
import Title from './Title';
import List from './List';
import Card from './Card';
import HiddeButton from './HiddeButton';

import ProjectsInterface from '../interfaces/projects';

const Projects: NextComponentType = ({ projects }: ProjectsInterface) => {
  const [ showMore, setShowMore ] = useState(false);
  const [ body, setBody ] = useState([]);

  const hiddenCards = useMemo(() => {
    return projects.length > 3
  }, [body])

  useMemo(() => {
    if(showMore) {
      setBody(projects)
    } else {
      setBody(projects.slice(0, 3))

    }
  }, [showMore])

  return (
    <>
      <Title text={'Projects'} />
      <List>
        {body.map(item => (
          <a
            key={item.id}
            href={item.url}
            target="blank"
          >
          <Card title={item.name} />
          </a>
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

export default Projects
