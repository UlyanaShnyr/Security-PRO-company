
$(document).ready(function() {

    $("#back-top").hide();

    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        $('#back-top a').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        // $(".arrow").find("span").hide().end().hover(function() {
        //     $(this).find("span").stop(true, true).fadeIn();
        // }, function() {
        //     $(this).find("span").stop(true, true).fadeOut();
        // });

    });

});