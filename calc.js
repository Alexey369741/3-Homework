const action = getAction();
const operantA = getOperant ('A');
const operantB = getOperant ('B');
const result = calculate(operantA, operantB, action);

showResult(operantA, operantB, action, result);

function getAction() {
    let action;

    do {
        action = prompt('What operation do you want to do? + - * /');
    } while (!isActionValid(action));

    return action;
}

function isActionValid(action){
    return action === '+' || action === '-' || action === '*' || action === '/' ;
}

function getOperant(operantName) {
    let operant;

    do {
        operant = Number(prompt(`Enter operant ${operantName}`));
    } while (isNaN(operant));

    return operant;
}

function calculate(operantA, operantB, action) {
    switch (action) {
        case '+': return add(operantA, operantB);
        case '-': return sub(operantA, operantB);
        case '*': return mult(operantA, operantB);
        case '/': return div(operantA, operantB);
        default: return 'Wrong action';
    }
}

function add(operantA,operantB) {
    return operantA + operantB;
}

function sub(operantA,operantB) {
    return operantA - operantB;
}

function mult(operantA,operantB) {
    return operantA * operantB;
}

function div(operantA,operantB) {
    return operantA / operantB;
}

function showResult(operantA, operantB, action, result) {
    console.log(`${operantA} ${action} ${operantB} = ${result}`);
}
