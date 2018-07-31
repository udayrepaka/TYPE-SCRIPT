var CalculatorApp = (function () {
    function CalculatorApp() {
        CalculatorApp.initialize();
        CalculatorApp.addEventListeners();
    }
    CalculatorApp.initialize = function () {
        CalculatorApp.firstNumber = document.querySelector('#firstNumber');
        CalculatorApp.secondNumber = document.querySelector('#secondNumber');
        CalculatorApp.operator = document.querySelector('#operator');
        CalculatorApp.equalsButton = document.querySelector('#equals-button');
        CalculatorApp.resultButton = document.querySelector('#result-button');
        CalculatorApp.plusButton = document.querySelector('#plus-button');
        CalculatorApp.minusButton = document.querySelector('#minus-button');
        CalculatorApp.divButton = document.querySelector('#divide-button');
        CalculatorApp.mulButton = document.querySelector('#multiply-button');
        CalculatorApp.clearButton = document.querySelector('#clear-button');
    };
    CalculatorApp.addEventListeners = function () {
        CalculatorApp.equalsButton.addEventListener('click', CalculatorApp.calculate);
        CalculatorApp.plusButton.addEventListener('click', CalculatorApp.changeOprPlus);
        CalculatorApp.minusButton.addEventListener('click', CalculatorApp.changeOprMinus);
        CalculatorApp.divButton.addEventListener('click', CalculatorApp.changeOprDiv);
        CalculatorApp.mulButton.addEventListener('click', CalculatorApp.changeOprMul);
        CalculatorApp.clearButton.addEventListener('click', CalculatorApp.clearAll);
    };
    CalculatorApp.calculate = function () {
        var firstNumber = CalculatorApp.firstNumber.value;
        var secondNumber = CalculatorApp.secondNumber.value;
        if (firstNumber !== '' && secondNumber !== '') {
            var num1 = parseFloat(firstNumber);
            var num2 = parseFloat(secondNumber);
            var opr = CalculatorApp.operator.textContent.trim();
            var result = '';
            switch (opr) {
                case '+':
                    result = (num1 + num2).toString();
                    break;
                case '-':
                    result = (num1 - num2).toString();
                    break;
                case '/':
                    result = (num1 / num2).toString();
                    break;
                case '*':
                    result = (num1 * num2).toString();
                    break;
                default:
                    result = 'RESULT';
                    break;
            }
            CalculatorApp.resultButton.textContent = result;
        }
        else {
            CalculatorApp.resultButton.textContent = 'RESULT';
        }
    };
    CalculatorApp.changeOprPlus = function () {
        CalculatorApp.operator.textContent = '+';
    };
    CalculatorApp.changeOprMinus = function () {
        CalculatorApp.operator.textContent = '-';
    };
    CalculatorApp.changeOprDiv = function () {
        CalculatorApp.operator.textContent = '/';
    };
    CalculatorApp.changeOprMul = function () {
        CalculatorApp.operator.textContent = '*';
    };
    CalculatorApp.clearAll = function () {
        CalculatorApp.firstNumber.value = '';
        CalculatorApp.secondNumber.value = '';
        CalculatorApp.operator.textContent = '+';
        CalculatorApp.resultButton.textContent = 'RESULT';
    };
    return CalculatorApp;
}());
var app = new CalculatorApp();
