$(document).ready(function () {

function create(){
	$('.g').html('');
	t = 100;
	while(t > 0){
        he = Math.floor(Math.random() * 30);
		if( he > 1){
			$('.g').append("<div class='eachFunctClass' style='height:"+he+"vh'></div>");
            t = t - he;
		}else{
			$('.g').append("<div class='eachFunctClass' style='height:"+t+"vh'></div>");
            t = -1;
		}
	}

	$('.eachFunctClass').each(function() {
        t = 100;
        while ( t > 0 ) {
            r = Math.floor((Math.random() * 5) + 1)*2;
            if ( t - r > 1 ) { 
                $(this).append("<div class='colorChange' style='width:"+r+"vw'></div>");
                t = t - r; 
            }
            else { $(this).append("<div class='colorChange' style='width:"+t+"vw'></div>"); t = -1;}
        }
    });

    $('.colorChange').each(function() {
        c = Math.floor((Math.random() * 4) + 1); // 7
        if ( c == 1 ) { $(this).css('background-color', '#003b46'); }
        if ( c == 2 ) { $(this).css('background-color', '#07575b'); }
        if ( c == 3 ) { $(this).css('background-color', '#66a6ad'); }
        if ( c == 4 ) { $(this).css('background-color', '#c4dfe6'); }
    });

    $('.colorChange').eq(Math.floor((Math.random() * $('.colorChange').length) + 1)).css('background-color','yellow');
    // var color = $('.colorChange').eq(Math.floor(Math.random()));
    // console.log(color);
    // var testColor = $('.colorChange').length + 1;
    // console.log(testColor);

}


$('.g').click(function() { create();  }); // click mouse to running function random number

$(function () { create(); }); // required function!!! if not, the page will be white blank.

});