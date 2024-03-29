#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number - Done.

// 2) User input for guessing number - Done.

// 3) compare user input with computer generate number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);

console.log("Welcome to number Guessing Game");

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10: ",
    },
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("congtratulation! you guesses right number.");
}
else{
    console.log("you guessed wrong number.");
}

 
       

