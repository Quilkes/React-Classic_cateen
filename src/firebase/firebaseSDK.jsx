  // Import functions needed for SDKs configuration
  import { initializeApp } from 'firebase/app';
  import { getDatabase } from 'firebase/database';
  import { getStorage } from 'firebase/storage';
  import { getAuth } from 'firebase/auth'

  // My web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDLigQM6jByC0E6xL41H82YVmxSHlD10Pc",
    authDomain: "canteen-ordering-b3b9e.firebaseapp.com",
    projectId: "canteen-ordering-b3b9e",
    storageBucket: "canteen-ordering-b3b9e.appspot.com",
    messagingSenderId: "463745184991",
    appId: "1:463745184991:web:4ac9fb569c2af41a6da56a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { database, storage, auth };
