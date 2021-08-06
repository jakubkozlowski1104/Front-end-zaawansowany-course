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

    if ($(this).hasClass("move")) {
        $('.text').animate({
            "left": "+=10px",
            "letter-spacing" : "+=1px"
        }, 200);
    }
})