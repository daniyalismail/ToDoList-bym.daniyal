import inquirer from "inquirer";
let todo = [];
let todoQuestions;
do {
    todoQuestions = await inquirer.prompt([
        {
            name: "ListElements",
            type: "input",
            message: "What Do You Want To Add In Your List = ",
        },
        {
            message: "Wanna Add More Int The List (Yes Or No) = ",
            type: "confirm",
            name: "AddConfirm",
        },
    ]);
    todo.push(todoQuestions.ListElements);
} while (todoQuestions.AddConfirm == true);
console.log(todo);
