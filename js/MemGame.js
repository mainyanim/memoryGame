var MemGame = {};
//namespace initialized

MemGame.imgArray = ['pic/s1.jpg','pic/s2.jpg','pic/s3.jpg', 'pic/s4.jpg', 'pic/s5.jpg', 'pic/s6.jpg', 'pic/s1.jpg','pic/s2.jpg','pic/s3.jpg', 'pic/s4.jpg', 'pic/s5.jpg', 'pic/s6.jpg']; //this should be an array of paths to imgs
MemGame.s;
MemGame.board = document.getElementById("board");
MemGame.numChosen = 0;
MemGame.one;
MemGame.two;
MemGame.win = 0;

MemGame.startTimer= function() {
  MemGame.s = setTimeout(MemGame.control, 1500)
};

MemGame.stopTimer = function () {
  clearInterval(MemGame.s);
}

MemGame.clicks = function (e){
  var index = parseInt(e.target.id) -1;
  if (MemGame.numChosen == 0) {
  MemGame.one = e.target;

  document.images[index].src = MemGame.imgArray[index];
  MemGame.numChosen = 1;
} else {
  MemGame.numChosen = 2;
  MemGame.two = e.target;
  document.images[index].src = MemGame.imgArray[index];
  MemGame.startTimer();
}
}

MemGame.control = function() {
  MemGame.numChosen = 0;
  MemGame.stopTimer();
  if(MemGame.one.src === MemGame.two.src) {
    MemGame.win++;
    MemGame.numChosen = 0;

  } else if (MemGame.one.src!==MemGame.two.src) {
    MemGame.one.src = "pic/c.jpg";
    MemGame.two.src = "pic/c.jpg";
  } else if (MemGame.win == MemGame.imgArray.length/2) {
    document.getElementById("winner").innerHTML = "Congratulations!";
  }
}

MemGame.randomize  = function() {
      for (var i = MemGame.imgArray.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = MemGame.imgArray[i];
          MemGame.imgArray[i] = MemGame.imgArray[j];
          MemGame.imgArray[j] = temp;
      }
      return MemGame.imgArray;
  };


//board created
MemGame.createBoard = function(){
  var myBoard = document.createElement('div');
  myBoard.id = "board";
  document.body.appendChild(myBoard);
  var greets = document.createElement('h1');
  greets.id = "winner";
  greets.textContent = "Welcome to Memory Game!";
  myBoard.appendChild(greets);
  for(var i = 0; i < MemGame.imgArray.length; i++){
    var card = document.createElement("img");
    card.src = "pic/c.jpg";
    myBoard.appendChild(card);
    card.id = i+1; //MemGame.imgArray[i];
    card.className = "hidden";
    card.addEventListener("click", MemGame.clicks);
    }
};


  MemGame.main = function(){
  MemGame.createBoard();
  MemGame.randomize();
  //MemGame.control();

};

MemGame.main();
