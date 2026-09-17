import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const randomNum = Math.floor(Math.random() * 100) + 1;

let choicesLeft;
let attempts = 0;

const showMenu = () => {
    console.log("Welcome to the Number Guessing Game!");
    console.log("I'm thinking of a number between 1 and 100.");
    console.log("Please select the difficulty level:");
    console.log("1. Easy (10 chances)");
    console.log("2. Medium (5 chances)");
    console.log("3. Hard (3 chances)");

    rl.question("Enter your choice: ", handleInput);
};

const askGuess = () => {
    rl.question("Enter your guess: ", (guess) => {

        const userGuess = Number(guess);

        if (Number.isNaN(userGuess)) {
            console.log("Only numeric values are allowed!");
            askGuess();
            return;
        }

        attempts++;

        if (userGuess === randomNum) {
            console.log(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
            rl.close();
            return;
        }

        choicesLeft--;

        if (choicesLeft === 0) {
            console.log(`Game Over. The number was ${randomNum}.`);
            rl.close();
            return;
        }

        if (userGuess > randomNum) {
            console.log("Incorrect! The number is less than your guess.");
        } else {
            console.log("Incorrect! The number is greater than your guess.");
        }

        console.log(`You have ${choicesLeft} chances left.`);

        askGuess();
    });
};

const handleInput = (level) => {

    attempts = 0;

    if (level === "1") {
        console.log("Great! You have selected the Easy difficulty level.");
        console.log("Let's start the game!");

        choicesLeft = 10;
        askGuess();

    } else if (level === "2") {
        console.log("Great! You have selected the Medium difficulty level.");
        console.log("Let's start the game!");

        choicesLeft = 5;
        askGuess();

    } else if (level === "3") {
        console.log("Great! You have selected the Hard difficulty level.");
        console.log("Let's start the game!");

        choicesLeft = 3;
        askGuess();

    } else {
        console.log("Invalid Choice!");
        showMenu();
    }
};

showMenu();
