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
        $.ajax({
            method: "GET",
            url: "/todos",
            success: function(data){
                $(".todo").remove();
                data.forEach(function(todo){
                    $("body").append(
                        "<div class='todo'>" + todo.content.toString() +  "<br>" +
                        "priority: " + todo.priority.toString() + "<br> </div>" + "<br>");
                });
            }
        });
	});
});

