// ---------------------------Shooting Game -------------------------------//
//declaring and initializing health variables of the players.
let healthPlayer1= 100;
let healthPlayer2 =100;

// gameNumber variable to keep track of no of games as number of rounds<=5.
let GameNumber=1;

// declaring and initialzing score of both players from 0.
let Score1=0;
let Score2=0;

//adding event listener to the START GAME button . to start the game on click.
btn.addEventListener("click" ,function(){
    //using the set interval function so that function is called after a interval
    //automatically . And declaring i variable as a interval for clearInterval().
    var i=setInterval(function game(){
        const Player1RandomNumber = Math.floor(Math.random() *6 );
        const Player2RandomNumber = Math.floor(Math.random() *6 );
        console.log(Player1RandomNumber);
        console.log(Player2RandomNumber);

        //incrementing the Game-number from 1.
        if(Player1RandomNumber!==Player2RandomNumber){
        document.getElementById("Game-Number").innerHTML=GameNumber;
        }
        //

        if(Player2RandomNumber>Player1RandomNumber){
            var prevScore2= 0;
            Score2++;
            console.log(prevScore2)
            console.log(Score2)
            document.getElementById("player2").innerHTML =Score2;
        }
    
        else if(Player1RandomNumber>Player2RandomNumber){
            var prevScore1= 0;
            Score1++;
            console.log(prevScore1)
            console.log(Score1)
            document.getElementById("player1").innerHTML =Score1;
        }

        else{
            console.log("Draw") 
        }

        // checking the values if one value is greater than other . it 
        //will decrease the health of opponent.
        if(Player1RandomNumber>Player2RandomNumber){
            let reduceBy = 25;
            healthPlayer2 = healthPlayer2-reduceBy;
            console.log(healthPlayer2)
        }
        else if(Player2RandomNumber>Player1RandomNumber){
            let reduceBy = 25;
            healthPlayer1 = healthPlayer1-reduceBy;
            console.log(healthPlayer1)
        }
        else{
            console.log("draw");
        }
        //


        //Condition to check game number if it is> 5 then check both results 
        // and display result. 
        if(GameNumber>=5){
            if(Score1>Score2){
                document.getElementById("Message").innerHTML="Player1 Won the match!";
            }
            else if(Score2>Score1){
            document.getElementById("Message").innerHTML="Player2 won the match!";
            }document.getElementById("Message").innerHTML="It's a Draw !";

        }
        //

        //checking the values for clear interval function.
        if(Score1==3 || Score2 ==3||GameNumber>=5||healthPlayer2==0||healthPlayer1==0){
            clearInterval(i)
        }
        //

        //updating results for diffrent conditions.
        if(Score1==3|| healthPlayer2==0 || healthPlayer1==0){
            document.getElementById("Message").innerHTML="Player1 won the match!";
        }
        else if(Score2==3){
            document.getElementById("Message").innerHTML="Player2 won the match! ";
        }
        GameNumber++;
        //
    },1500)
});



        

