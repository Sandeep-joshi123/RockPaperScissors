let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");  //all choices

const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const genCompChoice = () =>{
    const options = ['rock', 'paper', 'scissors'];
    //rock, paper, scissor
   const randIdx = Math.floor(Math.random() * 3);  //Math.random generates a number between 0 and 1
    // multyply by 3=> number btn 0 and 2; floor=> only integer value
    return options[randIdx];
}

const drawGame = () =>{
    //console.log("game was draw");
    msg.innerText = 'Game was Draw; keep trying 👍';
    msg.style.backgroundColor = 'black';
}

const  showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin)
    {
        //console.log("You won!!");
        msg.innerText = `You won!! 🎉 your ${userChoice} beats  bot's ${compChoice}`;
        msg.style.backgroundColor = 'green';
        userScorePara.innerText = ++userScore; //pre increment
    }
    else{
        //console.log("You lost");
        msg.innerText = `You lost 😞; bot's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = 'red';
        compScorePara.innerText = ++compScore;
    }
}

const playGame = (userChoice) => {
    //console.log("user choice = " + userChoice);

    //generate comp choice
    const compChoice = genCompChoice();
    //console.log("Comp choice = " + compChoice);

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }

    else{
        let userWin = true;
        if(userChoice === 'rock'){  //we can use compchoice also
            userWin = compChoice === 'paper' ? false : true; //if compChoice is not paper then userwin is true
        }

        else if(userChoice === 'paper'){
             //comp choice: rock or scissors
             userWin = compChoice === 'scissors' ? false : true; 
        }

        else{ //userchoice=scissors
            //comp choice: rock or paper
            userWin = compChoice === 'rock' ? false : true; 
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id"); 
       // console.log(`${userChoice} was clicked`);
       playGame(userChoice);
    })
})
