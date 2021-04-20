import React from 'react'
import { connect } from 'react-redux'

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './collection-page.styles'

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector'

const CollectionPage = ({ collections }) => {
    console.log('cols: ', collections)
    const {title, items} = collections
    return(
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {items && items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collections: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
