// JavaScript File
$(document).ready(function(){
    //This is used to go back to the top
    $("button").click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'fast');
    });
    /**this function is used when clicking on the menu it stops the nomrmal behavior when clicking
    on a tag**/
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top 
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    //This function is ued for the eye
     $("#body").hide();
 $("#eye").mouseleave(function(){
     var eye=$("#eye");
     console.log(eye);
     eye[0].style= "height: 60px; width: 70px; margin: auto; display: block;";
     $("#body").show();
     $("#wrapper").hide();
});
$("button").click(function(){
    $('html,body').animate({ scrollTop: 0 }, 'fast');
    });
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        console.log(scroll);
    })
});

