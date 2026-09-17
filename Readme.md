# Number Guessing Game

A simple CLI-based number guessing game built with Node.js.

The computer randomly selects a number between 1 and 100, and the player has a limited number of chances to guess the correct number.

## Features

- Random number between 1 and 100
- Three difficulty levels
- Easy: 10 chances
- Medium: 5 chances
- Hard: 3 chances
- Command-line user input
- Numeric input validation
- Attempt tracking
- Higher/lower hints
- Game over when all chances are used
- Congratulations message when the correct number is guessed

## Technologies

- JavaScript
- Node.js
- Node.js `readline` module

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your computer.

You can check your Node.js version with:

```bash
node --version
```

### Installation

Clone the repository:

```bash
git clone https://github.com/heydasrat/number-guessing-game.git
```

Go into the project directory:

```bash
cd number-guessing-game
```

### Run the Game

Run the following command:

```bash
node app.js
```

## How to Play

1. Start the game.
2. Choose a difficulty level.
3. Enter your guess between 1 and 100.
4. The game tells you whether the number is greater or less than your guess.
5. Keep guessing until you find the correct number or run out of chances.

## Example

```text
Welcome to the Number Guessing Game!

I'm thinking of a number between 1 and 100.

Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)

Enter your choice: 2

Great! You have selected the Medium difficulty level.
Let's start the game!

Enter your guess: 50
Incorrect! The number is less than your guess.
You have 4 chances left.

Enter your guess: 25
Incorrect! The number is greater than your guess.
You have 3 chances left.

Enter your guess: 37
Congratulations! You guessed the correct number in 3 attempts.
```

## What I Learned

This project helped me practice:

- Working with Node.js `readline`
- Taking input from the command line
- Handling asynchronous callbacks
- Generating random numbers with `Math.random()`
- Converting strings to numbers
- Validating user input
- Using conditional statements
- Tracking attempts and remaining chances
- Building a small CLI application

## Future Improvements

I may add the following features in future versions:

- Multiple game rounds
- Timer to track game duration
- Hint system
- High-score tracking
- Improved input handling

## Project

This project was built as part of the roadmap.sh Number Guessing Game challenge.

**Roadmap Project:**  
[https://roadmap.sh/projects/number-guessing-game](https://roadmap.sh/projects/number-guessing-game)

**GitHub Repository:**  
[https://github.com/heydasrat/number-guessing-game](https://github.com/heydasrat/number-guessing-game)

## Author

**Dasrat Kumar Deewan**

GitHub:  
[https://github.com/heydasrat](https://github.com/heydasrat)