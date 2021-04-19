import {connect} from 'react-redux'
import {compose} from 'redux'

import WithSpinner from '../withSpinner/with-spinner.component';
import CollectionOverview from './collections-overview.component';

const mapStateToProps = state => ({
    isLoading: state.shop.isFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)


export default CollectionOverviewContainer