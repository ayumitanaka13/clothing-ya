import { connect } from "react-redux";
import { compose } from "redux";
import WithSpinner from "../withSpinner/with-spinner.component";
import collectionOverview from "./collection-overview.component";

const mapStateToProps = (state) => ({
  isLoading: state.shop.isFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(collectionOverview);

export default CollectionOverviewContainer;
