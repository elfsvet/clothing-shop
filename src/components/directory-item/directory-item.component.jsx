import {DirectoryItemContainer} from './directory-item.styles'


const DirectoryItem = ({category}) => {

    const {imageUrl, title} = category;

  return (
    <DirectoryItemContainer>
    <div
      className='background-image'
      // custom style
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className='body'>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </DirectoryItemContainer>
  )
}

export default DirectoryItem