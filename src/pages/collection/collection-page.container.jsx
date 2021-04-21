import { useQuery, gql } from "@apollo/client";

import Spinner from "../../components/spinner/spinner.component";
import CollectionPage from "./collection-page.component";

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionPageContainer = ({ match }) => {
  const { loading, error, data } = useQuery(GET_COLLECTION_BY_TITLE, {
    variables: { title: match.params.collectionId },
  });
  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;
  return <CollectionPage collections={data.getCollectionsByTitle} />;
};

export default CollectionPageContainer;

// import {connect} from 'react-redux'
// import {compose} from 'redux'
// import { createStructuredSelector } from 'reselect'

// import WithSpinner from '../../components/withSpinner/with-spinner.component';
// import CollectionPage from './collection-page.component';
// import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'

// // const mapStateToProps = (state) => ({
// //     isLoading: !!state.shop.collections
// // })

// const mapStateToProps = createStructuredSelector({
//     isLoading: (state) => !selectIsCollectionsLoaded(state)
// })

// const CollectionPageContainer = compose(
//     connect(mapStateToProps),
//     WithSpinner
// )(CollectionPage)

// export default CollectionPageContainer
