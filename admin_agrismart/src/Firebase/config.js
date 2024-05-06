// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import {getAuth,GoogleAuthProvider} from "firebase/auth";
// import {getFirestore} from "firebase/firestore";


// // Initialize Firebase
// // const analytics = getAnalytics(app);
// const app = initializeApp(firebaseConfig);
// export const auth=getAuth(app);
// export const googleProvider=new GoogleAuthProvider();
// export const db=getFirestore(app);

// const firebaseConfig = {
//   apiKey: "AIzaSyA-66Q4RPB4dFXDEkzcrI3IExrBixeqCUg",
//   authDomain: "agrismart-fefde.firebaseapp.com",
//   projectId: "agrismart-fefde",
//   storageBucket: "agrismart-fefde.appspot.com",
//   messagingSenderId: "826159977506",
//   appId: "1:826159977506:web:df7e975ff24de5a0fbe67b",
//   measurementId: "G-K4P8TSZPW4"
// };



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyClma7aiYiksqT558pKGC116fkUjcM5BPU",
  authDomain: "admin-agrismart.firebaseapp.com",
  projectId: "admin-agrismart",
  storageBucket: "admin-agrismart.appspot.com",
  messagingSenderId: "117306694096",
  appId: "1:117306694096:web:211a5d9c33fbd542dec1d5",
  measurementId: "G-KYLR46RBMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider();
export const db=getFirestore(app);