import {connect} from 'react-redux'
import {compose} from 'redux'
import { createStructuredSelector} from 'reselect'

import WithSpinner from '../withSpinner/with-spinner.component';
import CollectionOverview from './collections-overview.component';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector'

// const mapStateToProps = state => ({
//     isLoading: state.shop.isFetching
// })

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)


export default CollectionOverviewContainer