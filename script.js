cardArray=["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H"];


var board=document.getElementById("board");

for(var i=0; i<16; i++){
  var cards=document.createElement("div");
  cards.classList.add("cards");
  board.appendChild(cards);

// Change color of cards on click
  cards.addEventListener("click",function(){
    this.style.backgroundColor="blue";
  })
}
