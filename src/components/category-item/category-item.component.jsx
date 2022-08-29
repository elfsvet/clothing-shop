import {
  CategoryItemContainer,
  Image,
  ImageContainer,
  Quantity,
  RemoveButton,
  Name,
  Price,
} from './category-item.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CategoryItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  const { name, price, imageUrl, quantity } = cartItem;

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <CategoryItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </Quantity>
      <Price>${price}</Price>

      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
