import { firestore, convertCollectionSnapShotToMap } from '../../firebase/firebase.util'


export const updateCollection = collectionsMap => ({
    type: "UPDATE_COLLECTIONS",
    payload: collectionsMap
})

export const fetchCollectionsStart = () => ({
    type: "FETCH_COLLECTIONS_START"
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections')

        dispatch(fetchCollectionsStart())

        collectionRef.get().then(snapShot => {
            const collectionsMap = convertCollectionSnapShotToMap(snapShot)
            dispatch(fetchCollectionsSuccess(collectionsMap))
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: "FETCH_COLLECTIONS_START",
    payload: collectionsMap
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type: "FETCH_COLLECTIONS_START",
    payload: errorMessage
})

