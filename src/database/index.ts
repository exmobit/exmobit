import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBsS092LFI7UhkugRP0EGw_9sQk43B7o7Y",
  authDomain: "exmobit.firebaseapp.com",
  projectId: "exmobit",
  storageBucket: "exmobit.appspot.com",
  messagingSenderId: "1085654646079",
  appId: "1:1085654646079:web:bc7c7b7fe172fcc2d6e78a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default db;
