import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {

    apiKey: "AIzaSyDzjZE6DllYayXgjLlSJZzk00nS3rsA-OU",
  
    authDomain: "e-commercett.firebaseapp.com",
  
    projectId: "e-commercett",
  
    storageBucket: "e-commercett.appspot.com",
  
    messagingSenderId: "1009405291699",
  
    appId: "1:1009405291699:web:4bfe7c90a94a07027594c6",
  
    measurementId: "G-2PM0ZYC6JQ"
  
  }
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

export
{db}
