document.forms['forma'].onsubmit = function(){
    alert('Cпасибо за обращения. Мы с Вами свяжемся в ближайшее время!');
};

// scroll to the element-block
$('a[href^="#"]').click(function(e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();

        if (window.innerWidth >= 767) {
            $('html,body').stop().animate({
                scrollTop:target.offset().top -70
            }, 1000);

        } else {
            $('html,body').stop().animate({
                scrollTop:target.offset().top +1
            }, 1000);
        }
    }
});

//button to the top
$(document).ready(function(){
    $('body').append('<a href="#" id="go-top" title="Вверх">Вверх</a>');
});

$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "430") $(this).fadeIn("slow")
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "430") $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
});

$(function() {
    $("#go-top").scrollToTop();
});

