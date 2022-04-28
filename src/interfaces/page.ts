import UserInterface from './user'
import ProjectInterface from './project'

export default interface PageInterface {
  user: UserInterface
  projects: ProjectInterface[]
}
