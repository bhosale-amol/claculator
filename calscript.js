let result = document.getElementById('result');
let buttons = document.querySelectorAll('button[type="button"]');

let calculation = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value === '=') {
            try {
                result.value = eval(calculation);
                calculation = '';
            } catch (error) {
                result.value = 'Error';
                calculation = '';
            }
        } else if (button.value === 'C') {
            result.value = '';
            calculation = '';
        } else {
            calculation += button.value;
            result.value = calculation;
        }
    });
});