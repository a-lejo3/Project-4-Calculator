let currentNumber = "";
let currentOperation = "";

function displayNumber(number) {
    currentNumber += number;
    document.getElementById("display").innerHTML = currentNumber;
}

function performOperation(operation) {
    if (operation === "=") {
        let result = eval(currentNumber);
        document.getElementById("display").innerHTML = result;
        currentNumber = result;
    } else {
        currentNumber += operation;
        document.getElementById("display").innerHTML = currentNumber;
    }
}

function clearDisplay() {
    currentNumber = "";
    currentOperation = "";
    document.getElementById("display").innerHTML = "0";
}

document.getElementById("btn1").addEventListener("click", function () {
    displayNumber(1);
});
document.getElementById("btn2").addEventListener("click", function () {
    displayNumber(2);
});
document.getElementById("btn3").addEventListener("click", function () {
    displayNumber(3);
});
document.getElementById("btn4").addEventListener("click", function () {
    displayNumber(4);
});
document.getElementById("btn5").addEventListener("click", function () {
    displayNumber(5);
});
document.getElementById("btn6").addEventListener("click", function () {
    displayNumber(6);
});
document.getElementById("btn7").addEventListener("click", function () {
    displayNumber(7);
});
document.getElementById("btn8").addEventListener("click", function () {
    displayNumber(8);
});
document.getElementById("btn9").addEventListener("click", function () {
    displayNumber(9);
});
document.getElementById("btn0").addEventListener("click", function () {
    displayNumber(0);
});
document.getElementById("btnAdd").addEventListener("click", function () {
    performOperation("+");
});
document.getElementById("btnSubtract").addEventListener("click", function () {
    performOperation("-");
});
document.getElementById("btnMultiply").addEventListener("click", function () {
    performOperation("*");
});
document.getElementById("btnDivide").addEventListener("click", function () {
    performOperation("/");
});
document.getElementById("btnEqual").addEventListener("click", function () {
    performOperation("=");
});
document.getElementById("btnClear").addEventListener("click", function () {
    clearDisplay();
});

document.getElementById("btnDot").addEventListener("click", function () {
    displayNumber(".");
});

document.getElementById("btnBack").addEventListener("click", function () {
    currentNumber = currentNumber.slice(0, -1);
    document.getElementById("display").innerHTML = currentNumber;
});

document.getElementById("btnPercentage").addEventListener("click", function () {
    currentNumber = currentNumber / 100;
    document.getElementById("display").innerHTML = currentNumber;
});