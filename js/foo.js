var MemGame = {};
MemGame.imgArray = [1,2,3,4,5,6,7,8,9,10,11,12];
//var image = "/pic/s" + MemGame.imgArray[4] + ".jpg";
MemGame.board = document.getElementById("board");
MemGame.correctAnswers = [];
MemGame.numberOfClicked = 0;
MemGame.fcard = 0;//src of the 1st clicked image
MemGame.scard = 0;//src of the 2nd clicked image

MemGame.randomizeArray = function(){
  return;
};


MemGame.createBoard = function(){
  var myBoard = document.createElement('div');
  myBoard.id = "board";
  document.body.appendChild(myBoard);
  for(var i = 0; i < MemGame.imgArray.length; i++){
    var card = document.createElement("img");
    card.src = "pic/c.jpg";
    myBoard.appendChild(card);
    card.id = MemGame.imgArray[i];
    card.className = "hidden";
    card.addEventListener("click", MemGame.toCheck);
    }
};



MemGame.toCheck = function (e) {
var fcard = e.target.id;
e.target.src = "pic/s"+MemGame.imgArray[parseInt(fcard)-1]+".jpg";
 //means where i clicked
}

  MemGame.main = (function(){
  MemGame.createBoard();
  MemGame.randomizeArray();

});

MemGame.main();
