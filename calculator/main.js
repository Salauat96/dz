let textVal = document.querySelector('.text_val');
let result = document.querySelector('.result');
let btn = document.querySelectorAll('.number');
let division = document.querySelector('.division');
let multiplication = document.querySelector('.multiplication');
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let comma = document.querySelector('.comma');
let min_plus = document.querySelector('.min_plus');
let reset = document.querySelector('.reset');
let equity = document.querySelector('.equity');
let znak;
let resultLength = 0;
for (let i = 0; i < btn.length; i++) {
	let btnN = btn[i];
	btnN.addEventListener('click', function(e) {
		if (result.innerHTML == "0"){
			result.innerHTML = '';
			result.innerHTML += btnN.innerHTML;
		} else {
			resultLength = result.innerHTML.length;
			if (resultLength < 12){
				result.innerHTML += btnN.innerHTML;
			}else{
				return;
			}
		}
	});
};

comma.addEventListener('click', function(e) {
	if (result.innerHTML == '' || result.innerHTML.indexOf('.') > -1){
		return;
	}else{
		result.innerHTML += '.';
	}
});

min_plus.addEventListener('click', function(e) {
	let firstNumber = result.innerHTML.slice(0,1);
	if (result.innerHTML !== '0'){
		if (firstNumber != '-'){
			result.innerHTML = '-' + result.innerHTML;
		}else{
			result.innerHTML = result.innerHTML.slice(1);
		}
	}
	
});

plus.addEventListener('click', function(e) {
	znak = '+';
	if (textVal.innerHTML.indexOf(znak) > -1){
		return;
	}else{
		textVal.innerHTML = result.innerHTML + znak;
		result.innerHTML = '';
	}

	
	
});

minus.addEventListener('click', function(e) {
	znak = '-';
	if (textVal.innerHTML.indexOf(znak) > -1){
		return;
	}else{
		textVal.innerHTML = result.innerHTML + znak;
		result.innerHTML = '';
	}
});

division.addEventListener('click', function(e) {
	znak = '/';
	if (textVal.innerHTML.indexOf(znak) > -1){
		return;
	}else{
		textVal.innerHTML = result.innerHTML + znak;
		result.innerHTML = '';
	}
});

multiplication.addEventListener('click', function(e) {
	znak = '*';
	if (textVal.innerHTML.indexOf(znak) > -1){
		return;
	}else{
		textVal.innerHTML = result.innerHTML + znak;
		result.innerHTML = '';
	}
});

equity.addEventListener('click', function(e) {
	let leftNumber = parseFloat(textVal.innerHTML);
	let rightNumber = parseFloat(result.innerHTML);

	if (znak == '+'){
		textVal.innerHTML += result.innerHTML;
		resultCalc = leftNumber + rightNumber;
		result.innerHTML = resultCalc;
	}
	if (znak == '-'){
		textVal.innerHTML += result.innerHTML;
		resultCalc = leftNumber - rightNumber;
		result.innerHTML = resultCalc;
	}
	if (znak == '/'){
		textVal.innerHTML += result.innerHTML;
		resultCalc = leftNumber / rightNumber;
		if (rightNumber === 0){
			result.innerHTML = "невозможно";
		}else{
			result.innerHTML = resultCalc;
		}
		
	}
	if (znak == '*'){
		textVal.innerHTML += result.innerHTML;
		resultCalc = leftNumber * rightNumber;
		result.innerHTML = resultCalc;
	}
});

reset.addEventListener('click', function(){
	result.innerHTML = '0';
	textVal.innerHTML = '';
});