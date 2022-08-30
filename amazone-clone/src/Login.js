import { Button } from '@material-ui/core';
import React, {useState} from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import './Login.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((auth, userCredential) => {
        // Signed in
        navigate("/");
        const user = userCredential.user;
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
  });
    }

    const register = (e) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
        // Signed in
        if(auth){
            navigate("/")
        }
        console.log(auth)
        //const user = userCredential.user;
         // ...
  })
  .catch((error) => {
    alert(error.message);
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }

  return (
    <div className='login'>
        <Link to="/">
        <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='pick'/>
        </Link>

        <div className='login_container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
            </form>

            <p>
                By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
            </p>

            <Button onClick={register} className='login_registerButton'>Create your Amazon Acount</Button>
        </div>
    </div>
  )
}

export default Login