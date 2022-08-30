import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';
import CartItem from '../cart-item/cart-item.component';
import React from 'react';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Link, useNavigate } from 'react-router-dom';
// import { CategoriesContext } from '../../contexts/categories.context';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  // const {categoriesMap} = useContext(CategoriesContext);
  // console.log(categoriesMap)
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (
          cartItems.map((item) => (<CartItem key={item.id} cartItem={item} />
          ))) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )
        }
      </CartItems>

      <Button onClick={goToCheckoutHandler}>checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
