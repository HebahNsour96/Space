$("document").ready(function(){
	$('.d , .d1').hide();
	$('.b , .b1').hide();
	$('.c , .c1').hide();

	$('.btn1').click(function(){
		var a = $('.d').html();
		var b = $('.d1').html();
		$('.g').html(a + '<br>' + b);
		$('.d').css('font-size' , '50px');
	});
	$('.btn2').click(function(){
		var x = $('.b').html();
		var y = $('.b1').html();
		$('.g').html(x + '<br>' + y);
		$('.d').css('font-size' , '50px');
	});
	$('.btn3').click(function(){
		var z = $('.c').html();
		var q = $('.c1').html();
		$('.g').html(z + '<br>' + q);
		$('.d').css('font-size' , '50px');
	});
});

