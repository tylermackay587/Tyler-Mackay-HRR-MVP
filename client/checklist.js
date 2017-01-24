console.log("CHECKLIST ACCESSED!");
$(document).ready(function(){
	$(".newTodo").on("click", function(){
		$.ajax({
			method: "POST",
			url: "/todos",
			data: {
				"content": $(".content").val().toString(),
				"priority": $(".priority").val().toString()
			}
		});
	});
});

