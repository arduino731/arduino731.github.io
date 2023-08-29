$(document).ready(function(){
	console.log(Math.random().toString(5).slice(2, 5) + 'px');
	function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	};

	function randomSize(){
		return Math.random().toString(8).slice(2, 5);
	}

	$('#button').click(function(){
		$('#random_background').css('background', randomColor());
		$('#boxColor').css('background', randomColor());
		$('#buttonColor1').css('background', randomColor());
		$('#buttonColor2').css('background', randomColor());
		$('#buttonColor3').css('background', randomColor());
		$('#buttonColor4').css('background', randomColor());
		$('#buttonColor5').css('background', randomColor());
		$('#flexSize1').css('width', randomSize());
		$('#flexSize2').css('width', randomSize());
		$('#flexSize3').css('width', randomSize());
		$('#flexSize4').css('width', randomSize());
	});
});