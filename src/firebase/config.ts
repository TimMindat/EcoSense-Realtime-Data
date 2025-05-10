import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC52-B0J2BqEaO-mbJMcvxJvcqKHOII7N0",
  authDomain: "airsense-v1.firebaseapp.com",
  databaseURL: "https://airsense-v1-default-rtdb.firebaseio.com",
  projectId: "airsense-v1",
  storageBucket: "airsense-v1.firebasestorage.app",
  messagingSenderId: "742312457368",
  appId: "1:742312457368:web:3243dd1de4d2b3aedf0ced",
  measurementId: "G-0V9FS8JWB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };