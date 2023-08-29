$(document).ready(function () {
	var d = new Date();
	var	day = d.getDay();
	// var	day = 4;
	var	msg = ["Sunday!",
			   "Mondays will not be hard if you love your work. If Mondays are hard, perhaps, you need to do a second thinking.",
			   "Oh. It's Tuesday.",
			   "Boom! Wednesday!",
			   "Thirsty Thursday, yo!",
			   "It's Friday! We should be kickin' it!",
			   "It is Saturday, Paaarrrtttyyy!"];


	$('#' + day).attr('id', 'today'); /* day_tracker.css #today */
	$("#message").text(msg[day]);
	
});