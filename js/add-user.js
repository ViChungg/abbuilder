// adds user to database
(function(){

    var firebase = app_firebase;

    // for the currently authenticated firebase user
    // create your own "user" node in the datebase using 
    // the firebase generated "uid"

    firebase.auth().onAuthStateChanged(function(user){
        firebase.database().ref("users/"+user.uid).update(
        {
         "name":user.displayName, 
         "email":user.email
        });
    });
})()