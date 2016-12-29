var memGame {};

memGame.imgArray = [1,2,3,4,5,6,7,8,9,10,11,12];

memGame.createBoard = function() {
  var myBoard = document.createElement('div');
  document.body.appendChild(myBoard);
  for (var i = 0; i < memGame.imgArray.length; i++) {
    var card = document.createElement('img');
    card.className = "pic";
    card.src = "pic/s"+memGame.imgArray[i]+".jpg";
    myBoard.appendChild(card);
  }
}

memGame.main = function {
memGame.createBoard();
memGame.randomizeArray();
}

memGame.main();
