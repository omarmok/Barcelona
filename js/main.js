jQuery(function($) {'use strict',

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
		

});



	
		$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 200) {
        $('.men-aft').fadeIn();
    } else {
        $('.men-aft').fadeOut();
    }

});
		
		
		
		
		
		



// Carousel Auto-Cycle
  $(document).ready(function() {
    $('.carousel3').carousel({
      interval: 6000
    });
  });






$(".filter").click(function() {
  var thisFilter = $(this).attr("id");
  $(".item-pro").addClass("hide");
  if (thisFilter === "reset") {
    $(".item-pro").removeClass("hide");
  } else {
    $("." + thisFilter).removeClass("hide");
  }
  $(".filter").removeClass("selected");
  $(this).addClass("selected");
  return false;
});


$(document).ready(function(){
  $(".togmen").click(function(){
    $(".downn").slideToggle("slow");
  });
});





	//goto top
		
var scrollButton= $(".scroll-top");
$(window).scroll(function()
{	
$(this).scrollTop() >=100 ? scrollButton.show(): scrollButton.hide();
});

scrollButton.click(function()
{
 $("html,body").animate({scrollTop:0},600);



});



  $(document).ready(function(){
      $("#flip").click(function(){
        $("#panel").slideToggle("slow");
      });
    });
	
	

	
	// Carousel Auto-Cycle
  $(document).ready(function() {
    $('.carousel').carousel({
      interval: 6000
    });
  });





$(function() {
  $('a[href*=#]:not(.exept)').click(function(){
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});












$(window).load(function()
{
	

$("body").css("overflow",'auto');
$(".loading-overlay").fadeOut(100);

	
	});

});


		$(".gear-check").click (function()
	{
		"use strict";
		$(".color-option").fadeToggle();
	});
	
	var colorli=$(".color-option ul li");
	
	colorli.click(function()
	{
		"use strict";
	$("link[href*='theme']").attr("href",$(this).attr("data-value"));
	
});










	
		$(".share-setting").click (function()
	{
		"use strict";
		$(".shar-option").fadeToggle();
	});
	
	var colorli=$(".shar-option ul li");
	colorli
		.eq(0).css("backgroundColor","#405e98").end()
	.eq(1).css("backgroundColor","#55acee").end()
	.eq(2).css("backgroundColor","#b31217").end()
	.eq(3).css("backgroundColor","#db4a39").end()
	.eq(4).css("backgroundColor","#1b86bc")
	
	colorli.click(function()
	{
		"use strict";
	$("link[href*='theme']").attr("href",$(this).attr("data-value"));
	
});


	
		$(".download-setting").click (function()
	{
		"use strict";
		$(".download-option").fadeToggle();
	});
	
	
	
	colorli.click(function()
	{
		"use strict";
	$("link[href*='theme']").attr("href",$(this).attr("data-value"));
	
});




	
	
		$(".form-setting").click (function()
	{
		"use strict";
		$(".form-option").fadeToggle();
	});
	
	
	
	

		