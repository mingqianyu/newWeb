var swiper = new Swiper('.swipermain .swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.swipermain .swiper-pagination',
    },
  });
// 新闻邮编切换
  var swiper = new Swiper('.new2_2 .swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var swiper = new Swiper('.zhan2-2 .swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
// 课程轮播达人课程
var swiper = new Swiper('.roombox .room1_1 .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 15,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.room1_1 .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
// 暑假活动
var swiper = new Swiper('.roomright2 .swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.roomright2 .swiper-pagination',
    },
  });
  // 达人名师
var mingswiper = new Swiper('.teacherImfor .teacher1_2 .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.teacher1_2 .swiper-pagination',
      clickable: true,
    },
  });
  $(".jiantouLeft").click(function(){
    mingswiper.slidePrev();
    });
    $(".jiantouRight").click(function(){
      mingswiper.slideNext();
    });

// 动态 选项卡
var myswiper = new Swiper('.worksleftCon .swiper-tabs',{loop:true,})
myswiper.slideTo(0,500)
$('.workslider').on('touchstart mousedown',function(e) {
    e.preventDefault()
        $(".workslider").removeClass('worksliderAcitve')
        $(this).addClass('worksliderAcitve')
        myswiper.slideTo($(this).index(),500)
})
var aboutss = new Swiper('.aboutsCon .swiper-tabs',{loop:true,})
aboutss.slideTo(0,500)
$('.aboutslider').on('touchstart mousedown',function(e) {
    e.preventDefault()
        $(".aboutslider").removeClass('aboutacitve')
        $(this).addClass('aboutacitve')
        aboutss.slideTo($(this).index()+1,500)
})


var time1 = '';
	time1 = $('.dowebok').eq(0).liMarquee({
		direction: 'up'
	});
$('.zhanslider').each(function (i, e) {
  $(e).click(function () {
      $('.zhanslider').removeClass('zhanslideractive');
      $(e).addClass('zhanslideractive');
      $('.zhanCon').css('display', 'none');
      $('.zhanCon').eq(i).css('display', 'block');
      time1.liMarquee('destroy')
      setTimeout(function() {
        time1 =  $('.dowebok').eq(i).liMarquee({
          direction: 'up'
        });
      },100)
      

  });
});


// $(window).resize(function () {

//     if (($('body').width()) > 1903) {
//         $('.allbox').removeClass('phone')
//         $('.allbox').addClass('pc')
//     } else if (($('body').width()) <= 1200) {
//         $('.allbox').addClass('pc')
//         // 1200 -900
//         if (($('body').width()) < 900) {
//             $('.allbox').removeClass('pc')
//             $('.allbox').addClass('phone')
//             $('.allbox').css("marginLeft", "0px");
//         } else {
//             $('.allbox').removeClass('phone')
//             $('.allbox').addClass('pc')
//         }
//     } else {
//         var num1 = $('body').width();
//         var num = (num1 - 1902) / 2;
//         $('.allbox').css("marginLeft", num + "px");
//     }

// });
// if (($('body').width()) > 900) {
//     $('.allbox').addClass('pc')
//     $(function () {
//         if (($('body').width()) > 1903) {

//         } else if (($('body').width()) <= 1200) {
//             $('.allbox').css("marginLeft", "-270px");
//             $('.allbox').css("overflow", "hidden");
//         } else {

//             var num1 = $('body').width();
//             var num = (num1 - 1902) / 2;
//             $('.allbox').css("marginLeft", num + "px");
//         }
//     });
// } else {
//     $('.allbox').removeClass('pc')
//     $('.allbox').addClass('phone')
// }


$('.rightslider').each(function (i, e) {
    $(e).click(function () {
        $('.rightslider').removeClass('rightactive');
        $(e).addClass('rightactive');
        $('.rightCon').css('display', 'none');
        $('.rightCon').eq(i).css('display', 'block');
    });
});

$('.rightslider1').each(function (i, e) {
    $(e).click(function () {
        $('.rightslider1').removeClass('rightactive1');
        $(e).addClass('rightactive1');
        $('.rightCon1').css('display', 'none');
        $('.rightCon1').eq(i).css('display', 'block');
    });
});
// 新闻
$('.newslider').each(function (i, e) {
    $(e).click(function () {
        $('.newslider').removeClass('newslideractive');
        $(e).addClass('newslideractive');
        $('.newcontentright').css('display', 'none');
        $('.newcontentright').eq(i).css('display', 'block');
    });
});
$('.new2_4').each(function (i, e) {
    $(e).click(function () {
        $('.new2_4').removeClass('new2_4active');
        $(e).addClass('new2_4active');
        $('.new2_5').css('display', 'none');
        $('.new2_5').eq(i).css('display', 'block');
    });
});
$('.studslider1').each(function (i, e) {
    $(e).click(function () {
        $('.studslider1').removeClass('studsliderActive');
        $(e).addClass('studsliderActive');
        $('.studentCon1').css('display', 'none');
        $('.studentCon1').eq(i).css('display', 'block');
    });
});
$('.worksr1slider').each(function (i, e) {
    $(e).click(function () {
        $('.worksr1slider').removeClass('r1active');
        $(e).addClass('r1active');
        $('.worksr1con').css('display', 'none');
        $('.worksr1con').eq(i).css('display', 'block');
    });
});
$('.studslider11').each(function (i, e) {
  $(e).click(function () {
      $('.studslider11').removeClass('studsliderActive1');
      $(e).addClass('studsliderActive1');
      $('.studentCon11').css('display', 'none');
      $('.studentCon11').eq(i).css('display', 'block');
  });
});

// if (($('body').width()) > 900) {
//     var swiper = new Swiper('.swiperBox .swiper-container', {
//         loop: true,
//         slidesPerView: 5,
//         slidesPerGroup: 5,
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });
// } else {
//     var swiper = new Swiper('.swiperBox .swiper-container', {
//         loop: true,
//         slidesPerView: 2,
//         slidesPerGroup: 2,
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });
// }
// //  headerJs
// if (($('body').width()) > 900) {
//     $('.headerBox').addClass('pcHeader')
//     $('.headerBox').removeClass('phoneHeader')
// } else {
//     $('.headerBox').removeClass('pcHeader')
//     $('.headerBox').addClass('phoneHeader')
// }

// var myswiper = new Swiper('.swiper-tabs',{loop:true,})
// myswiper.slideTo(1,500)
// $('.footerTabs .tab').on('touchstart mousedown',function(e) {
//     e.preventDefault()
//         $(".footerTabs .active").removeClass('active')
//         $(this).addClass('active')
//         console.log($(this).index())
//         myswiper.slideTo($(this).index(),500)
// })
