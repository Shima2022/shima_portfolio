import {
    FirebaseApp,
    initializeApp
} from 'firebase/app'
import { getFirestore, Firestore } from 'firebase/firestore'

let firebaseInstance: FirebaseApp | null = null;

const firebaseConfig = {
    apiKey: "AIzaSyCWIuZHBlc8t5PojXLsYTgYSisqKMYza3s",
    authDomain: "portfolio-7b8d4.firebaseapp.com",
    projectId: "portfolio-7b8d4",
    storageBucket: "portfolio-7b8d4.appspot.com",
    messagingSenderId: "48042305019",
    appId: "1:48042305019:web:53e5f89565d9e9d991d75e",
    measurementId: "G-7SZRZHLD0D"
  };

const getAppInstance = (): FirebaseApp => {
    if (!firebaseInstance) {
        return initializeApp(firebaseConfig)
    }

    return firebaseInstance;
}

const getFirestoreInstance = (): Firestore => {
 return getFirestore(getAppInstance())
}

const FirebaseServices = {
    FirestoreInstance: getFirestoreInstance(),
}

export default FirebaseServices;
