/* JavaScript for the Diary page. */

/* Loads all products saved in diary page. */
(function() {
	var firebase = app_firebase;
	firebase.auth().onAuthStateChanged(function(user) {
		if (user == null) {
			console.log("oops");
		} else {
			console.log("logged in");
		}

		
	});
})()