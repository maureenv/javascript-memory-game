cardArray=["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H"];


var board=document.getElementById("board");

for(var i=0; i<cardArray.length; i++){
// appending cards
  var cardsBack=document.createElement("div");
  cardsBack.classList.add("cardsBack");
  board.appendChild(cardsBack);
// appending letters to cards
  var letter=document.createElement("p");
  var a=document.createTextNode("A");
  letter.appendChild(a);
  letter.classList.add("textstyle"); //add css styling to text
  cardsBack.appendChild(letter);


// Change color of cards on click
cardsBack.addEventListener("click",function(){
    this.classList.toggle("cardsFront");

    })
}
