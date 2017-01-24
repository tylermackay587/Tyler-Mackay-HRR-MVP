console.log("CHECKLIST ACCESSED!");
$(document).ready(function(){
	$("button").on("click", function(){
		$.ajax({
			method: "POST",
			url: "/todos",
			data: {
				"content": "this is test message hmm yes!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
				"priority": "ultra-high"
			}

		});
	});
});

