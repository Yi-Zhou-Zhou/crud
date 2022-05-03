import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {

  apiKey: "AIzaSyABwFE8v0LKof3JmZkcFu92ObW-pxLDtdE",

  authDomain: "crud-react-2ca1b.firebaseapp.com",

  projectId: "crud-react-2ca1b",

  storageBucket: "crud-react-2ca1b.appspot.com",

  messagingSenderId: "581023421634",

  appId: "1:581023421634:web:c2ef3bc09533725667575b"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;