
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyDFeDi0l3cwUlPK9_c4cW-xncoIziga7bw",
      authDomain: "letschat-a0864.firebaseapp.com",
      databaseURL: "https://letschat-a0864-default-rtdb.firebaseio.com",
      projectId: "letschat-a0864",
      storageBucket: "letschat-a0864.appspot.com",
      messagingSenderId: "549610556005",
      appId: "1:549610556005:web:94eb6f15f5bbe1af72d48c",
      measurementId: "G-702P8XGT6S"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
