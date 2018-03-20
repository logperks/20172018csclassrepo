var fadetime = 500;

$(document).ready(function() { //when the page is finished loading, will hide content
  $("#experience").hide();     //related to the buttons...
  $("#examples").hide();
  $("#me").hide();
});

$("#aboutme").click(function(){
  $("#me").toggle("fade", fadetime);
});

$("#lists").click(function(){  //...when these buttons are pressed, will show that content
  $("#experience").toggle("fade", fadetime);
});

$("#works").click(function(){ 
  $("#examples").toggle("fade", fadetime);
});
