import { firestore } from '../../firebase/firebase.util'


export const updateCollection = collectionsMap => ({
    type: "UPDATE_COLLECTIONS",
    payload: collectionsMap
})

export const fetchCollectionsStart = () => ({
    type: "FETCH_COLLECTIONS_START"
})
