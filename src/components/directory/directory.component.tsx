import CATEGORIES_DATA from '../../data/category.data'
import DirectoryItem from '../directory-item/directory-item.component'
import DirectoryContainer from './directory.style'

const Directory = () => (
  <DirectoryContainer>
    {CATEGORIES_DATA.map((category) => (
      <DirectoryItem key={category.id} category={category} />
    ))}
  </DirectoryContainer>
)

export default Directory
