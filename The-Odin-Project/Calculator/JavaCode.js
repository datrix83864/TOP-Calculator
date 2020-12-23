function operate(n1, op, n2){
    if(op == '*'){
        return n1 * n2;
    } else if (op == '/') {
        if(n2 == 0){
            return "Not today"
        } else {
            return n1 / n2;
        }
    } else if (op == "+") {
        return n1 + n2;        
    } else if (op == "-") {
        return n1 - n2;
    }
    if(op == '='){
        return n1;
    }
}

let firstNum = 0;
let Operator = '+';
let DisplayNum = 0;

function addNumber(a){
    if(Operator == '='){
        DisplayNum = 0;
        Operator = '+'
    }
    DisplayNum = DisplayNum * 10;
    DisplayNum = DisplayNum + a;
    console.log(DisplayNum);
    document.getElementById("Numbers").innerHTML = DisplayNum;
}

function opera(a){
    if(firstNum != 0){
        DisplayNum = operate(firstNum, Operator, DisplayNum);
    } 
    firstNum = DisplayNum;
    Operator = a;
    document.getElementById("Numbers").innerHTML = DisplayNum;
    DisplayNum = 0;
}
function ends(a){
    if(a == '='){
        DisplayNum = operate(firstNum, Operator, DisplayNum);
        Operator = '=';
    } else if(a == 'C'){
        if(DisplayNum == 0){
            firstNum = 0;
            Operator = '+';
        }
        DisplayNum = 0;
    }
    document.getElementById("Numbers").innerHTML = DisplayNum;
}