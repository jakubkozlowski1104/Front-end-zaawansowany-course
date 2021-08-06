$('.interface').on('click', function() {
    console.log(this);
    console.log($(this));
    console.log($(this).attr("class"));
    
    if($(this).hasClass('orange')) {
        console.log('prawda w pomaranczowy');
        $('body').toggleClass('orange');
    }
})