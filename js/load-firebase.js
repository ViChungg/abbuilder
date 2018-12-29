// Load this script file at the beginning of all HTML files, before body
// <script src="load-firebase.js"></script>

(function(){
  var config = {
    apiKey: "AIzaSyAgZlR70I9OagUpdrwfP1zvVqBlR0lZ7tM",
    authDomain: "asianbeautybuild.firebaseapp.com",
    databaseURL: "https://asianbeautybuild.firebaseio.com",
    projectId: "asianbeautybuild",
    storageBucket: "asianbeautybuild.appspot.com",
    messagingSenderId: "679723848698"
  };
  firebase.initializeApp(config);
  app_firebase = firebase; 
})();
