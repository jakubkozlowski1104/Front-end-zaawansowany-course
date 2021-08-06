$('.interface').on('click', function() {
    
    
    if($(this).hasClass('orange')) {
        console.log('prawda w pomaranczowy');
        $('body').toggleClass('orange');
    }

    if ($(this).hasClass("increase")) {
        $('.text').animate({
            "font-size": "+=2px"
        }, 500);
    }
})