import {connect} from 'react-redux'
import {compose} from 'redux'
import { createStructuredSelector } from 'reselect'

import WithSpinner from '../../components/withSpinner/with-spinner.component';
import CollectionPage from './collection-page.component';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'

// const mapStateToProps = (state) => ({
//     isLoading: !!state.shop.collections
// })

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsLoaded
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionPageContainer
