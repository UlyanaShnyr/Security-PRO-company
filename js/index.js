// $(window).on('load', function(){
//     $('#cube-loader').delay(1000).fadeOut('slow');
//    });

$(window).load(function() {
    $("#cube-loader").delay(100).fadeOut().remove();    

});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        
    }
    else {
        x.className = "topnav";
    }
    
}

   $(document).ready(function($) {
    $('.view').magnificPopup({ type: 'image' });
})
