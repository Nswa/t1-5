// src/lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
   apiKey: 'AIzaSyBjIgWInVLjYdlsgABSWdRjM8R3Bfg0nv0',
   authDomain: 'gn6-t1-5.firebaseapp.com',
   projectId: 'gn6-t1-5',
   storageBucket: 'gn6-t1-5.firebasestorage.app',
   messagingSenderId: '676109749692',
   appId: '1:676109749692:web:e0f00811a656490bc26fb9',
   appMeasurement: "G-M1B1EGDCNW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
