

var firebaseConfig = {
    apiKey: "AIzaSyALTT6ThLgna81wCOAsqQd9QmMADkZiRtY",
    authDomain: "chatapp-d8480.firebaseapp.com",
    databaseURL: "https://chatapp-d8480-default-rtdb.firebaseio.com",
    projectId: "chatapp-d8480",
    storageBucket: "chatapp-d8480.appspot.com",
    messagingSenderId: "856221593305",
    appId: "1:856221593305:web:3a91da4ca90e4eed5958c8"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 function addRoom()
 {
     room_name = document,getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
    });
    localStorage,setItem("room_name", room_name);

    window.location = "kwitter_page.html"

 }

 function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html"
 }

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}





