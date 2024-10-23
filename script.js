var factList = [
  "Fact 1", // fact number 1
  "Fact 2", // fact number 2
  "Fact 3", // fact number 3
  "Fact 4", // fact number 4
];

var fact = document.getElementById("fact"); // getting an element by the tag fact and gets an element by ID
var myBtn = document.getElementById("myBtn"); // gets an element by the tag myBtn and gets an element by ID
var count = 0;  //makes the variable count 0

myBtn.addEventListener("click", displayFact); //displays the fact

function displayFact() {  //makes the function display fact
  fact.innerHTML = factList[count];  //makes the fact inner HTML the same as the factList
  count = (count + 1) % factList.length; // Cycles through the facts
}

// Optional: Random Fact Function
function displayRandomFact() {  //this function displays a random fact
  var randomIndex = Math.floor(Math.random() * factList.length); // sets the variable to a random index
  fact.innerHTML = factList[randomIndex];  //makes the fact the same as the Fact List
}

