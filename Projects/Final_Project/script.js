var bettotal = 0;
var money = 10;

document.getElementById("betamount").innerHTML = bettotal;
document.getElementById("moneyamount").innerHTML = money;

document.getElementById("betincrease").onclick = function(){
  document.getElementById("plusorminus").innerHTML = " ";
  document.getElementById("numberchange").innerHTML = " ";
  
  bettotal = bettotal + 1;
  money = money - 1;
  
  while (money < 0){
    alert("You do not have any more money to bet!");
    bettotal = bettotal - 1;
    money = money + 1;
  }
  
  document.getElementById("betamount").innerHTML = bettotal;
  document.getElementById("moneyamount").innerHTML = money;
}; // end of + button function

document.getElementById("betdecrease").onclick = function(){
  document.getElementById("plusorminus").innerHTML = " ";
  document.getElementById("numberchange").innerHTML = " ";
  
  bettotal = bettotal - 1;
  money = money + 1;
  while (bettotal < 0){
    alert("You cannot have a negative bet!");
    money = money - 1;
    bettotal = bettotal + 1;
  }
  
  document.getElementById("betamount").innerHTML = bettotal;
  document.getElementById("moneyamount").innerHTML = money;
}; // end of - button function

document.getElementById("allinbutton").onclick = function(){
  if (bettotal >= 1){
    money = money + bettotal;
    bettotal = money;
    money = 0;
  } else {
    bettotal = money;
    money = 0;
  }
  
  document.getElementById("betamount").innerHTML = bettotal;
  document.getElementById("moneyamount").innerHTML = money;
}; // end of all in button function

document.getElementById("rollbutton").onclick = function(){
  document.getElementById("plusorminus").innerHTML = " ";
  document.getElementById("numberchange").innerHTML = " ";
  
  var playing = 1;
  while (playing == 1){
    document.getElementById("betincrease").disabled = true;
    document.getElementById("betdecrease").disabled = true;
    document.getElementById("allinbutton").disabled = true;
    
    document.getElementById("rollbutton").innerHTML = "Roll";
    var diceone = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    var dicetwo = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    document.getElementById("dice1").src = "Dice" + diceone + ".gif"; 
    document.getElementById("dice2").src = "Dice" + dicetwo + ".gif"; 
    
    if (diceone + dicetwo == 2 || diceone + dicetwo == 3 || diceone + dicetwo == 11){
      document.getElementById("rollbutton").innerHTML = "You lose! Click here to play again!";
      
      document.getElementById("betincrease").disabled = false;
      document.getElementById("betdecrease").disabled = false;
      document.getElementById("allinbutton").disabled = false;
      
      document.getElementById("numberchange").innerHTML = bettotal;
      
      bettotal = 0;
      document.getElementById("betamount").innerHTML = bettotal;
      document.getElementById("moneyamount").innerHTML = money;
      document.getElementById("plusorminus").innerHTML = "-";
      setTimeout(function(){
        if (money === 0){
          alert("You seem to have run out of money... Refresh the page to play again. Or continue to play but with no 'money' involved.");
        }
      }, 1000); //end of timeout function
      
    } if (diceone + dicetwo == 7){
      document.getElementById("rollbutton").innerHTML = "You win! Click here to play again!";
      playing = 0;
      
      document.getElementById("numberchange").innerHTML = bettotal * 2;
      
      money = money + (bettotal * 2);
      bettotal = 0;
      document.getElementById("betamount").innerHTML = bettotal;
      document.getElementById("moneyamount").innerHTML = money;
      document.getElementById("plusorminus").innerHTML = "+";
      
    } else {
        document.getElementByID("rollbutton").innerHTML = "Roll";
    } //end of if statement
    
  } //end of while statement

document.getElementById("betincrease").disabled = false;
document.getElementById("betdecrease").disabled = false;
document.getElementById("allinbutton").disabled = false;
}; // end of roll button function
