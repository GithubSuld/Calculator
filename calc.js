let action;
let prevNum;
let adhasu = document.getElementById('display');

function onclickAdd() {
    action = "+";

    prevNum = adhasu.innerText;
    adhasu.innerText = "0"
}
function onclickMinus() {
    action = "-";

    prevNum = adhasu.innerText;
    adhasu.innerText = "0"
}
function onclickMultiply() {
    action = "*";

    prevNum = adhasu.innerText;
    adhasu.innerText = "0"
}
function onclickDivide() {
    action = "/";

    prevNum = adhasu.innerText;
    adhasu.innerText = "0"
}



function calculate() {
    if (action === "+") {
        adhasu.innerText = Number(prevNum) + Number(adhasu.innerText)
    }
    if (action === "-") {
        adhasu.innerText = Number(prevNum) - Number(adhasu.innerText)
    }
    if (action === "*") {
        adhasu.innerText = Number(prevNum) * Number(adhasu.innerText)
    }
    if (action === "/") {
        adhasu.innerText = Number(prevNum) / Number(adhasu.innerText)
    }
}

function clearDisplay() {
    adhasu.innerText = "0";
}


function onclickButtonSeven() {
    adhasu.innerText = "7"
}
function onclickButtonEight() {
    adhasu.innerText = "8"
}
function onclickButtonNine() {
    adhasu.innerText = "9"
}
function onclickButtonOne() {
    adhasu.innerText = "1"
}
function onclickButtonTwo() {
    adhasu.innerText = "2"
}
function onclickButtonThree() {
    adhasu.innerText = "3"
}
function onclickButtonFour() {
    adhasu.innerText = "4"
}
function onclickButtonFive() {
    adhasu.innerText = "5"
}
function onclickButtonSix() {
    adhasu.innerText = "6"
}