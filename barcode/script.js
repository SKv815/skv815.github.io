window.onload = function() {
	let btn = document.getElementsByTagName('button')[0],
		img = document.getElementsByTagName('img')[0],
		numInput = document.getElementById('number'),
		plus = document.getElementById('plus'),
		num;

	numInput.value = window.localStorage.getItem('save');

	function integersOnly() {
		this.value = this.value.replace(/[^-0-9]/g,'');
	}

	function trimmer() {
		numInputTrimmed = ("00000" + numInput.value).slice(-5);
		numInput.value = numInputTrimmed;
	}

	function increaseNumber() {
		num = numInput.value;
		numInput.value = (Number(num)) + 1;
		trimmer();
	}

	function generate() {
		let pre = document.getElementById('preffix').value.toUpperCase(),
			aff = document.getElementById('affix').value.toUpperCase();
		num = numInput.value;
			
		if (num > '00000') {
			numInput.style.borderColor = "gray";
			img.src = 'https://barcode.tec-it.com/barcode.ashx?data=' + pre + num + aff + '&code=Code128&dpi=96&dataseparator=';
			window.localStorage.setItem('save', numInput.value);
		}
		else {
			numInput.style.borderColor = "red";
		}
		
	}
	numInput.addEventListener('input', integersOnly);
	numInput.addEventListener('change', trimmer);

	plus.addEventListener('click', increaseNumber);

	btn.addEventListener('click', generate);
}
