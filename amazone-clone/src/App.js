
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import { auth } from "./firebase";
import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { useStateValue } from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51LcqAAEOswJJAVkUStaQN6bkrrTf31QRDb7UvXeefYAjGMdp7hYUXdynHuNxyUppJC381OiKhbQeOtYv5tUpG6gI00KTtj0yRb');

function App() {
  const [{basket}, dispatch] = useStateValue();

  useEffect(() => {
    
    auth.onAuthStateChanged(authUser => {
  if (authUser) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    //const uid = user.uid;
    console.log("The user is >>>: ", authUser)
    dispatch({
      type: 'SET_USER',
      user: authUser
    })
    // ...
  } else {
     dispatch({
      type: 'SET_USER',
      user: null
     })
  }
});
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/payment" element={<Elements stripe={promise}>
            <Payment/>
          </Elements>}/>
      </Routes>  
      </BrowserRouter>
    </div>

     
  );
}
        
        

export default App;
