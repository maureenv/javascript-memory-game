My game link http://maureenv.github.io/project1/

This is a memory game created using Javascript, CSS and HTML.

Approach taken (pseudocode);
* Set up a board with cards
* Create an array of letter pairs
* Shuffle the cards in the array
* Attach each individual letter to a card on the board
* Create a front and back side to the card. Front side has the letter.
* Use an event listener to toggle between front and backside of the card
* Allow the player to click on two cards at a time
* Compare the letters of the two cards that are clicked
* If the letters on the card match, the cards should stay facing forward, if not the cards should turn back around.
* Clear the array that is storing the two cards that are compared so that two new cards can be selected
* The player will continue playing until all cards are matched


Installation Instructions: It runs on the browser, no installation required.
Technology used: HTML, CSS, Javascript

User Story:
* The user should be able to click on cards
* The user should be able to click on two cards and have the computer compare them
* The user should be able to see if the cards they clicked matched or not (cards have same image)
* The user should know if the cards they clicked don't match (non-matching cards flip to back side)
* The user should know if the cards they clicked match (matching cards stay facing forward)

Unsolved Problems/ Challenges

The original game I created compared letters to see if the letters match. However, I wanted to change the game so that, the player has to compare images instead of letters. I used images of my artwork to use in my game and cropped them down to the appropriate size.

I thought that because my game works when I'm using letters, I can just replace the letters with images and the game will continue to work. However, I came across many issues. Because I'm using images, I had to manipulate the <img> tag, and the image class in order to get the game to work.

When a user clicks on two cards, it pushes them into an array called clickedCard, and also attaches a class of match. If the cards match, they keep the class of match, if not, the class of match is removed, this way I can target only the cards that aren't matching so that I can flip them back around. All of this worked when the cards had letters on them, but stopped working when the letters were replaced with images.  

The issue arose because when I switched the text for images on my cards, I had to select all the divs with a class of image but NOT a class of match. After getting help from the GA instructors, we came up with this solution:

```javascript
var frontCards = document.querySelectorAll("div.image:not(.match)");
```

Overall, I learned a lot from making this game. There's still a lot I can do to improve the game and will continue to add to it when I learn more.  
