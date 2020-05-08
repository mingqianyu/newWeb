// $('.index_ad').slideDown()

setTimeout(function () {
    // $('.index_ad').slideUp()
}, 5000)
$('.closeBtn').on('click', function () {
    $('.index_ad').slideUp()
})

// 底部栏
$("body").scroll(function (event) {
    // console.log('1111', $("body").scrollTop())

    // if($(window).scrollTop() > 6300 ) {
    //     $('.newfooter1').css({
    //     "position": "relative",
    //     "z-index": '1',          
    //     })
    // } else {
    //     $('.newfooter1').css({
    //     "position": "fixed",
    //     "z-index": '1000',  
    //     'width': '1920px',
    //     'background': '#1A1A1A',
    //     'bottom': '0'        
    //     })
    // }
});

// 头部栏伸缩

$(function() {
    setTimeout(function() {
        $('.ih_4con').css('height','auto')
        $('.imain_6con').css('height','auto')
    },1000)
})
$('.ih_4con').slideUp()
$('.imain_6con').slideUp()
$('.ih_4').each(function(i,e) {
    $(e).on('mouseenter',function() {
        console.log('进入',i)
        $('.ih_4con').stop()
        $('.ih_4con').slideUp()
        $('.ih_4con').eq(i).slideDown()
    })
    $(e).on('mouseleave',function() {
        $('.ih_4con').stop()
        // $('.ih_4con').slideUp()
        // console.log('leave',i)
        $('.ih_4con').eq(i).slideUp()
    })
})
$('.ih_2').on('mouseleave',function() {
    // console.log('离开父级')
    $('.ih_4con').stop()
    $('.ih_4con').stop()
    $('.ih_4con').stop()
    $('.ih_4con').slideUp()
})
$('.imain_3 li').each(function(i,e) {
    $(e).on('mouseenter',function() {
        $('.imain_6con').stop()
        $('.imain_6con').slideUp()
        $('.imain_6con').eq(i).slideDown()
    })
    $(e).on('mouseleave',function() {
        $('.imain_6con').stop()
        $('.imain_6con').eq(i).slideUp()
    })
})
$('.imain_3').on('mouseleave',function() {
    // console.log('离开父级')
    $('.imain_6con').stop()
    $('.imain_6con').stop()
    $('.imain_6con').stop()
    $('.imain_6con').slideUp()
})

$('.bycmain').on('mouseleave', function () {
    $('.bycmain li').css('width', '236px')
})
$('.bycmain').each(function (i, e) {
    let liarr = $(e).children('li');
    $(e).children('li').each(function (i, e) {
        $(e).on('mouseenter', function () {
            liarr.css('width', '115px')
            $(this).css('width', '720px')
        })
    })
})

// 页面滚动
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
$("html,body").animate({
    // scrollTop: 8400 + 'px',
}, 100)
// 头部栏
$('.im_6slidercon li').eq(0).css('display', 'block');
$('.im_6slider li').each(function (i, e) {
    $(e).click(function () {
        $('.im_6slider li').removeClass('im_6slideractive');
        $(e).addClass('im_6slideractive');
        $('.im_6slidercon li').css('display', 'none');
        $('.im_6slidercon li').eq(i).css('display', 'block');
    });
});
var bannerswiper = new Swiper('.swiperBox .swiper-container', {
    loop: true,
    pagination: {
        el: '.swiperBox .swiper-pagination',
    },
});
// 录取
$(function () {
    $('.dowebok').liMarquee({
        direction: 'up',
        drag: false
    });
});

var swiper = new Swiper('.lumainswiper .swiper-container', {
    slidesPerView: 7,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var galleryThumbsnews = new Swiper('.gallery-thumbs1', {
    spaceBetween: 10,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTopnew = new Swiper('.gallery-top1', {
    spaceBetween: 10,
    thumbs: {
        swiper: galleryThumbsnews
    }
});
//   达人状元榜
var galleryThumbsnews = new Swiper('.gallery-thumbs2', {
    spaceBetween: 10,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,
});
var galleryTopnew = new Swiper('.gallery-top2', {
    spaceBetween: 10,
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,
    thumbs: {
        swiper: galleryThumbsnews
    }
});



$('.lus_1 ').each(function (i, e) {
    $(e).click(function () {
        $('.lus_1 ').removeClass('lus_1active');
        $(e).addClass('lus_1active');
        $('.lumaincon').css('display', 'none');
        $('.lumaincon').eq(i).css('display', 'block');
    });
});
$('.xinarrowgunleft').click(function () {
    galleryTopnew.slidePrev()
})

$('.xinarrowgunright').click(function () {
    galleryTopnew.slideNext()
})

function numUp(obj, num) {
    if (num < 133) {
        var time = Math.floor(1000 / num);
        var timer1;
        var fixedNum = parseFloat(num % 1).toFixed(2) - 0
        var i = 0;
        if (i <= num) {
            timer1 = setInterval(function () {
                if (i <= num) {
                    obj.text(i++);
                } else {
                    clearInterval(timer1);
                    if (fixedNum > 0) {
                        obj.text(i + fixedNum - 1);

                    }
                }
            }, time)
        } else {
            clearInterval(timer1)
        }
    } else if (num > 133) {
        var n = Math.ceil(num / (Math.floor(2000 / 15)));
        var timer1;
        var i = 0;
        if (i <= num) {
            timer1 = setInterval(function () {
                if (i <= num) {
                    obj.text(i += n);
                } else {
                    obj.text(num);
                    clearInterval(timer1);
                }
            }, 10)
        } else {
            clearInterval(timer1)
        }
    }
};
var tag = 0;
$("body").scroll(function (event) {
    if ($("body").scrollTop() > 350 && tag == 0) {
        numUp($(".numup1"), 56);
        numUp($(".numup2"), 5400);
        numUp($(".numup3"), 10000);
        numUp($(".numup4"), 98.2);
        tag = 1;
    }
});

// 关于新闻
$('.xincon_12 ').each(function (i, e) {
    $(e).click(function () {
        $('.xincon_12 ').removeClass('xincon_12active');
        $(e).addClass('xincon_12active');
        $('.xinmain').css('display', 'none');
        $('.xinmain').eq(i).css('display', 'block');
    });
});

var xinswiper = new Swiper('.xinmainleft .swiper-container', {
    loop: true,
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,
    autoplay: true,
    pagination: {
        el: '.xinmainleft .swiper-pagination',
    },
});


$('.xinswierleft').each(function (i, e) {
    $(e).click(function () {
        xinswiper[i].slidePrev()
    })
})
$('.xinswierright').each(function (i, e) {
    $(e).click(function () {
        xinswiper[i].slideNext()
    })
})

$('.fkfkslider').each(function (i, e) {
    $(e).click(function () {
        $('.fkfkslider').removeClass('fkfkslideractive');
        $(e).addClass('fkfkslideractive');
        $('.fkfk2con').css({
            'height': '0px'
        });
        // $('.fkfk2con').eq(i).css('display', 'block');
        $('.fkfk2con').eq(i).css({
            'height': '100px',
        });
    });
});
$('.fkfk2con').eq(0).css({
    'height': '100px',
});
// 达人荣誉
var ronswiper = new Swiper('.roncon .swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    // pagination: {
    //     el: '.roncon .swiper-pagination',
    //     type: 'progressbar',
    // },

});
var lengthrong = $('.rongm_1').length;

$('.rongm_5 ').each(function (i, e) {
    $(e).mouseenter(function () {
        $('.rongm_1').css('display', 'none');
        if (i >= length + 4) {
            $('.rongm_1').eq(i-9).css('display', 'block');
        } else {
            $('.rongm_1').eq(i-5).css('display', 'block');
        }
    });
});
$('.leftswiper').click(function () {
    ronswiper.slidePrev();
})
$('.rightswiepr').click(function () {
    ronswiper.slideNext();
})
// 优势开始
var youswiper = new Swiper('.youcon .swiper-container', {
    loop: true,
    on: {
        slideChangeTransitionStart: function () {
            $('.yous_1 ').removeClass('yous_1active');
            console.log(this.activeIndex)
            if (this.activeIndex == 9) {
                $('.yous_1').eq(0).addClass('yous_1active');
            } else {
                $('.yous_1').eq(this.activeIndex - 1).addClass('yous_1active');
            }
        },
    },
});

$('.yous_1 ').each(function (i, e) {
    $(e).click(function () {
        $('.yous_1 ').removeClass('yous_1active');
        $(e).addClass('yous_1active');
        // $('.youcon').css('display', 'none');

        youswiper.slideTo(i + 1, 1000, false); //切换到第一个slide，速度为1秒
        // $('.youcon').eq(i).css('display', 'block');
    });
});



$(function () {
    $('.box3_4').eq(0).css('width', '430px');

})

// 推拉式
$('.box3_2').each(function (i, e) {
    $(e).click(function () {
        $('.box3_2').removeClass('box3_2active');
        $(e).addClass('box3_2active');
        $('.box3_4').css('width', '0px');
        $('.box3_4').eq(i).css('width', '430px');
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
    loop: true,
    pagination: {
        el: '.mingshicon .swiper-pagination',
        type: 'progressbar',
    },
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true, //修改swiper的父元素时，自动初始化swiper
});



$('.leftmsswiper ').each(function (i, e) {
    $(e).click(function () {
        proswiper[i].slidePrev()
    });
});
$('.rightmsswiepr ').each(function (i, e) {
    $(e).click(function () {
        proswiper[i].slideNext()
    });
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
    loop: true,
    thumbs: {
        swiper: galleryThumbs1
    },
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,
});
// $('.thumbsarrow1').click(function () {
//     thumbsarrow1.slidePrev();
// })
// $('.thumbsarrow2').click(function () {
//     thumbsarrow1.slideNext();
// })
$('.stuconleftmsswiper').click(function () {
    thumbsarrow1.slidePrev();
})
$('.stuconrightmsswiepr').click(function () {
    thumbsarrow1.slideNext();
})

// 学生选项卡2
var galleryThumbs2 = new Swiper('.stucon .gallery-thumbs_1', {
    spaceBetween: 10,
    direction: 'vertical',
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,
});
var thumbsarrow2 = new Swiper('.stucon .gallery-top_1', {
    spaceBetween: 10,
    loop: true,
    thumbs: {
        swiper: galleryThumbs2
    },
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,
});
// 学生选项卡3
var galleryThumbs3 = new Swiper('.stucon .gallery-thumbs_2', {
    spaceBetween: 10,
    direction: 'vertical',
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,
});
var thumbsarrow3 = new Swiper('.stucon .gallery-top_2', {
    spaceBetween: 10,
    loop: true,
    thumbs: {
        swiper: galleryThumbs3
    },
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,
});
// 学生选项卡4
var galleryThumbs4 = new Swiper('.stucon .gallery-thumbs_3', {
    spaceBetween: 10,
    direction: 'vertical',
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,
});
var thumbsarrow4 = new Swiper('.stucon .gallery-top_3', {
    spaceBetween: 10,
    loop: true,
    thumbs: {
        swiper: galleryThumbs4
    },
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,
});

$('.thumbsarrow1').each(function (i, e) {
    $(e).click(function () {
        if (i === 0) {
            thumbsarrow1.slidePrev();
        }
        if (i === 1) {
            thumbsarrow2.slidePrev();
        }
        if (i === 2) {
            thumbsarrow3.slidePrev();
        }
        if (i === 3) {
            thumbsarrow4.slidePrev();
        }
    })
})
$('.thumbsarrow2').each(function (i, e) {
    $(e).click(function () {
        if (i === 0) {
            thumbsarrow1.slideNext();
        }
        if (i === 1) {
            thumbsarrow2.slideNext();
        }
        if (i === 2) {
            thumbsarrow3.slideNext();
        }
        if (i === 3) {
            thumbsarrow4.slideNext();
        }
    })
})
$('.stuconleftmsswiper').each(function (i, e) {
    $(e).click(function () {
        if (i === 0) {
            thumbsarrow1.slidePrev();
        }
        if (i === 1) {
            thumbsarrow2.slidePrev();
        }
        if (i === 2) {
            thumbsarrow3.slidePrev();
        }
        if (i === 3) {
            thumbsarrow4.slidePrev();
        }
    })
})
$('.stuconrightmsswiepr').each(function (i, e) {
    $(e).click(function () {
        if (i === 0) {
            thumbsarrow1.slideNext();
        }
        if (i === 1) {
            thumbsarrow2.slideNext();
        }
        if (i === 2) {
            thumbsarrow3.slideNext();
        }
        if (i === 3) {
            thumbsarrow4.slideNext();
        }
    })
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

var certifySwiper = new Swiper('.zuopincon .swiper-container', {
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    loopedSlides: 5,
    // autoplay: true,
    pagination: {
        el: '.zuopincon .swiper-pagination',
        //clickable :true,
    },
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,
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

$('.certifybtnleft').each(function (i, e) {
    $(e).click(function () {
        certifySwiper[i].slidePrev()
    })
})
$('.certifybtnright').each(function (i, e) {
    $(e).click(function () {
        certifySwiper[i].slideNext()
    })
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
    loop: true,
    autoplay: true,
    pagination: {
        el: '.huancon_4 .swiper-pagination',
    },
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,
});
$('.mxslider5 ').each(function (i, e) {
    $(e).click(function () {
        $('.mxslider5 ').removeClass('mxslideractive2');
        $(e).addClass('mxslideractive2');
        $('.huancon').css('display', 'none');
        $('.huancon').eq(i).css('display', 'block');
    });
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