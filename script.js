cardArray=["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H"];

//// SHUFFLE DECK
var shuffleDeck=function(){
   // Using the Fisher-Yates (Knuth) shuffle
    var currentIndex = cardArray.length
      , temporaryValue
      , randomIndex;

   // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = cardArray[currentIndex];
      cardArray[currentIndex] = cardArray[randomIndex];
      cardArray[randomIndex] = temporaryValue;
    }
  }

shuffleDeck();

var board=document.getElementById("board");

for(var i=0; i<cardArray.length; i++){

// appending cards to board
  var cardsBack=document.createElement("div");
  cardsBack.classList.add("cardsBack");
  board.appendChild(cardsBack);

// appending letters to cards
  var letter=document.createElement("p");
  var a=document.createTextNode(cardArray[i]);
  letter.appendChild(a);
  letter.classList.add("textstyle"); //add css styling to text
  cardsBack.appendChild(letter);


// Change color of cards on click
cardsBack.addEventListener("click",function(){
    this.classList.toggle("cardsFront");
    })
} // close for loop
