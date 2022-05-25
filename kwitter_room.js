
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCTZSuqx6xFs3hOdoxk1Ojfm3vEFgHBKQ8",
      authDomain: "kwitter-80aa8.firebaseapp.com",
      databaseURL: "https://kwitter-80aa8-default-rtdb.firebaseio.com",
      projectId: "kwitter-80aa8",
      storageBucket: "kwitter-80aa8.appspot.com",
      messagingSenderId: "1092592016033",
      appId: "1:1092592016033:web:a650d10eec4c8d39762ee0"
    };
    
    // Initialize Firebase
    var app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name;
function addroom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";

}
function getData(){
      firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
          Room_names=childKey;
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML+=row;
          
          

      });
      });

}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      
}
