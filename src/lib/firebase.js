import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Initialize Firebase app
const app = initializeApp({
    apiKey: process.env.VITE_apiKey,
    authDomain: process.env.VITE_authDomain,
    projectId: process.env.VITE_projectId,
    storageBucket: process.env.VITE_storageBucket,
    messagingSenderId: process.env.VITE_messagingSenderId,
    appId: process.env.VITE_appId
});

// Get authentication instance
const auth = getAuth(app);

export { auth };
