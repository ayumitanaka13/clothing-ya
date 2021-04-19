import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

// import SHOP_DATA from './shop.data.js'
import { firestore, convertCollectionSnapShotToMap } from '../../firebase/firebase.util'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = ({collectionsProps}) => {

    const [collections, setCollections] = useState([])

    useEffect(() => {
        // setCollections(SHOP_DATA)

        let unsubscribeFromSnapShot = null

        const collectionRef = firestore.collection('collections')

        unsubscribeFromSnapShot = collectionRef.onSnapshot(async (snapShot) => {
            const collectionsMap = convertCollectionSnapShotToMap(snapShot)
            console.log('map: ', collectionsMap)
        })
    }, [])

    return(
        <div className="shop-page">
            {
                collections && collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
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

const mapStateToProps = (state) => ({
    collectionsProps: state.shop.collections
})

export default connect(mapStateToProps)(ShopPage)
