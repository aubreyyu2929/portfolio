
$(document).ready(function() {
    $('#fullpage').fullpage({
    autoScrolling: false,
    scrollHorizontally: true
    });
 });

 
$('.dot:nth-child(1)').click(function(){
    $('.inside').animate({
      'width' : '10%'
    }, 500);
  });
$('.dot:nth-child(2)').click(function(){
    $('.inside').animate({
        'width' : '20%'
    }, 500);
});

$('.dot:nth-child(3)').click(function(){
    $('.inside').animate({
        'width' : '30%'
    }, 500);
});

$('.dot:nth-child(4)').click(function(){
    $('.inside').animate({
        'width' : '45%'
    }, 500);
});

$('.dot:nth-child(5)').click(function(){
    $('.inside').animate({
        'width' : '55%'
    }, 500);
});

$('.dot:nth-child(6)').click(function(){
    $('.inside').animate({
        'width' : '65%'
    }, 500);
});

$('.dot:nth-child(7)').click(function(){
    $('.inside').animate({
        'width' : '80%'
    }, 500);
});

$('.dot:nth-child(8)').click(function(){
    $('.inside').animate({
        'width' : '100%'
    }, 500);
});


$(".what-i-did").hide();
$('.what-i-did').addClass('nobox');
$('.dot').click(function(){
    var modal = $(this).attr('id');
    $('.what-i-did.nobox').hide()
    $('.what-i-did.nobox.' + modal).fadeIn(200)
});

