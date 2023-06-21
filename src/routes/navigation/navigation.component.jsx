import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  NavLinkWithIcon,
} from './navigation.styles';
import { ReactComponent as CrwnLogo } from '../../assets/images/crown.svg';
import { ReactComponent as ShopIcon } from '../../assets/images/shop.svg';
import { ReactComponent as UserLogo } from '../../assets/images/user.svg';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import Container from '../../components/container/container.component';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';

const Navigation = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo alt="crwn logo" className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLinkWithIcon>
            <ShopIcon alt="" aria-hidden="true" className="icon" />
            <NavLink to="/shop">Shop</NavLink>
          </NavLinkWithIcon>
          <NavLinkWithIcon>
            <UserLogo alt="" aria-hidden="true" className="icon" />
            {currentUser ? (
              <NavLink
                as="span"
                onClick={signOutUser}
                role="button"
                tabIndex={0}
              >
                Sign out
              </NavLink>
            ) : (
              <NavLink to="/auth">Sign in</NavLink>
            )}
          </NavLinkWithIcon>
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Navigation;
