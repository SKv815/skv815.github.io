window.onload = function() {
	let btn = document.getElementsByTagName('button')[0],
		barCode1 = document.getElementsByTagName('img')[0],
		barCode2 = document.getElementsByTagName('img')[1],
		numInput = document.getElementById('number'),
		plus = document.getElementById('plus'),
		pre = document.getElementById('preffix'),
		preValue,
		preNumber = pre.getElementsByTagName('option'),
		aff = document.getElementById('affix'),
		affValue,
		affNumber = aff.getElementsByTagName('option'),
		num,
		adv = document.getElementById('advanced'),
		advStatus = adv.checked,
		settings = document.getElementById('settings'),
		settingsToggle = false,
		settingsWindow = document.getElementById('w'),
		settingsHeader = document.getElementById('w_header'),
		zoneselect = document.getElementById('zoneselect'),
		lp = document.getElementById('lp'),
		undercover = document.getElementsByClassName('undercover'),
		allZoneNames = [],
		zoneIsSelected,
		radioButtons = document.getElementsByName('side'),
		sideChecked = 0,
		close = document.getElementsByClassName('close')[0],
		saveBtn = document.getElementById('save'),
		draggable = false,
		runBtn = document.getElementsByClassName('start')[0],
		runBtnTextDefault = "Generate barcode",
		runBtnTextAdvanced = "Generate barcodes",
		minY,
		maxX,
		maxY,
		xx,
		yy;

	runBtn.innerHTML = runBtnTextDefault

	numInput.value = window.localStorage.getItem('saveNum');
	if (localStorage.getItem('savePrefix') !== null) {
		preNumber[window.localStorage.getItem('savePrefix')].selected = true;
	}
	else {}
	if (localStorage.getItem('saveAffix') !== null) {
		affNumber[window.localStorage.getItem('saveAffix')].selected = true;
	}
	else {}

	function getSettings() {
		zoneselect.innerHTML = '';
		allZoneNames = [];
		let allLoadPoints = settingsWindow.getElementsByClassName('lmu');
		for (let i = 0; i <= allLoadPoints.length - 1; i++) {
			let checkLoadPoint = allLoadPoints[i].value;
			allZoneNames.push(allLoadPoints[i].value);
			if (checkLoadPoint > '0') {
				let newOption = document.createElement('Option');
				let optionText = document.createTextNode(allLoadPoints[i].value);
				newOption.appendChild(optionText);
				newOption.setAttribute('value', allLoadPoints[i].value);
				zoneselect.appendChild(newOption);
			}
		}
	}

	function preSelectContainerType() {
		let currentlySelected = sideChecked;
		preValue = pre.value.toUpperCase();
		if (preValue == 'AMJ' || preValue == 'AAD' || preValue == 'SAA' || preValue == 'AQF') {
			radioButtons[0].removeAttribute("disabled");
			radioButtons[0].checked = true;
			sideChecked = 0;
			radioButtons[1].setAttribute("disabled", true);
			radioButtons[2].setAttribute("disabled", true);
		}
		else {
			radioButtons[1].removeAttribute("disabled");
			radioButtons[2].removeAttribute("disabled");
			radioButtons[0].setAttribute("disabled", true);
			if (currentlySelected == 0) {
				radioButtons[1].checked = true;
				sideChecked = 1;
			}
			else {
				radioButtons[currentlySelected].checked = true;
				sideChecked = currentlySelected;
			}
		}
	}

	function pullCode() {
			zoneIsSelected = zoneselect.getElementsByTagName('option')[zoneselect.selectedIndex].value;
	}

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
			console.log('incorrect affix value: ' + affValue);
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
			runBtn.innerHTML =  runBtnTextAdvanced
			for (let i = 0; i <= undercover.length - 1; i++) {
				undercover[i].style.visibility = 'visible';
			}
		}
		else {
			runBtn.innerHTML =runBtnTextDefault
			for (let i = 0; i <= undercover.length - 1; i++) {
				undercover[i].style.visibility = 'hidden';
			}
		}
	}

	function generate() {
		preValue = pre.value.toUpperCase();
		affValue = aff.value.toUpperCase();
		let	zoneselectIndex = 0,
			targetZone,
			lmuInput;
		num = numInput.value;
		for (i = 0; i <= allZoneNames.length -1; i++) {
			if (zoneIsSelected == allZoneNames[i]) {
				targetZone = settingsWindow.getElementsByClassName('w_load_point')[i];
			}
		}
			
		if (num > '00000' && advStatus) {
			numInput.style.borderColor = "gray";
			barCode1.src = 'https://barcode.tec-it.com/barcode.ashx?data=' + preValue + num + affValue + '&code=Code128&dpi=96&dataseparator=';
			lmuInput = targetZone.getElementsByClassName('lmu_input')[sideChecked].value;
			barCode2.src = 'https://barcode.tec-it.com/barcode.ashx?data=' + lmuInput + '&code=Code128&dpi=96&dataseparator=';
		}
		else if (num > '00000' && !advStatus) {
			numInput.style.borderColor = "gray";
			barCode1.src = 'https://barcode.tec-it.com/barcode.ashx?data=' + preValue + num + affValue + '&code=Code128&dpi=96&dataseparator=';
			barCode2.src = '';
		}
		else {
			numInput.style.borderColor = "red";
		}
		window.localStorage.setItem('saveNum', numInput.value);

		for (j = 0; j < preNumber.length; j++) {
			if (preNumber[j].selected) {
				window.localStorage.setItem('savePrefix', j);
			}
		}
		for (k = 0; k < affNumber.length; k++) {
			if (affNumber[k].selected) {
				window.localStorage.setItem('saveAffix', k);
			}
		}
	}

	function windowOpenClose() {
		if (settingsToggle) {
			settingsWindow.style.visibility = 'hidden';
			settingsToggle = false;
		}
		else {
			settingsWindow.style.visibility = 'visible';
			settingsToggle = true;
		}
	}

