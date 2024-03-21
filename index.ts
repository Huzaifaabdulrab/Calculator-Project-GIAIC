#! /usr/bin/env node
import inquirer from "inquirer";

import chalk from "chalk";

const answer = await inquirer.prompt([
    {
        name: "Num1",
        type: "number",
        message: chalk.yellow("Enter first number :")
    },
    {
        name: "Num2",
        type: "number",
        message: chalk.yellow("Enter second number :"),
    },
    {
        name: "operator",
        type: "list",
        message:(
            "Select one of the operator to perfom action"
        ),
        choices: [
            chalk.blue.bold.blueBright("Addition"),
            chalk.red.bold.redBright("Subtraction"),
            chalk.green.bold.greenBright("Multipilication"),
            chalk.magenta.bold.magentaBright("Divison"),
            chalk.yellow.bold.yellowBright("Mudules"),
        ],
    },
]);
if (answer.operator === chalk.blue.bold.blueBright("Addition")) {
    console.log(
        chalk.blue.bold(
            `${answer.Num1} + ${answer.Num2} = ${answer.Num1 + answer.Num2}`
        )
    );
} else if (answer.operator === chalk.red.bold.redBright("Subtraction")) {
    console.log(
        chalk.red.bold(
            `${answer.Num1} - ${answer.Num2} = ${answer.Num1 - answer.Num2}`
        )
    );
} else if (answer.operator === chalk.green.bold.greenBright("Multipilication")) {
    console.log(
        chalk.green.bold(
            `${answer.Num1} * ${answer.Num2} = ${answer.Num1 * answer.Num2}`
        )
    );
} else if (answer.operator === chalk.magenta.bold.magentaBright("Divison")) {
    console.log(
        chalk.magenta.bold(
            `${answer.Num1} / ${answer.Num2} = ${answer.Num1 / answer.Num2}`
        )
    );
} else if (answer.operator === chalk.yellow.bold.yellowBright("Mudules")) {
    console.log(
        chalk.yellow.bold(
            `${answer.Num1} % ${answer.Num2} = ${answer.Num1 - answer.Num2}`
        )
    );
} else {
    console.log(chalk.red.strikethrough("Inivild Try Again"));
}
