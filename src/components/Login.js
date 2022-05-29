import React from 'react';
import { Button } from '@material-ui/core';
import Logo from './logo02.png';
import { auth, provider } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { actionTypes } from '../actions/reducer';
import { useStateValue } from './StateProvider';
import './Login.css';

const Login = () => {
    const [{ }, dispatch] = useStateValue();

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    action: result.user
                })
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                //const user = result.user;
                //console.log(typeof(result));
            })
            .catch((error) => { // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);

                //console.log(`Hemos tenido un error ${errorMessage} - ${errorCode} - ${credential}`);
            })
    }

    return (

        <div className='Login'>
            <div className='Login__container'>
                <img src={Logo} alt='messages' />
                <div className='Login__containerText'>
                    <h1>Sign in me Messages App</h1>
                </div>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login;