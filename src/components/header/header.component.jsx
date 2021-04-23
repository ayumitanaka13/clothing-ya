import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useReactiveVar } from "@apollo/client";

// import './header.styles.scss'
import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink,
} from "./header.styles";

import Logo from "../../assets/ClothingYa.png";
import { auth } from "../../firebase/firebase.util";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { cartHiddenVar } from "../../graphql/cache";

const Header = ({ currentUser }) => {
  const cartHidden = useReactiveVar(cartHiddenVar);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img src={Logo} alt="logo" className="logo" />
      </LogoContainer>
      <OptionContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT{" "}
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionContainer>
      {cartHidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

// const mapStateToProps  = ({cart: { hidden } }) => ({
//   hiddenProps: hidden
// })

// const mapStateToProps = (state) => ({
//   hiddenProps: state.cart.hidden,
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);

// import React from 'react'
// import { connect } from 'react-redux'
// import { createStructuredSelector } from 'reselect'

// // import './header.styles.scss'
// import {
//   HeaderContainer,
//   LogoContainer,
//   OptionContainer,
//   OptionLink,
// } from './header.styles'

// import Logo from '../../assets/ClothingYa.png'
// import { auth } from '../../firebase/firebase.util'
// import CartDropdown from '../cart-dropdown/cart-dropdown.component'
// import CartIcon from '../cart-icon/cart-icon.component'
// import { selectCartHidden } from '../../redux/cart/cart.selector'
// import { selectCurrentUser } from '../../redux/user/user.selector'

// const Header = ({ currentUser, hiddenProps }) => (
//   <HeaderContainer>
//     <LogoContainer to='/'>
//       <img src={Logo} alt='logo' className='logo' />
//     </LogoContainer>
//     <OptionContainer>
//       <OptionLink to='/shop'>SHOP</OptionLink>
//       {currentUser ? (
//         <OptionLink as='div' onClick={() => auth.signOut()}>
//           {' '}
//           SIGN OUT{' '}
//         </OptionLink>
//       ) : (
//         <OptionLink to='/signin'>SIGN IN</OptionLink>
//       )}
//       <CartIcon />
//     </OptionContainer>
//     {hiddenProps ? null : <CartDropdown />}
//   </HeaderContainer>
// )

// // const mapStateToProps  = ({cart: { hidden } }) => ({
// //   hiddenProps: hidden
// // })

// // const mapStateToProps = (state) => ({
// //   hiddenProps: state.cart.hidden,
// // })

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//   hiddenProps: selectCartHidden,
// })

// export default connect(mapStateToProps)(Header)
