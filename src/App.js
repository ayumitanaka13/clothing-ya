import React, { useState, useEffect } from 'react'
import './App.scss'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/header.component'
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout-page.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.util'
// import { addCollectionAndDocuments } from './firebase/firebase.util'
import { setCurrentUser } from './redux/user/user.action'
import { selectCurrentUser } from './redux/user/user.selector'
import { selectCollectionForPreview } from './redux/shop/shop.selector'

const PageNotFound = () => (
  <div>
    <h1>Page Not Found</h1>
  </div>
)

function App({ setCurrentUser, currentUser, collectionArray }) {
  // const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    let unsubscribeFromAuth = null

    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // console.log(userAuth)

      const userRef = await createUserProfileDocument(userAuth)

      if (userAuth) {
        userRef.onSnapshot((snapShot) => {
          // console.log(snapShot)
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })

    //componentDidUnmount
    //cleanup function
    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  // useEffect(() => {
  //   addCollectionAndDocuments('collections', collectionArray.map(({title, items}) => ({ title, items})) ) //2nd argument is the collections array
  // }, [])

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
          }
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   collectionArray: state.shop.collections,
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionArray: selectCollectionForPreview
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
