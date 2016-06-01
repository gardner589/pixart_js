$(document).on("ready", function(){

var field = $("#color-field")
var brush = $(".brush");
var set = $("#set-color");
var form = $("#form");
//ar elem = $('<div class="square"></div>');

form.on("submit", function(form){
  form.preventDefault();
  brush.css("background", field.val());

  for (var i = 0; i <= 20; i++){
    elem = "<div class='square'></div>";
    $("body").append(elem);
 }

});

})
