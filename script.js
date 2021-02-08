let numbers = document.querySelectorAll('.num'); 
let operators = document.querySelectorAll('.operator');
let display = document.querySelector('.result_display');
let all_clear = document.querySelector('.clear');
let equals = document.querySelector('.equals');

let display_value;
let firstOperand;
let lastOperand;
let operator_func;
let operator;

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	if (b != 0) {
		return a / b;
	}
} 

function mod(a, b) {
	return a % b;
}

function operate(a, b, operator) {
	return operator(a, b);
}

function clear() {
	display_value = 0;
	display.textContent = display_value;
}



numbers.forEach(num => {
	num.addEventListener('click', () => {
		if (display.textContent == 0) {
			display.textContent = " ";
			display_value = display.textContent += num.textContent;
		}else {
			display_value = display.textContent += num.textContent;
		}
		display.textContent = display_value;
	});
});

operators.forEach(operator => {
	operator.addEventListener('click', () => {
		let data;
		if (operator.key === undefined) {
			data = operator.id;
		}else {
			data = operator.id;
		}

		switch(data) {
			case 'plus':
				operator = '+';
				operator_func = add;
			break;

			case 'minus':
				operator = '-';
				operator_func = subtract;
			break;

			case 'times':
				operator = 'x';
				operator_func = multiply;
			break;

			case 'divide':
				operator = '/';
				operator_func = divide;
			break;

			case 'modulo':
				operator = '%';
				operator_func = mod;
			break;


		}
		if (display_value != undefined) {
			display.textContent = display_value += operator;
		}else{
			return;
		}
		
	});
});

all_clear.addEventListener('click', clear);

//equals.addEventListener('click', evaluate);

