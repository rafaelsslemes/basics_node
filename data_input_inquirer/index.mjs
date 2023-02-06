import inquirer from 'inquirer';


// inquirer returns a promiss, similar to futures in Dart
// .then is called on complete
// .catch is called on exception
inquirer.prompt([
    {
        name: 'question1',
        message: 'Type your name...'
    },
    {
        name: 'question2',
        message: 'Type your age...'
    },
]).then((answers)=>showResults(answers))
.catch((err)=>handleErrors(err));


function showResults(answers){
    console.log(answers);
    var age = parseInt(answers.q2);
}

function handleErrors(err){
    console.log(err);
}