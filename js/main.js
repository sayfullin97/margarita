$(document).ready(function() {  
    $( 'a[href^="#"]' ).click(function(){ 
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $( "body,html" ).animate({
            scrollTop: top
        }, 1500
        );
    });  
});