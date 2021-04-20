import {
  firestore,
  convertCollectionSnapShotToMap,
} from "../../firebase/firebase.util";

export const UPDATE_COLLECTIONS = "UPDATE_COLLECTIONS";
export const FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START";
export const FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS";
export const FETCH_COLLECTIONS_FAILURE = "FETCH_COLLECTIONS_FAILURE";

export const updateCollection = (collectionsMap) => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");

    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapShot) => {
        const collectionsMap = convertCollectionSnapShotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
