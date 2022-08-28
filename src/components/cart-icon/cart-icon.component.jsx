import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {CartIconContainer, StyledShoppingIcon, ItemCount} from './cart-icon.styles';
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  // const {cartItems} = useContext(CartContext)
  // // to calculate the amount in the cart we used reducer function.
  // const amountInTheCart = cartItems.reduce((acc, item) => acc+ item.quantity,0)

  return (
    <CartIconContainer>
      <StyledShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
