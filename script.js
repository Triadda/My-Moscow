// var blockHeaderImage = document.getElementById('HeaderImage');
// var ArrayIndex = 0;
// var ArrayImagesChange = ['photos/top.jpg', 'photos/1.jpg', 'photos/2.jpg', 'photos/3.jpg'];
// var funcImagesChange = function() {
//     var img = "url(" + ArrayImagesChange[ArrayIndex] + ")";
//     if (ArrayIndex === 3){
//         ArrayIndex = 0
//     } else {
//         ArrayIndex++
//     }
//     blockHeaderImage.style.backgroundImage = img 
// }

// setInterval(funcImagesChange, 4000);


var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var translateWidth = 0;
var navBtnId = 0;

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

// var slideInterval = 2000;

$(document).ready(function () {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function(){
        clearInterval(switchInterval);
    },function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });
});

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}

$('#next-btn').click(function() {
    nextSlide();
});

$('#prev-btn').click(function() {
    prevSlide();
});



$('.slide-nav-btn').click(function() {
    navBtnId = $(this).index();

    if (navBtnId + 1 != slideNow) {
        translateWidth = -$('#viewport').width() * (navBtnId);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = navBtnId + 1;
    }
});