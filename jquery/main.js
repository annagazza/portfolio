//jQuery( function( $ ) {
//	$( '.loadermask' ).delay( '750' ).fadeOut( 'slow' );
//} );

//$(window).load(function() {
//    $('.loadermask').hide();
//  });


jQuery(document).ready(function ($) {    
            $("#gif").hover(function() {
                $("#image").css("visibility", "visible");
            }, function() {
                $("#image").css("visibility", "hidden");
            });
});

jQuery(document).ready(function ($) {    
            $(".link").hover(function() {
                $("#arrow").css("fill", "#9C74F1");
            }, function() {
                $("#arrow").css("fill", "black");
            });
});

jQuery(document).ready(function ($) {    
            $("#cv").hover(function() {
                $("#arrow").css("fill", "#9C74F1");
            }, function() {
                $("#arrow").css("fill", "black");
            });
});

jQuery(document).ready(function ($) {
    $(window).load(function () {
        setTimeout(function(){
            $(".loadermask").delay(1500).fadeOut("fast", function () {
            });
        },0);

    });  
});