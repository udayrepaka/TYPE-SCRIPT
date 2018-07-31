class CalculatorApp {
    private static firstNumber:HTMLInputElement;
    private static secondNumber:HTMLInputElement;
    private static operator:HTMLButtonElement;
    private static equalsButton:HTMLButtonElement;
    private static resultButton:HTMLButtonElement;
    private static plusButton:HTMLButtonElement;
    private static minusButton:HTMLButtonElement;
    private static divButton:HTMLButtonElement;
    private static mulButton:HTMLButtonElement;
    private static clearButton:HTMLButtonElement;

    constructor(){
        CalculatorApp.initialize();
        CalculatorApp.addEventListeners();
    }

    public static initialize(){
        CalculatorApp.firstNumber = document.querySelector('#firstNumber')as HTMLInputElement;
        CalculatorApp.secondNumber = document.querySelector('#secondNumber')as HTMLInputElement;
        CalculatorApp.operator = document.querySelector('#operator') as HTMLButtonElement;
        CalculatorApp.equalsButton = document.querySelector('#equals-button') as HTMLButtonElement;
        CalculatorApp.resultButton = document.querySelector('#result-button') as HTMLButtonElement;
        CalculatorApp.plusButton = document.querySelector('#plus-button') as HTMLButtonElement;
        CalculatorApp.minusButton = document.querySelector('#minus-button') as HTMLButtonElement;
        CalculatorApp.divButton = document.querySelector('#divide-button') as HTMLButtonElement;
        CalculatorApp.mulButton = document.querySelector('#multiply-button') as HTMLButtonElement;
        CalculatorApp.clearButton = document.querySelector('#clear-button') as HTMLButtonElement;
    }
    public static addEventListeners(){
        CalculatorApp.equalsButton.addEventListener('click',CalculatorApp.calculate);
        CalculatorApp.plusButton.addEventListener('click',CalculatorApp.changeOprPlus);
        CalculatorApp.minusButton.addEventListener('click',CalculatorApp.changeOprMinus);
        CalculatorApp.divButton.addEventListener('click',CalculatorApp.changeOprDiv);
        CalculatorApp.mulButton.addEventListener('click',CalculatorApp.changeOprMul);
        CalculatorApp.clearButton.addEventListener('click',CalculatorApp.clearAll);
    }

    public static calculate(){
        let firstNumber = CalculatorApp.firstNumber.value;
        let secondNumber = CalculatorApp.secondNumber.value;

        if(firstNumber !== '' && secondNumber !== ''){
            let num1 = parseFloat(firstNumber);
            let num2 = parseFloat(secondNumber);
            let opr = CalculatorApp.operator.textContent.trim();
            let result = '';
            switch(opr){
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
        else{
            CalculatorApp.resultButton.textContent = 'RESULT';
        }

    }
    public static changeOprPlus(){
        CalculatorApp.operator.textContent = '+';
    }
    public static changeOprMinus(){
        CalculatorApp.operator.textContent = '-';
    }
    public static changeOprDiv(){
        CalculatorApp.operator.textContent = '/';
    }
    public static changeOprMul(){
        CalculatorApp.operator.textContent = '*';
    }
    public static clearAll(){
        CalculatorApp.firstNumber.value = '';
        CalculatorApp.secondNumber.value = '';
        CalculatorApp.operator.textContent = '+';
        CalculatorApp.resultButton.textContent = 'RESULT';
    }
}

let app = new CalculatorApp();