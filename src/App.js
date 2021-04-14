import React, {useState, useEffect} from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component'
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util'

const PageNotFound = () => (
  <div>
    <h1>Page Not Found</h1>
  </div>
)

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  
  useEffect(() => {
    let unsubscribeFromAuth = null

    unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
      // console.log(userAuth)

      const userRef = await createUserProfileDocument(userAuth)

      if(userAuth){
        userRef.onSnapshot((snapShot) => {
          // console.log(snapShot)
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }else{
        setCurrentUser(userAuth)
      }
    })

    //componentDidUnmount
    //cleanup function
    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" render={() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp />)} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
