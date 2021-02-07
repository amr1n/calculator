let numbers = document.querySelectorAll('.num');
let display = document.querySelector('.result_display');
let operators = document.querySelectorAll('.operator');

let display_value;


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

function operate(a, b, operator) {
	return operator(a,b);
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





