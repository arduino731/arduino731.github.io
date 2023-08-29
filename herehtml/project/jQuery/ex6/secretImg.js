$(document).ready(function (){

	function randomColor(){
		return "#" + Math.random().toString(16).slice(2,8);
	};

	console.log(randomColor());

	$('.box').on("mouseenter", function(){
		$(this).css('background-color', randomColor());
		$(this).css('opacity', '0.1');
		$(this).css('z-index', '100000');
	});

	$('.box').on("mouseleave", function(){
		$(this).css('background-color', 'yellow');
		$(this).css('opacity', '1');
		$(this).css('z-index', "1");
	});

	$('#target').click(function(){
		$('.box').css('background-color', 'black');
		$('.box').css('opacity', '.5');
	})

	
});