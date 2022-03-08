let aboutHeight=$('#about').offset().top;
$(window).scroll(function(){
    let currentOffset=$(window).scrollTop()
    if(currentOffset>=aboutHeight){

$('#scrollBtn').fadeIn(1000)
    }
    else{
        $('#scrollBtn').fadeOut(1000)

    }
})
$('#scrollBtn').click(function(){
    $('body,html').animate({scrollTop:0},1000)
})