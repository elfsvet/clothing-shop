import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { useSelector } from 'react-redux/';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles.jsx';
import { CartContext } from '../../contexts/cart.context';
import { selectCurrentUser } from '../../store/user.selector';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

const Navigation = () => {
  // we leveraging the currentUser we got from useContext
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>

        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>

        {/* need to figure out how to toggle this to show and hide on click use state. */}
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
