import {connect} from 'react-redux'
import {compose} from 'redux'

import WithSpinner from '../../components/withSpinner/with-spinner.component';
import CollectionPage from './collection-page.component';

const mapStateToProps = (state) => ({
    isLoading: !!state.shop.collections
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionPageContainer
