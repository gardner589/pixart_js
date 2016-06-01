$(document).on("ready", function(){

var field = $("#color-field")
var brush = $(".brush");
var set = $("#set-color");
var form = $("#form");

form.on("submit", function(form){
  form.preventDefault();
  brush.css("background", field.val());
});

})
