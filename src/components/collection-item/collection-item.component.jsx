import React from 'react'
import { useReactiveVar } from '@apollo/client'

// import './collection-item.styles.scss'
import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer,
  } from "./collection-item.styles";

import { cartItemsVar } from '../../graphql/cache'
import { addItemToCart } from '../../graphql/cart.util'

const CollectionItem = ({ item }) => {
    const {name, price, imageUrl} = item
    const cartItem = useReactiveVar(cartItemsVar)
    return(
    <CollectionItemContainer>
        <BackgroundImage className="image" imageUrl={imageUrl} />
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => cartItemsVar(addItemToCart(cartItem, item))} inverted>Add to Cart</AddButton>
    </CollectionItemContainer>
)}

export default CollectionItem


// import React from 'react'
// import { connect } from 'react-redux'

// // import './collection-item.styles.scss'
// import {
//     CollectionItemContainer,
//     CollectionFooterContainer,
//     AddButton,
//     BackgroundImage,
//     NameContainer,
//     PriceContainer,
//   } from "./collection-item.styles";

// // import CustomButton from '../custom-button/custom-button.component';
// import { addItem } from '../../redux/cart/cart.actions'

// const CollectionItem = ({ item, addItemProps}) => {
//     const {name, price, imageUrl} = item
//     return(
//     <CollectionItemContainer>
//         <BackgroundImage className="image" imageUrl={imageUrl} />
//         <CollectionFooterContainer>
//             <NameContainer>{name}</NameContainer>
//             <PriceContainer>{price}</PriceContainer>
//         </CollectionFooterContainer>
//         <AddButton onClick={() => addItemProps(item)} inverted>Add to Cart</AddButton>
//     </CollectionItemContainer>
// )}

// const mapDispatchToProps = (dispatch) => ({
//     addItemProps: (item) => dispatch(addItem(item))
// })

// export default connect(null, mapDispatchToProps)(CollectionItem)