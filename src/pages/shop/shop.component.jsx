import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

// import SHOP_DATA from './shop.data.js'
import {
  firestore,
  convertCollectionSnapShotToMap,
} from '../../firebase/firebase.util'

import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
  updateCollection,
} from '../../redux/shop/shop.actions'

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container'
import CollectionPageContainer from '../collection/collection-page.container'



const ShopPage = ({
  fetchCollectionsStartProps,
  fetchCollectionsSuccessProps,
  updateCollectionProps,
  fetchCollectionsFailureProps,
  match,
}) => {
  useEffect(() => {
    // fetchCollectionsStartAsyncProps() //promise-based fetching of data

    let unsubscribeFromSnapShot = null

    const collectionRef = firestore.collection('collections')

    try {
      unsubscribeFromSnapShot = collectionRef.onSnapshot(async (snapShot) => {
        fetchCollectionsStartProps()
        const collectionsMap = await convertCollectionSnapShotToMap(snapShot)
        // updateCollectionProps(collectionsMap)
        fetchCollectionsSuccessProps(collectionsMap)
      })
    } catch (error) {
      fetchCollectionsFailureProps(error.message)
    }

    return () => {
      unsubscribeFromSnapShot() //unsubscribe
    }
  }, [])

  return (
    <div className='shop-page'>
      {/* {
        collections && collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        } */}

      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  )
}

// class ShopPage extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       collections: SHOP_DATA,
//     }
//   }

//   render() {
//     const { collections } = this.state

//     return (
//       <div className='shop-page'>
//         {collections &&
//           collections.map(({ id, ...otherCollectionProps }) => (
//             <CollectionPreview key={id} {...otherCollectionProps} />
//           ))}
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
//   collectionsProps: state.shop.collections,
// })

const mapDispatchToProps = (dispatch) => ({
  updateCollectionProps: (collectionsMap) =>dispatch(updateCollection(collectionsMap)),
  fetchCollectionsStartProps: () => dispatch(fetchCollectionsStart()),
  fetchCollectionsSuccessProps: (collectionsMap) => dispatch(fetchCollectionsSuccess(collectionsMap)),
  fetchCollectionsFailureProps: (err) => dispatch(fetchCollectionsFailure(err)),
})

export default connect(null, mapDispatchToProps)(ShopPage)
