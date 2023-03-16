import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhr9xd-voP2IqI4jbTWw-ssXnpqzclLM0",
  authDomain: "lqlk-dev.firebaseapp.com",
  projectId: "lqlk-dev",
  storageBucket: "lqlk-dev.appspot.com",
  messagingSenderId: "457135897810",
  appId: "1:457135897810:web:00e08133aad1f6b332c10b"
  };

const app = initializeApp(firebaseConfig);

export default getFirestore(app);