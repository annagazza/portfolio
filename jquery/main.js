
jQuery(document).ready(function ($) {    
            $("#gif").hover(function() {
                $("#image").css("visibility", "visible");
            }, function() {
                $("#image").css("visibility", "hidden");
            });
});

jQuery(document).ready(function ($) {    
            $(".link").hover(function() {
                $("#arrow").css("fill", "#704CE5");
            }, function() {
                $("#arrow").css("fill", "black");
            });
});

jQuery(document).ready(function ($) {    
            $("#cv").hover(function() {
                $("#arrow").css("fill", "#704CE5");
            }, function() {
                $("#arrow").css("fill", "black");
            });
});

jQuery(document).ready(function ($) {
    $(window).load(function () {
        setTimeout(function(){
            $(".loadermask").delay(2500).fadeOut("fast", function () {
            });
        },0);

    });  
});