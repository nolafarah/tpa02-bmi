window.onload = () => {
	let button = document.querySelector("#btn");
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

	let height = parseInt(document.querySelector("#height").value);
	let weight = parseInt(document.querySelector("#weight").value);
	let result = document.querySelector("#result");

	if (height === "" || isNaN(height)) {
		result.innerHTML = "Input a valid height!";
	}
	else if (weight === "" || isNaN(weight)) {
		result.innerHTML = "Input a valid weight!";
	}
	else {
		let bmi = (weight / ((height * height)/ 10000)).toFixed(2);
		if (bmi < 18.5) {
			result.innerHTML = `Your BMI is <span>${bmi}</span> (Underweight)`;
		}
		else if (bmi >= 18.5 && bmi <= 24.9) {
			result.innerHTML = `Your BMI is <span>${bmi}</span> (Normal)`;
		}
		else if (bmi >= 25 && bmi <= 29.9) {
			result.innerHTML = `Your BMI is <span>${bmi}</span> (Overweight)`;
		}
		else {
			result.innerHTML = `Your BMI is <span>${bmi}</span> (Obesity)`;
		}
	}
}