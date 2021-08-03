
console.log('Lets start the app')
//* variables
let account = 0;
//* Start
alert('Welcome to the Landscraper Game');
alert('You are starting a landscaping business, but all you have are your teeth.');
//* User teeth
for (let counter = 1; counter <= 5; counter++){
    alert('Your balance is ' + account + '. Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.')
    let userInput = prompt("Type 'teeth' to cut the lawn")
    //
    if (userInput.toLowerCase() === 'teeth'){
        account += 1
    } else if (userInput.toLowerCase() === 'quit'){
        break;
    }
};
//* User rusty scissors
for (let counter = 6; counter <= 25; counter++){
    alert('Your balance is ' + account + '. Using the rusty scissors, you can spend the day cutting lawns and make $5. You can do this as much as you want.')
    let userInput = prompt("Type 'scissors' to cut the lawn")
    //
    if (userInput.toLowerCase() === 'scissors'){
        account += 5
    } else if (userInput.toLowerCase() === 'quit'){
        break;
    }
};
//old-timey push lawnmower
for (let counter = 30; counter <= 250; counter++){
    alert('Your balance is ' + account + '. Using the old-timey push lawnmower, you can spend the day cutting lawns and make $50. You can do this as much as you want.')
    let userInput = prompt("Type 'old-timey push lawnmower' to cut the lawn")
    //
    if (userInput.toLowerCase() === 'old-timey push lawnmower'){
        account += 50
    } else if (userInput.toLowerCase() === 'quit'){
        break;
    }
};

//fancy battery-powered lawnmower
for (let counter = 300; counter <= 500; counter++){
    alert('Your balance is ' + account + '. Using the the fancy battery-powered lawnmower, you can spend the day cutting lawns and make $100. You can do this as much as you want.')
    let userInput = prompt("Type 'fancy battery-powered lawnmower' to cut the lawn")
    //
    if (userInput.toLowerCase() === 'fancy battery-powered lawnmower'){
        account += 100
    } else if (userInput.toLowerCase() === 'quit'){
        break;
    }
};

//A team of starving students 
for (let counter = 600; counter < 1000; counter++){
    alert('Your balance is ' + account + '. Using the the team of starving students, you can spend the day cutting lawns and make $250. You can do this as much as you want.')
    let userInput = prompt("Type 'starving students' to cut the lawn")
    //
    if (userInput.toLowerCase() === 'starving students'){
        account += 250
    } 
    else if (counter =1000){
        (userInput.toLowerCase() === 'You won')
    }
    if (userInput.toLowerCase() === 'quit'){
        break;
    }
};

//* Variables
const tools = ['teeth', 'rusty scissors', ' old-timey push lawnmower', 'fancy battery-powered lawnmower', 'hire a team of starving students'];
// Start
alert('Welcome to Landscraper')
alert('You are starting a landscaping business, but all you have are your teeth.')
alert('Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.')
let userInput = prompt("Your account balance is " + account + ". Enter 'Teeth' to start cutting: ").toLocaleLowerCase()
console.log(userInput)
console.log()
if (userInput === tools[0]){
    account += 1
}