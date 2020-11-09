//Katelyn Blackburn, EECS 368 JavaScript Game

var player="Yellow";
window.onload=makeBoard;

//Creates the board. Calls the play() function
function makeBoard() {
        // create a table
        var brd = document.createElement("table");

        // loop that creates rows
        for (var r = 0; r < 10; r++) {
          var row = document.createElement("tr");
          // loop that creates columns
             for (var c = 0; c < 10; c++) {
                var space = document.createElement("td");
                space.setAttribute("bgcolor", "white");
                space.setAttribute("id", "space_" + r + "_" + c);

                row.appendChild(space);
            }
            brd.appendChild(row);
        }
     board.appendChild(brd);
     play();
}

//Run the playing of the game
function play()
{
  //Event listener for pressing the button
    document.querySelector("#button").addEventListener("click", () =>{
      let input = document.querySelector("#colNum").value;
      document.querySelector("#colNum").value = "";
      let number = parseFloat(input);
      document.querySelector("#playing").innerText = player + "'s Turn!";
      placePiece(number);
    })

  //Event listener for pressing the enter key
    document.querySelector("#colNum").addEventListener("keypress", function(e) {
      if(e.keyCode===13){
        let input = document.querySelector("#colNum").value;
        document.querySelector("#colNum").value = "";
        let number = parseFloat(input);
        document.querySelector("#playing").innerText = player + "'s Turn!";
        placePiece(number);
      }
    })
}

//Switches the players
function otherPlayer() {
  if(player == "Yellow")
  {
    player="Blue";
  }
  else if (player=="Blue"){
    player="Yellow"
  }
}

//Inputs a piece into the board
function placePiece(input)
{
  otherPlayer();

  for(var i=9; i>=0; i--)
  {
    if(document.getElementById("space_"+i+"_"+(input-1)).getAttribute("bgcolor") == "white")
    {
      document.getElementById("space_"+i+"_"+(input-1)).setAttribute("bgcolor", player);
      break;
    }
  }
}




/*  NOTE
 * I previously had my the bulk of my play() function in a do-while loop that
 * used my gameOver() function, as well as the other functions below,
 * to check if a player had won the game.
 * I could not get it to function correctly, but I thought I would leave
 * in some of the code I was working on for it.
*/



/*
//returns true if 5 in a row, false otherwise
function gameOver(whoIsPlaying, howMany, r, c)
{
  for(var r=9; r>=0; r--)
  {
      if(howMany==5){
        return true;
      }
      else if(toTheSide(r,c,whoIsPlaying) == true){
        gameOver(whoIsPlaying,(howMany+1), r, (c+1));
        return true;
      }
      else if(above(r,c,whoIsPlaying) == true){
        gameOver(player,(howMany+1), (r-1), c);
        return true;
      }
      else if(diagonal(r,c,whoIsPlaying) == true){
        gameOver(player,(howMany+1), (r-1), (c+1));
        return true;
      }
      else{
        return false;
      }
  }
}

//checks for same colored tiles to the side
function toTheSide(r, c, whoIsPlaying)
{
  if(document.getElementById("space_"+r+"_"+(c+1)).getAttribute("bgcolor") == player)
  {
    return true;
  }
  else{
    return false;
  }
}

//checks for same colored tiles above
function above(r, c, whoIsPlaying)
{
  if(document.getElementById("space_"+(r-1)+"_"+(c)).getAttribute("bgcolor") == player)
  {
    return true;
  }
  else{
    return false;
  }
}

//checks for same color tile in diagonal directions
function diagonal(r, c, whoIsPlaying)
{
  if(document.getElementById("space_"+(r-1)+"_"+(c+1)).getAttribute("bgcolor") == player)
  {
    return true;
  }
  else{
    return false;
  }
}*/
