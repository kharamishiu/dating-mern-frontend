import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


/*import 'firebase/auth';        // for authentication 
import 'firebase/storage';     // for storage 
import 'firebase/database';    // for realtime database 
import 'firebase/firestore';   // for cloud firestore  */


const firebaseConfig = {
    apiKey: "AIzaSyDWBdTDhwKuDSgs0i7MMhwWSK8aX-1hPfI",
    authDomain: "msg-app-mern-bf464.firebaseapp.com",
    projectId: "msg-app-mern-bf464",
    storageBucket: "msg-app-mern-bf464.appspot.com",
    messagingSenderId: "329219238625",
    appId: "1:329219238625:web:77c54e6e36c851111ae5a0"
};
const firebaseApp = initializeApp(firebaseConfig);
//const storage = getStorage(firebaseApp);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
//export default storage;