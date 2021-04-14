import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()

//firestore query
firestore.collection('users').doc('9bBiFxjfczV0MFng3m9J').collection('cartItem').doc('G0xexpQTNiIxNUOVzL2O')
firestore.doc('/users/9bBiFxjfczV0MFng3m9J/cartItem/G0xexpQTNiIxNUOVzL2O')