import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBExSQEkKbd97wGgESaT26fmELiOiVXcBw",
//   authDomain: "test-4ac23.firebaseapp.com",
//   projectId: "test-4ac23",
//   storageBucket: "test-4ac23.appspot.com",
//   messagingSenderId: "799226842901",
//   appId: "1:799226842901:web:808720a921ce6098d6e31c"
// };

const firebaseConfing = {
  apiKey: "AIzaSyBxPKgCxq1yUZdLiApC2M7vUqZUPleZjM4",
  authDomain: "demoapp-88483.firebaseapp.com",
  projectId: "demoapp-88483",
  storageBucket: "demoapp-88483.appspot.com",
  messagingSenderId: "837288534522",
  appId: "1:837288534522:web:30aeb0ed925bc7e05c0443",
  measurementId: "G-DC5G1S0X33"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBJLZOqoDSJ_oeKSogON5fVreGop6IVIjA",
//   authDomain: "digital-contact-diary.firebaseapp.com",
//   projectId: "digital-contact-diary",
//   storageBucket: "digital-contact-diary.appspot.com",
//   messagingSenderId: "295345816202",
//   appId: "1:295345816202:web:a403bf4a1cc36c616a2373"
// };

// const firebaseConfig = {
  //   apiKey: "AIzaSyDjI1qMFYZVGqGohWLB1ZczmPH6WPu7rYY",
  //   authDomain: "digital-contact-diary-e097c.firebaseapp.com",
  //   projectId: "digital-contact-diary-e097c",
  //   storageBucket: "digital-contact-diary-e097c.appspot.com",
  //   messagingSenderId: "602125963154",
  //   appId: "1:602125963154:web:0d2ada67b93e1cf4603b4b"
  // };
const app = initializeApp(firebaseConfing);
export const firebaseconfing = getFirestore(app)