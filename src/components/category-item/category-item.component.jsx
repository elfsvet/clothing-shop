import {CategoryItemContainer} from './category-item.styles';
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
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'>${price}</span>

      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
