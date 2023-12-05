/* =========================================================================
* Math Program version 0.1
* 
* PURPOSE: TO create program that allows my children to be able to learn programming and math!
*
* Create your own math problems with up to 5 digits per set (2).
* step 1: Choose your own number (up to 5 digits).
* step 2: Choose another number (up to 5 digits).
* step 3: Choose the mathematical operator to perform against the 2 numbers.
*
* Added functionality:
* ability to continue playing the math game w/ a yes/no question.
===========================================================================*/
// readline is for being able to accept terminal/console user input with Node.js
// This is much different from what other languages will have to perform a write to the console
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Program opening
function mathProgramV01() {
    console.log('Welcome to my Math Program\n\n version 0.1');
    // Recursive Program to continue playing
    function recursiveMathProgram() {
        // How we use readline
        rl.question("Please enter the first number (up to 5 digits)): ", (inputOne) => {
            if (!isInteger(inputOne)) {
                console.log('Please, only a whole number above 0.');
                recursiveMathProgram();
                return;
            }
            // Used to change the user input from a string to an integer
            let topNumber = parseInt(inputOne);

            rl.question("Enter the bottom number (up to 5 digits): ", (inputTwo) => {
                //? ! === 'bang' === NOT 
                if (!isInteger(inputTwo)) {
                    console.log('Please, only a whole number above 0.');
                    recursiveMathProgram();
                }

                let bottomNumber = parseInt(inputTwo);

                console.log('\n Choose your operation: ');
                rl.question('\n add = +, subtract = -, multiply = *, divide = / : ', (userOperator) => {

                    let answer = 0;
                    //? SWITCH case for operation answer
                    // Is this the easiest way?
                    // Truthy!?
                    switch (userOperator) {
                        case '+':
                            answer = topNumber + bottomNumber;
                            break;
                        case '-':
                            answer = topNumber - bottomNumber;
                            break;
                        case '*':
                            answer = topNumber * bottomNumber;
                            break;
                        case '/':
                            //* Cannot divide by 0; can cause a crash, errors, and more unexpected results
                            // Maybe test and see the differences in different languages.
                            if (topNumber === 0 || bottomNumber === 0) {
                                console.log('Dividing by zero will always be zero!\n Try again');
                                // If wrong answer: start program again
                                recursiveMathProgram();
                            } else {
                                answer = topNumber / bottomNumber;
                            }
                            break;
                        default:
                            console.log('Please choose a valid operation');
                            // If correct answer: start program again
                            recursiveMathProgram();
                            break;
                    }

                    //? USER GUESS
                    // After a guess has been made: User has ability to restart the program
                    // TODO: Change to have user continue trying until right answer is achieved or an amount of attempts have been completed.
                    console.log(`You have chosen:\n ${topNumber} ${userOperator} ${bottomNumber} =`);
                    rl.question('Enter your answer: ', (userAnswer) => {
                        if (parseInt(userAnswer) !== answer) {
                            console.log(`${userAnswer} is incorrect. Please try again!`);

                        } else {
                            console.log(`${userAnswer} is correct.`);

                        }

                        rl.question('Do you want to play again y/n: ', (again) => {
                            if (again === 'y' || again === 'Y') {
                                recursiveMathProgram();
                            } else {
                                rl.close();
                            }
                        })

                    })

                });
            });
        })
    }
    recursiveMathProgram();
}


// Helper function to verify if user input is an integer
// We place this at the bottom, could be in another file itself
// EDGE CASES: Does this fulfill all/enough edge cases for the program?
function isInteger(input) {
    return Number.isInteger(Number(input));
}


// Call the function to start the program
mathProgramV01();



