console.log("CHECKLIST ACCESSED!");
$(document).ready(function(){
    $.ajax({
      method: "GET",
      url: "/todos",
      success: function(data){
        $(".todo").remove();
          data.forEach(function(todo){
            $("body").append(
              "<div class='todo'>" + todo.content.toString() +  "<br>" +
              "priority: " + todo.priority.toString() + "</div>");
          });
        }
      });
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
          "<div class='todo' id='" + todo.id + "' class='"+ todo.priority + "'>" + todo.content.toString() +  "<br>" +
          "priority: " + todo.priority.toString() + "</div>");
        });
      }
    });
	});
  $('body').on('click', ".todo", function(){
    $.ajax({
      method: "DELETE",
      url: "/todos",
      data: {
        id: this.id
      }
    })
    $("#" + this.id).remove();
  });
});
