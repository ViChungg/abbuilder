/*js for abb*/
var doc = document;
$(doc).ready(function() {
	/* Shows products */
	$("#sidebar a").click(function(event) {
		event.preventDefault();
		let ids = doc.getElementsByClassName("tabs");
		for (var i = 0; i < ids.length; i++) {
			if (event.target.id.slice(4) == ids[i].id) {
				console.log(ids[i].id);
				
				$(ids[i]).siblings().removeClass("div-active");
				$(ids[i]).addClass("div-active");
				$(ids[i]).siblings().css("display", "none");
				$(ids[i]).css("display", "block");
			}
		}
	});
})