const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mathProgramV01() {
    console.log('Welcome to my Math Program\n\n version 0.1');

    function startProgram() {
        rl.question("Please enter the first number (up to 5 digits): ", (input1) => {
            if (!isInteger(input1)) {
                console.log('Please, only a whole number above 0.');
                startProgram(); // Repeat the program
                return;
            }

            let topNumber = parseInt(input1);

            rl.question("Enter the bottom number (up to 5 digits): ", (input2) => {
                if (!isInteger(input2)) {
                    console.log('Please, only a whole number above 0.');
                    startProgram(); // Repeat the program
                    return;
                }

                let bottomNumber = parseInt(input2);

                console.log('\n Choose your operation: ');
                rl.question('\n add = +, subtract = -, multiply = *, divide = / : ', (userOperator) => {

                    let answer = 0;
                    // SWITCH case for answer
                    switch (userOperator) {
                        case '+':
                            answer = topNumber + bottomNumber;
                            break;
                        case '-':
                            answer = `${topNumber} - ${bottomNumber}`;
                            break;
                        case '*':
                            answer = `${topNumber} * ${bottomNumber}`;
                            break;
                        case '/':
                            // cannot divide by 0;
                            if (topNumber === 0 || bottomNumber === 0) {
                                console.log('Dividing by zero will always be zero!');
                            } else {
                                answer = `${topNumber} / ${bottomNumber}`;
                            }
                            break;
                        default:
                            console.log('Please choose a valid operation');
                            break;
                    }

                    // USER GUESS
                    console.log(`You have chosen:\n ${topNumber} ${userOperator} ${bottomNumber} =`);
                    rl.question('Enter your answer: ', (userAnswer) => {
                        if (parseInt(userAnswer) !== answer) {
                            console.log(`${userAnswer} is incorrect. Please try again!`);
                        } else {
                            console.log(`${userAnswer} is correct.`);
                        }

                        // Ask the user if they want to repeat the program
                        rl.question('Do you want to perform another calculation? (yes/no): ', (repeat) => {
                            if (repeat.toLowerCase() === 'yes') {
                                startProgram(); // Repeat the program
                            } else {
                                rl.close(); // Close the readline interface
                            }
                        });
                    });
                });
            });
        });
    }

    startProgram(); // Start the program for the first time
}

function isInteger(input) {
    return Number.isInteger(Number(input));
}

mathProgramV01();
