let action;
let prevNum;
let adhasu = document.getElementById('display');
let isDecimalAdded = false;

function onclickAdd() {
    action = "+";
    prevNum = adhasu.innerText;
    adhasu.innerText = "0";
    isDecimalAdded = false;
}

function onclickMinus() {
    action = "-";
    prevNum = adhasu.innerText;
    adhasu.innerText = "0";
    isDecimalAdded = false;
}

function onclickMultiply() {
    action = "*";
    prevNum = adhasu.innerText;
    adhasu.innerText = "0";
    isDecimalAdded = false;
}

function onclickDivide() {
    action = "/";
    prevNum = adhasu.innerText;
    adhasu.innerText = "0";
    isDecimalAdded = false;
}

function calculate() {
    if (action === "+") {
        adhasu.innerText = Number(prevNum) + Number(adhasu.innerText);
    }
    if (action === "-") {
        adhasu.innerText = Number(prevNum) - Number(adhasu.innerText);
    }
    if (action === "*") {
        adhasu.innerText = Number(prevNum) * Number(adhasu.innerText);
    }
    if (action === "/") {
        adhasu.innerText = Number(prevNum) / Number(adhasu.innerText);
    }
    isDecimalAdded = false;
}

function onclickButtonSeven() {
    adhasu.innerText = adhasu.innerText === "0" ? "7" : adhasu.innerText + "7";
}

function onclickButtonEight() {
    adhasu.innerText = adhasu.innerText === "0" ? "8" : adhasu.innerText + "8";
}

function onclickButtonNine() {
    adhasu.innerText = adhasu.innerText === "0" ? "9" : adhasu.innerText + "9";
}

function onclickButtonOne() {
    adhasu.innerText = adhasu.innerText === "0" ? "1" : adhasu.innerText + "1";
}

function onclickButtonTwo() {
    adhasu.innerText = adhasu.innerText === "0" ? "2" : adhasu.innerText + "2";
}

function onclickButtonThree() {
    adhasu.innerText = adhasu.innerText === "0" ? "3" : adhasu.innerText + "3";
}

function onclickButtonFour() {
    adhasu.innerText = adhasu.innerText === "0" ? "4" : adhasu.innerText + "4";
}

function onclickButtonFive() {
    adhasu.innerText = adhasu.innerText === "0" ? "5" : adhasu.innerText + "5";
}

function onclickButtonSix() {
    adhasu.innerText = adhasu.innerText === "0" ? "6" : adhasu.innerText + "6";
}

function onclickButtonZero() {
    adhasu.innerText = adhasu.innerText === "0" ? "0" : adhasu.innerText + "0";
}

function onclickDecimal() {
    if (!isDecimalAdded) {
        adhasu.innerText += ".";
        isDecimalAdded = true;
    }
}

function clearDisplay() {
    adhasu.innerText = "0";
    prevNum = undefined;
    action = undefined;
    isDecimalAdded = false;
}
