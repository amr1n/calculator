let numbers = document.querySelectorAll(".num"); 
let operators = document.querySelectorAll(".operator");
let display = document.querySelector(".result_display");
let equation_display = document.querySelector(".equation_display");
let all_clear = document.querySelector(".clear");
let equals = document.querySelector(".equals");


let display_value;
let equation;
let firstOperand = "";
let lastOperand = "";
let solution = "";
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
	a = Number(a);
	b = Number(b);
	console.log(a, b);
	return operator(a, b);
}

function clear() { 
	display.textContent = 0;
	equation_display.textContent = 0;
}


function evaluate() {
	if (operator) {
		lastperand = display_value;
		display.textContent = "";
	}
	console.log(firstOperand, lastperand);

	solution = operate(firstOperand, lastperand, operator_func);

	display.textContent = solution;
	return solution;
}


numbers.forEach(num => {
	num.addEventListener("click", () => {
		if (display.textContent == 0) {
			display.textContent = "";
			display_value = display.textContent += num.textContent;
		}else {
			display_value = display.textContent += num.textContent;
		}

		if (equation_display.textContent == 0) {
			equation_display.textContent = "";
		    equation = equation_display.textContent += num.textContent;
		}else {
			equation = equation_display.textContent += num.textContent;
		}

		equation_display.textContent = equation;
		display.textContent = display_value;
	});
});

operators.forEach(operator_sign => {
	operator_sign.addEventListener("click", () => {
		let sign;
		if (operator_sign.key === undefined) {
			sign = operator_sign.id;
		}

		switch(sign) {
			case "plus":
				operator = "+";
				operator_func = add;
			break;

			case "minus":
				operator = "-";
				operator_func = subtract;
			break;

			case "times":
				operator = "×";
				operator_func = multiply;
			break;

			case "divide":
				operator = "÷";
				operator_func = divide;
			break;

			case "modulo":
				operator = "%";
				operator_func = mod;
			break;


		}

		if (display_value != undefined) {
			firstOperand = display_value;
			display.textContent = "";
		}

		if (equation != undefined) {
			equation_display.textContent = equation += operator;
		}

	});
});

all_clear.addEventListener("click", clear);

equals.addEventListener("click", evaluate);
 