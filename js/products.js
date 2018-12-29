/** JavaScript for products page. */
$(document).ready(function() {
	var firebase = app_firebase;
	firebase.auth().onAuthStateChanged(function(user) {
		let products = firebase.database().ref("products");
		products.once('value', function(snapshot) {
			snapshot.forEach(function(names) {
				let div = document.getElementById(names.key + '-container');
				names.forEach(function(items) {
					div.innerHTML += "<div class='items'>" + items.key + "</div>";
				})
			});
		});
	});
})