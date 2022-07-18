var player1=document.querySelector(".img1");
var player2=document.querySelector(".img2");
var heading=document.querySelector("h1");



function rollDice(player){
    var random=Math.floor(Math.random()*6)+1;
    player.setAttribute("src","images/dice"+random+".png");
    return random;
}

function play(){
    var dice1=rollDice(player1);
    var dice2=rollDice(player2);
    if(dice1>dice2){
      heading.innerText="Player1 Wins 🔥";
    }
    else if(dice1<dice2){
        heading.innerText="Player2 Wins 🔥";
    }
    else{
        heading.innerText="DRAW 🙌";
    }
}






window.onload=play();