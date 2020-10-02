import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyB-0FVRoZDhKmOOcQ3vFCOogWwpvf3azR8",
        authDomain: "crwn-db-26cf6.firebaseapp.com",
        databaseURL: "https://crwn-db-26cf6.firebaseio.com",
        projectId: "crwn-db-26cf6",
        storageBucket: "crwn-db-26cf6.appspot.com",
        messagingSenderId: "24753010587",
        appId: "1:24753010587:web:6be993b0253375a883933e",
        measurementId: "G-EV5HD2J7SX"
  
};
firebase.initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
      
        const userRef = firestore.doc(`users/${userAuth.uid}`);
      
        const snapShot = await userRef.get();
      
        if (!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();
          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            });
          } catch (error) {
            console.log('error creating user', error.message);
          }
        }
      
        return userRef;
      };
      
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => ( auth.signInWithPopup(provider));

export default firebase;









