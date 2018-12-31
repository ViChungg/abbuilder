firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("sign-in").style.display = "none";
    } else {
        document.getElementById("sign-out").style.display = "none";
    }

});

(function() {
	document.getElementById("sign-in").onclick = function () {
      location.href = "../html/login.html";
    };

    document.getElementById("sign-out").onclick = function () {
      firebase.auth().signOut()
      location.href = "../html/index.html";
    };
})()