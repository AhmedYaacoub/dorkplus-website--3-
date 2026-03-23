import { initializeApp, getApps } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCiNYe2dvsoE1oku-AleheElQBf8yG7PtY",
  authDomain: "dorkplus-71c21.firebaseapp.com",
  projectId: "dorkplus-71c21",
  storageBucket: "dorkplus-71c21.firebasestorage.app",
  messagingSenderId: "203282667187",
  appId: "1:203282667187:web:5bb47b1d327bc759fc42c6",
  measurementId: "G-SJ8164958C",
}

// Initialize Firebase only if it hasn't been initialized yet
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }
