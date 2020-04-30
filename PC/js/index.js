// $('.index_ad').slideDown()

setTimeout(function () {
    // $('.index_ad').slideUp()

}, 5000)
$('.im_6slidercon li').eq(0).css('display', 'block');

$('.im_6slider li').each(function (i, e) {
    $(e).click(function () {
        $('.im_6slider li').removeClass('im_6slideractive');
        $(e).addClass('im_6slideractive');
        $('.im_6slidercon li').css('display', 'none');
        $('.im_6slidercon li').eq(i).css('display', 'block');
    });
});

var swiper = new Swiper('.swiperBox .swiper-container', {
    loop: true,
    pagination: {
        el: '.swiperBox .swiper-pagination',
    },
});


var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

$("html,body").animate({
    scrollTop: 6000 + 'px',
}, 100)

$(function () {
    $('.box3_4').eq(0).css('width', '325px');

})

// 推拉式
$('.box3_2').each(function (i, e) {
    $(e).click(function () {
        $('.box3_2').removeClass('box3_2active');
        $(e).addClass('box3_2active');
        $('.box3_4').css('width', '0px');
        $('.box3_4').eq(i).css('width', '325px');
    });
});


// 名师模块
$('.mxslider ').each(function (i, e) {
    $(e).click(function () {
        $('.mxslider ').removeClass('mxslideractive');
        $(e).addClass('mxslideractive');
        $('.mingshicon').css('display', 'none');
        $('.mingshicon').eq(i).css('display', 'block');
    });
});

var proswiper = new Swiper('.mingshicon .swiper-container', {
    pagination: {
        el: '.mingshicon .swiper-pagination',
        type: 'progressbar',
    },
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true, //修改swiper的父元素时，自动初始化swiper
});


// 名师结束

// 优秀学生
$('.mxslider2 ').each(function (i, e) {
    $(e).click(function () {
        $('.mxslider2 ').removeClass('mxslideractive2');
        $(e).addClass('mxslideractive2');
        $('.stucon').css('display', 'none');
        $('.stucon').eq(i).css('display', 'block');
    });
});


var galleryThumbs1 = new Swiper('.stucon .gallery-thumbs', {
    spaceBetween: 10,
    direction: 'vertical',
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,
});
var thumbsarrow1 = new Swiper('.stucon .gallery-top', {
    spaceBetween: 10,
    thumbs: {
        swiper: galleryThumbs1
    },
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,
});
$('.thumbsarrow1').click(function () {
    thumbsarrow1.slidePrev();
})
$('.thumbsarrow2').click(function () {
    thumbsarrow1.slideNext();
})

// 学生结束
$('.mxslider3 ').each(function (i, e) {
    $(e).click(function () {
        $('.mxslider3 ').removeClass('mxslideractive2');
        $(e).addClass('mxslideractive2');
        $('.zuopincon').css('display', 'none');
        $('.zuopincon').eq(i).css('display', 'block');
    });
});

var certifySwiper = new Swiper('#certify .swiper-container', {
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    loopedSlides: 5,
    // autoplay: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        //clickable :true,
    },
    on: {
        progress: function (progress) {
            for (i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i);
                var slideProgress = this.slides[i].progress;
                modify = 1;
                if (Math.abs(slideProgress) > 1) {
                    modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                }
                translate = slideProgress * modify * 140 + 'px';
                scale = 1 - Math.abs(slideProgress) / 5;
                zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                slide.css('zIndex', zIndex);
                slide.css('opacity', 1);
                if (Math.abs(slideProgress) > 3) {
                    slide.css('opacity', 0);
                }
            }
        },
        setTransition: function (transition) {
            for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i)
                slide.transition(transition);
            }

        }
    }
})
// 作品开始



// 作品结束

// 直播开始
$('.mxslider4 ').each(function (i, e) {
    $(e).click(function () {
        $('.mxslider4 ').removeClass('mxslideractive2');
        $(e).addClass('mxslideractive2');
        $('.zhibocon').css('display', 'none');
        $('.zhibocon').eq(i).css('display', 'block');
    });
});
// 直播就结束

// 校园环境

var huanswiper = new Swiper('.huancon_4 .swiper-container', {
    pagination: {
      el: '.huancon_4 .swiper-pagination',
    },
  });

// 环境结束


$(window).resize(function () {

    if (($('body').width()) > 1920) {
        $('.allbox').css("margin", "0 auto");

    } else if (($('body').width()) <= 1200) {
        $('.allbox').css("marginLeft", -360 + "px");

    } else {
        var num1 = $('body').width();
        var num = (num1 - 1920) / 2;
        $('.allbox').css("marginLeft", num + "px");
    }

});



if (($('body').width()) > 1920) {
    $('.allbox').css("margin", "0 auto");

} else if (($('body').width()) <= 1200) {
    $('.allbox').css("marginLeft", -360 + "px");

} else {
    var num1 = $('body').width();
    var num = (num1 - 1920) / 2;
    $('.allbox').css("marginLeft", num + "px");
}