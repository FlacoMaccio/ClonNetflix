import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDIe1Cf0w5DB1tSMfL423y_slTEFrZZsV4",
    authDomain: "clonnetflix-2022.firebaseapp.com",
    projectId: "clonnetflix-2022",
    storageBucket: "clonnetflix-2022.appspot.com",
    messagingSenderId: "533577540258",
    appId: "1:533577540258:web:fa1e4e46c56e6808d7adfb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth}
