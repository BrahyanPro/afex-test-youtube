import {initializeApp} from 'firebase/app'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeUwT0EM1xGw61XTtJnB2WPANfW5EQLo8",
  authDomain: "afex-d1aeb.firebaseapp.com",
  projectId: "afex-d1aeb",
  storageBucket: "afex-d1aeb.appspot.com",
  messagingSenderId: "631255545617",
  appId: "1:631255545617:web:6055497f7510e205c23eb0"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export default db;