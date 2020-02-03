
var slideNow2 = 1;
var slideCount2 = $('#slidewrapper-2').children().length;
var translateWidth2 = 0;
var navBtnId2 = 0;

function nextSlide2() {
    if (slideNow2 == slideCount2 || slideNow2 <= 0 || slideNow2 > slideCount2) {
        $('#slidewrapper-2').css('transform', 'translate(0, 0)');
        slideNow2 = 1;
    } else {
        translateWidth2 = -$('#viewport-2').width() * (slideNow2);
        $('#slidewrapper-2').css({
            'transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth2 + 'px, 0)',
        });
        slideNow2++;
    }
}

// var slideInterval2 = 2000;

$(document).ready(function () {
    var switchInterval2 = setInterval(nextSlide2, slideInterval2);

    $('#viewport-2').hover(function(){
        clearInterval(switchInterval2);
    },function() {
        switchInterval2 = setInterval(nextSlide2, slideInterval2);
    });
});

function prevSlide2() {
    if (slideNow2 == 1 || slideNow2 <= 0 || slideNow2 > slideCount2) {
        translateWidth2 = -$('#viewport-2').width() * (slideCount2 - 1);
        $('#slidewrapper-2').css({
            'transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth2 + 'px, 0)',
        });
        slideNow2 = slideCount2;
    } else {
        translateWidth2 = -$('#viewport-2').width() * (slideNow2 - 2);
        $('#slidewrapper-2').css({
            'transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth2 + 'px, 0)',
        });
        slideNow2--;
    }
}

$('#next-btn-2').click(function() {
    nextSlide2();
});

$('#prev-btn-2').click(function() {
    prevSlide2();
});



$('.slide-nav-btn-2').click(function() {
    navBtnId2 = $(this).index();

    if (navBtnId2 + 1 != slideNow2) {
        translateWidth2 = -$('#viewport-2').width() * (navBtnId2);
        $('#slidewrapper-2').css({
            'transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth2 + 'px, 0)',
        });
        slideNow2 = navBtnId2 + 1;
    }
});