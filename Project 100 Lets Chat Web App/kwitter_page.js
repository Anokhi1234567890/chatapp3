//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBq2m6xnAl2kkAT82Wi2EWaWLaslM3We4g",
      authDomain: "practice-dea40.firebaseapp.com",
      databaseURL: "https://practice-dea40-default-rtdb.firebaseio.com",
      projectId: "practice-dea40",
      storageBucket: "practice-dea40.appspot.com",
      messagingSenderId: "243904728267",
      appId: "1:243904728267:web:396d5f8c54140b6bc35f4e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                likes:0
          })

         document.getElementById("msg").value = ""; 
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
