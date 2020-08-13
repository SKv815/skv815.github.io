window.onload = function() {
	let btn = document.getElementsByTagName('button')[0],
		barCode1 = document.getElementsByTagName('img')[0],
		barCode2 = document.getElementsByTagName('img')[1],
		numInput = document.getElementById('number'),
		plus = document.getElementById('plus'),
		pre = document.getElementById('preffix'),
		aff = document.getElementById('affix'),
		num,
		adv = document.getElementById('advanced'),
		advStatus = adv.checked,
		settings = document.getElementById('settings'),
		settingsToggle = false,
		settingsWindow = document.getElementById('w'),
		zoneselect = document.getElementById('zoneselect'),
		lp = document.getElementById('lp'),
		lpValue,
		undercover = document.getElementsByClassName('undercover');

	numInput.value = window.localStorage.getItem('save');

	function getSettings() {
		let allLoadPoints = settingsWindow.getElementsByClassName('lmu');
		for (let i = 0; i <= allLoadPoints.length - 1; i++) {
			let checkLoadPoint = allLoadPoints[i].value;
			if (checkLoadPoint > '0') {
				let newOption = document.createElement('Option');
				let optionText = document.createTextNode(allLoadPoints[i].value);
				newOption.appendChild(optionText);
				newOption.setAttribute('value', 'Option Value');
				zoneselect.appendChild(newOption);
				console.log(allLoadPoints[i].value.toString());
				console.log(allLoadPoints[i].value);
			}
		}
	}

	getSettings();
	

	function integersOnly() {
		this.value = this.value.replace(/[^-0-9]/g,'');
	}

	function trimmer() {
		affValue = aff.value.toUpperCase();
		;
		if (affValue == 'FX') {
			numInputTrimmed = ("00000" + numInput.value).slice(-5);
		}
		else if (affValue == 'DHL') {
			numInputTrimmed = ("0000" + numInput.value).slice(-4);
		}
		else {
			console.log(affValue);
		}
		numInput.value = numInputTrimmed;
	}

	function increaseNumber() {
		num = numInput.value;
		numInput.value = (Number(num)) + 1;
		trimmer();
	}

	function addLoadPoint() {
		advStatus = adv.checked;
		if (advStatus) {
			for (let i = 0; i <= undercover.length - 1; i++) {
				undercover[i].style.visibility = 'visible';
			}
		}
		else {
			for (let i = 0; i <= undercover.length - 1; i++) {
				undercover[i].style.visibility = 'hidden';
			}
		}
	}

	function generate() {
		let preValue = pre.value.toUpperCase(),
			affValue = aff.value.toUpperCase();
		num = numInput.value;
			
		if (num > '00000' && advStatus) {
			numInput.style.borderColor = "gray";
			barCode1.src = 'https://barcode.tec-it.com/barcode.ashx?data=' + preValue + num + affValue + '&code=Code128&dpi=96&dataseparator=';
			window.localStorage.setItem('save', numInput.value);

			lpValue = document.getElementById("lp").value;
			barCode2.src = 'https://barcode.tec-it.com/barcode.ashx?data=' + lpValue + '&code=Code128&dpi=96&dataseparator=';
		}
		else if (num > '00000' && !advStatus) {
			numInput.style.borderColor = "gray";
			barCode1.src = 'https://barcode.tec-it.com/barcode.ashx?data=' + preValue + num + affValue + '&code=Code128&dpi=96&dataseparator=';
			window.localStorage.setItem('save', numInput.value);

			barCode2.src = '';
		}
		else {
			numInput.style.borderColor = "red";
		}
		
	}
	trimmer();
	numInput.addEventListener('input', integersOnly);
	numInput.addEventListener('change', trimmer);

	plus.addEventListener('click', increaseNumber);

	btn.addEventListener('click', generate);
	aff.addEventListener('change', trimmer);
	adv.addEventListener('click', addLoadPoint);

	settings.addEventListener('click', function windowOpenClose() {
		if (settingsToggle) {
			settingsWindow.style.visibility = 'hidden';
			settingsToggle = false;
		}
		else {
			settingsWindow.style.visibility = 'visible';
			settingsToggle = true;
		}
	});
}
