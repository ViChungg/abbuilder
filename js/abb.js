/*js for abb*/
var doc = document;
$(doc).ready(function() {
	/* Shows products */
	$("#sidebar a").click(function(event) {
		event.preventDefault();
		// Diary 
		let ids = doc.getElementsByClassName("tabs");
		for (var i = 0; i < ids.length; i++) {
			if (event.target.href == "file:///C:/Users/Vicky/Desktop/abbuilder/html/diary.html#" + ids[i].id
				 || event.target.href == "file:///C:/Users/Vicky/Desktop/abbuilder/html/products.html#" + ids[i].id) {
				console.log(ids[i].id);
				
				$(ids[i]).siblings().removeClass("div-active");
				$(ids[i]).addClass("div-active");
				$(ids[i]).siblings().css("display", "none");
				$(ids[i]).css("display", "block");
			}
		}
	});
})