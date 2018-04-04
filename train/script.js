var slides = document.getElementsByClassName('slide'),
	prev = document.getElementById('prev'),
	next = document.getElementById('next'),
	num = 0;

prev.onclick = function() {
	slides[num].classList.remove("active");
	num--;
	if(num < 0) {
		num = slides.length - 1;
	}
	slides[num].classList.add("active");
}
next.onclick = function() {
	slides[num].classList.remove("active");
	num++;
	if(num >= slides.length) {
		num = 0;
	}
	slides[num].classList.add("active");
}