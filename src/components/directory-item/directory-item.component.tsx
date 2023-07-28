import { useNavigate } from 'react-router-dom'

import { DirectoryCategory } from '../../data/category.data'
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.style'

type DirectoryItemProps = {
  category: DirectoryCategory
}

const DirectoryItem = ({ category }: DirectoryItemProps) => {
  const { imageUrl, title, route } = category
  const navigate = useNavigate()
  const onNavigateHandler = () => navigate(route)

  return (
    <DirectoryItemContainer>
      <BackgroundImage url={imageUrl} />
      <Body onClick={onNavigateHandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
