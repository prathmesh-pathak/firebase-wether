const express = require('express');
const app = express();


const initializeApp = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyBIhplEK5x66E1ebYDxWYWFPk9i094o8Mg",
    authDomain: "demoproject-71bec.firebaseapp.com",
    databaseURL: "https://demoproject-71bec-default-rtdb.firebaseio.com",
    projectId: "demoproject-71bec",
    storageBucket: "demoproject-71bec.appspot.com",
    messagingSenderId: "731576663899",
    appId: "1:731576663899:web:a4d3fd28d83ed0d8d5a47e"
  };


  const firebase = initializeApp(firebaseConfig);


const port = 8000;
app.listen(port, () => {
    console.log(`Server started on 8000`);
});