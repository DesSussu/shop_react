import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1pdEHvh3a9SIrKIFBpliwrEoxXuAJNrc",
  authDomain: "ecommerce-punchpum.firebaseapp.com",
  projectId: "ecommerce-punchpum",
  storageBucket: "ecommerce-punchpum.appspot.com",
  messagingSenderId: "491183040567",
  appId: "1:491183040567:web:c8e1411c1043e5323c37b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// exportamos la función para usarla

export default function getFirestoreApp() {
  return app;
}
