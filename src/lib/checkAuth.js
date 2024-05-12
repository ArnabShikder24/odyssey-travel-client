import { getAuth, onAuthStateChanged } from 'firebase/auth';

const checkAuth = (callback) => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
    if (user) {
        callback(true);
    } else {
        callback(false);
    }
    });
};

export default checkAuth;
