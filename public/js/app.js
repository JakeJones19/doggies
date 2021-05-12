//mobile menu toggle////////////////////////////////////////////////////////////////////////

$(document).ready(function() {

	$('.menu-button').click(function() {
		if ($(window).width() < 768) {
			$('nav ul').slideToggle(500);
		}
	}); //end slide toggle of mobile menu button
	$('.main-nav').click(function() {
		if ($(window).width() < 768) {
			$('nav ul').slideToggle(500);
		}
	}); //end menu close on tap toggle
	$(window).resize(function() {
		$('nav ul').removeAttr('style');
	}); //end resize 
}); //end ready

//Prevent mobile menu label linking to the top of page//////////////////////////////////////
$(".menu-button").click(function(event) {
	event.preventDefault();
}); // end link prevention

//Webpage scroll////////////////////////////////////////////////////////////////////////////
$(document).ready(function($) {
	$(".scroll").click(function(event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 1500, 'easeOutCubic');
	});
});

//before | after picture toggle/////////////////////////////////////////////////////////////

$(document).ready(function() {
	$(".compare_onclick").click(function() {
		$(".testimonial-pic img.after").toggleClass("transparent");
	});
});

//Price calculator//////////////////////////////////////////////////////////////////////////
$("input[type=radio]").click(function() {
	if ($('input[name=myDog]:checked').length > 0 && ($('input[name=service]:checked').length > 0)) {

		$('#total').css({
			visibility: 'visible'
		});
		$('#total').css({
			opacity: '1'
		});
		$('#totalSum').css({
			visibility: 'visible'
		});
		$('#totalSum').css({
			opacity: '1'
		});
		var total = 0;
		$("input[type=radio]:checked").each(function() {
			total += parseFloat($(this).val());
		});
		$("#totalSum").val("£" + total);
	}

});
//price calculator scroll on click for narrow screens//
$("#choice1").change(function(e) {
	if ($(window).width() < 768) {
		$('html, body').animate({
			scrollTop: $("#choice2").offset().top
		}, 1000);
	}
});

//price calc end ///////////////////////////////////////////////////////////////////////////////////////