document.getElementById("gamestart").onclick = function(){
  var correct = Math.floor(Math.random() * 5);
  var attempts = 1;

  var game = 1;
  while (game == 1){
    var guess = prompt("Guess a number between 0 and 5:"); //clicking cancel here counts as an attempt

    if (guess == correct){
      game = 0;


    } 
    // end of if statement

    if (guess != correct){
      attempts = attempts + 1;


    } 
    // end of if statement


  } 
  //end of while statement
  document.getElementById("result").innerHTML = "Correct! Attempts taken: " + attempts;

} 
//end of button function
