import inquirer from "inquirer";
// 1)computer will generate a rendom number
// 2)user input for gussing number
// 3)compare user input with computer genrated number and show result
let systemgenrateno = Math.floor(Math.random() * 20);
let answer = await inquirer.prompt({
    type: "number",
    name: "userguess",
    message: "guess number between 1 to 20",
});
if (answer.userguess === systemgenrateno) {
    console.log("congratulation your guessd number is right");
}
else {
    console.log(`opps!correct number was ${systemgenrateno} please try again`);
}
