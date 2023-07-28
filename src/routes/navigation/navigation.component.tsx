import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { ReactComponent as CrwnLogo } from '../../assets/images/crown.svg'
import { ReactComponent as ShopIcon } from '../../assets/images/shop.svg'
import { ReactComponent as UserLogo } from '../../assets/images/user.svg'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import Container from '../../components/container/container.component'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { signOutStart } from '../../store/user/user.action'
import {
  selectCurrentUser,
  selectLoadingState,
} from '../../store/user/user.selector'
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
  NavLinkWithIcon,
} from './navigation.styles'

const Navigation = () => {
  const dispatch = useDispatch()
  const authLoading = useSelector(selectLoadingState)

  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

  const signOutUser = () => dispatch(signOutStart())

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo aria-label="crwn-logo" className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLinkWithIcon>
            <ShopIcon aria-hidden className="icon" />
            <NavLink to="/shop">Shop</NavLink>
          </NavLinkWithIcon>
          <NavLinkWithIcon>
            <UserLogo aria-hidden className="icon" />
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
              <NavLink to="/auth">
                {authLoading ? 'Signing in...' : 'Sign in'}
              </NavLink>
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
  )
}

export default Navigation
