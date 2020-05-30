// JavaScript File

var age = 16;
var guesses = 1;
document.getElementById("submitguess").onclick = function() {
var number = document.getElementById("number").value;

if(number == age) {
  alert("Congratulations! You guessed my age right in " + guesses + " guess(es)! ");
}
else if (number > age) {
  guesses++;
  alert("Sorry Wrong! Try a smaller number!");
}
else {
  guesses++;
  alert("Sorry Wrong! Try a bigger number!");
}
};