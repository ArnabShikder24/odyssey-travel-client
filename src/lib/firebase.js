import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Directly add Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYvyx23CR29aA2EyuCTYx0Mc7bP7S5Z3E",
    authDomain: "technet-fb4b3.firebaseapp.com",
    projectId: "technet-fb4b3",
    storageBucket: "technet-fb4b3.appspot.com",
    messagingSenderId: "584311300296",
    appId: "1:584311300296:web:ae21268cf35d7d98ab85fd"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get authentication instance
const auth = getAuth(app);

export { auth };