// -----     drag and drop for settings window     -----

	function drop() {
		draggable = false;
	}

	function drag() {
		maxX = (document.getElementsByTagName('main')[0].offsetWidth - settingsWindow.offsetWidth - 1);
		minY = document.getElementsByTagName('header')[0].offsetHeight;
		maxY = (document.getElementsByTagName('main')[0].offsetHeight + minY - settingsWindow.offsetHeight);
		draggable = true;
		document.addEventListener ('mouseup', drop);
		xx = event.offsetX;
		yy = event.offsetY;
	}

	function move() {
		if (draggable) {
			let x = event.clientX - xx,
				y = event.clientY - yy;
			
			settingsWindow.style.left = (x + 'px');
			settingsWindow.style.top = (y + 'px');

			if (x >= maxX) {
				settingsWindow.style.left = (maxX + 'px');
			}
			else if (x <= 0) {
				settingsWindow.style.left = (0 + 'px');
			}

			if (y >= maxY) {
				settingsWindow.style.top = (maxY + 'px');
			}
			else if (y <= minY) {
				settingsWindow.style.top = (minY + 'px');
			}
		}
	}

	preSelectContainerType();
	getSettings();
	pullCode();
	trimmer();

	for (let i = 0; i < radioButtons.length; i++) {
		radioButtons[i].addEventListener('change', function() {
			sideChecked = radioButtons[i].value;
		});
	}
	numInput.addEventListener('input', integersOnly);
	numInput.addEventListener('change', trimmer);
	plus.addEventListener('click', increaseNumber);
	btn.addEventListener('click', generate);
	aff.addEventListener('change', trimmer);
	adv.addEventListener('click', addLoadPoint);
	zoneselect.addEventListener('change', pullCode);
	pre.addEventListener('change', preSelectContainerType);
	saveBtn.addEventListener('click', getSettings);
	settings.addEventListener('click', windowOpenClose);
	close.addEventListener('click', windowOpenClose);
	settingsHeader.addEventListener ('mousedown', drag);
	document.addEventListener ('mousemove', move);
	settingsHeader.addEventListener ('mouseup', drop);

}
