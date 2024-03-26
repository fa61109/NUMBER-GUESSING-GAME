#! /usr/bin/env node

import inquirer from "inquirer"




const randomNumber = Math .floor(Math.random()* 6 + 1);

const answer = await inquirer.prompt([
 {
   
    type: "number",
    name: "userguessednumber",
    messeage: "please Guess a Number Between 1-10",
}, 
   
]);

if (answer.userguessednumber=== randomNumber){
           console.log("Congratulations! you guessed right number")
}else {
console.log("You guessed wrong number");
}

