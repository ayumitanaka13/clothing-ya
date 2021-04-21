import { useQuery, gql } from "@apollo/client";

import Spinner from "../spinner/spinner.component";
import CollectionOverview from "./collection-overview.component";

const GET_COLLECTIONS = gql`
  {
    collections {
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

const CollectionOverviewContainer = () => {
  const { loading, error, data } = useQuery(GET_COLLECTIONS);

  if (loading) return <Spinner />;
  if (error) return <p>Error :(</p>;

  return <CollectionOverview collections={data.collections} />;
};

export default CollectionOverviewContainer;

// import {connect} from 'react-redux'
// import {compose} from 'redux'
// import { createStructuredSelector} from 'reselect'

// import WithSpinner from '../withSpinner/with-spinner.component';
// import CollectionOverview from './collections-overview.component';
// import { selectIsCollectionFetching } from '../../redux/shop/shop.selector'

// // const mapStateToProps = state => ({
// //     isLoading: state.shop.isFetching
// // })

// const mapStateToProps = createStructuredSelector({
//     isLoading: selectIsCollectionFetching
// })

// const CollectionOverviewContainer = compose(
//     connect(mapStateToProps),
//     WithSpinner
// )(CollectionOverview)

// import { connect } from "react-redux";
// import { compose } from "redux";
// import { createStructuredSelector } from "reselect";

// export default CollectionOverviewContainer
