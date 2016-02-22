cardArray=["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H"];


///////////////////////////////////////// SHUFFLE DECK
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
///////////////////////// End shuffle DECK

shuffleDeck();
console.log(cardArray);
var board=document.getElementById("board");

for(var i=0; i<cardArray.length; i++){

// appending cards to board
  var cardsBack=document.createElement("div");
  cardsBack.classList.add("cardsBack");
  board.appendChild(cardsBack);

// appending letters to cards
  var letter=document.createElement("p");
  var arrayNumber=document.createTextNode(cardArray[i]);
  letter.appendChild(arrayNumber);
  letter.classList.add("textstyle"); //add css styling to text
  cardsBack.appendChild(letter);

// data-deck-position finder
cardsBack.setAttribute("data-deck-position", i);

// Change color of cards on click
cardsBack.addEventListener("click",function(){
    this.classList.toggle("cardsFront");
    game(this.getAttribute("data-deck-position"));
  })

} // close for loop

var game=function(x){
  var value=document.getElementsByClassName("cardsBack");
  console.log(value[x]);
}
