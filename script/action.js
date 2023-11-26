$(window).scroll(function(){
    var scrT = $(this).scrollTop();
    var docH = $(document).height();
    var winH = $(window).height();

    if(scrT > 500){
        $('section.first').removeClass('on')
    } else {
        $('section.first').addClass('on')
    }


    
    if(scrT >= docH - winH*1.7){
        $('.contents').addClass('on')
    } else {
        $('.contents').removeClass('on')
    }
})