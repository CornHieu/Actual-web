// This line imports the function to initialize the Firebase app
import { initializeApp } from 'firebase/app';

// This imports the function to get the Firestore database instance
import { getFirestore } from 'firebase/firestore';

// This object contains your Firebase project's configuration details
// You'll need to replace this with your own config from the Firebase console
const firebaseConfig = {
        apiKey: "AIzaSyA749cNL7HOoP-fmwCTHBTBergYWqM7Gcw",
        authDomain: "blog-16e84.firebaseapp.com",
        projectId: "blog-16e84",
        storageBucket: "blog-16e84.appspot.com",
        messagingSenderId: "218334324977",
        appId: "1:218334324977:web:05c1aebe368d35572ea150",
        measurementId: "G-EB1WBT5JHC"
    
};

// This line initializes your Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);

// This gets the Firestore database instance for your initialized app
// We export it so we can use it in other files
export const db = getFirestore(app);