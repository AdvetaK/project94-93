const firebaseConfig = {
    apiKey: "AIzaSyA6ZEkn8Qd0b-zEXdrG3w5iM2eGLQ_hme8",
    authDomain: "kwitterpro-dbb36.firebaseapp.com",
    databaseURL: "https://kwitterpro-dbb36-default-rtdb.firebaseio.com",
    projectId: "kwitterpro-dbb36",
    storageBucket: "kwitterpro-dbb36.appspot.com",
    messagingSenderId: "550946513067",
    appId: "1:550946513067:web:27b33e82c7aeabef9fd7ee",
    measurementId: "G-D503CJRC9B"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = " ";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
