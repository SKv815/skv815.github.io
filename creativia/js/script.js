/* ##### Initiate Slick slider ##### */ 
$(document).ready(function(){
  $('.slider').slick({
	  	infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
  		speed: 300,
  		adaptiveHeight: false,
  		autoplay: true,
  		autoplaySpeed: 5000,
  		 responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: false
      }
    }
  ]
  });
});
/* ##### Initiate second Slick slider ##### */ 
$(document).ready(function(){
  $('.fb-slider').slick({
	  	infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
  		speed: 300,
  		adaptiveHeight: false,
  		autoplay: true,
  		autoplaySpeed: 2600,
  });
});
/* ##### Vertical slider ##### */ 
$(document).ready(function(){
  $('.blog-slider').slick({
	  	infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
  		speed: 400,
  		adaptiveHeight: false,
  		autoplay: true,
  		autoplaySpeed: 3000,
  		vertical: true,
  });
});
/* ##### Tabs ##### */ 
/* ##### Thanks Denis http://denis-creative.com/jquery-tabs/ ##### */ 

(function($) {
  $(function() {
    $("ul.tabs-caption").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.tabs-content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);

/* ##### smooth scrolling ##### */ 
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


/* ##### About toggles ##### */ 
/* ##### The mostsilly implementation of toggles ever!!! I'll chenge it later ##### */
window.onload = function() {
	var heading = document.getElementsByClassName('about-info__toggle-heading'),
		text = document.getElementsByClassName('about-info__toggle-text'),
		act0 = true;
		act1 = false;
		act2 = false;
	heading[0].onclick = function() {
		if(act0 == true) {
			heading[0].classList.remove('active');
			text[0].classList.remove('active-text');
			act0 = false;
		}
		else {
			heading[0].classList.add('active');
			text[0].classList.add('active-text');
			act0 = true;
		}
	}
	heading[1].onclick = function() {
		if(act1 == true) {
			heading[1].classList.remove('active');
			text[1].classList.remove('active-text');
			act1 = false;
		}
		else {
			heading[1].classList.add('active');
			text[1].classList.add('active-text');
			act1 = true;
		}
	}
	heading[2].onclick = function() {
		if(act2 == true) {
			heading[2].classList.remove('active');
			text[2].classList.remove('active-text');
			act2 = false;
		}
		else {
			heading[2].classList.add('active');
			text[2].classList.add('active-text');
			act2 = true;
		}
	}
}

