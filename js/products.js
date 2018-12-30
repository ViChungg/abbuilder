/* JavaScript for products page. */
$(document).ready(function() {
	var firebase = app_firebase;
	let products = firebase.database().ref("products");
	let brands = firebase.database().ref("brands");

	firebase.auth().onAuthStateChanged(function(user) {
		let dropdowns = document.getElementsByClassName("brands");
		brands.once('value', function(snap) {
			let length = snap.val().length;
			for (var i = 0; i < length; i++) {
				for (var k = 0; k < dropdowns.length; k++) {
					$(dropdowns[k]).append($('<option>', {
				    value: snap.val()[i],
				    text: snap.val()[i]
					}));
				}
			}
		});

		/* Loads all products once page finishes loading. */
		products.once('value', function(snapshot) {
			snapshot.forEach(function(names) {
				let div = document.getElementById(names.key + '-items');
				$(div).attr("class", "it-cont");
				names.forEach(function(items) {
					let item = $("<div class='items'></div>");
					$(item).attr("id", items.key);
					item.append("<img class='product-img' src='https://via.placeholder.com/170X200'>" + items.key);
					$(div).append(item);
				})
			});
		});

		/* Search function */
		$(function() {
			$(".tab-content").on('keyup', '.filter', function() {
				let parentId = $(this).parent().parent().attr('id');
				let prod = products.child(parentId);
				let text = $(this).val().toLowerCase();
				let itemDiv = document.getElementById(parentId + '-items');
				let brand = $(this).next().val();
				console.log(brand);
				prod.once('value', function(snapshot) {
					snapshot.forEach(function(items) {
						let name = items.key.toString();
						if (brand == 'all') {
							if (name.toLowerCase().indexOf(text) > -1) {
								document.getElementById(name).style.display = "";
							} else {
								console.log("HMMM");
								document.getElementById(name).style.display = "none";
							}
						} else if (brand == items.val()['brand']) {
							
							if (name.toLowerCase().indexOf(text) > -1) {
								document.getElementById(name).style.display = "";
							} else {
								console.log("HMMM");
								document.getElementById(name).style.display = "none";
							}
							
						}
					})
				});	
			});

			/* filter by brand */
			$(".brands").change(function() {
				var brand = $(this).val();
				let parentId = $(this).parent().parent().attr('id');
				let prod = products.child(parentId);
				prod.once('value', function(snapshot) {
					snapshot.forEach(function(items) {
						if (brand == items.val()['brand']) {
							document.getElementById(items.key).style.display = "";
						} else if (brand == 'all') {
							$(".items").css("display", "");
						} else {
							document.getElementById(items.key).style.display = "none";
						}
					});
				});	

			});

		});
	});
})

