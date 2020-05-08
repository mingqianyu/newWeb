var swiper = new Swiper('.teacherswiper .swiper-container', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  function gun(num) {
    var nownum = $(window).scrollTop()
    console.log('xianzaiweizhi ',nownum,num)
    var step = (num - nownum )/100;
    console.log(step,'step')
    var time1 = setInterval(() => {
        nownum +=step;
        $(window).scrollTop(nownum)
        if (nownum >= num) {
          clearInterval(time1)
        }
    }, 1);
  }
  $('.csdslder').each(function (i, e) {
    $(e).click(function () {
        if(i == 1 ) {
            // $(window).scrollTop(1420)\\
          gun(1420)
        }
        if(i == 2 ) {
            // $(window).scrollTop(1720)
          gun(1720)

        }
        if(i == 3 ) {
            // $(window).scrollTop(2130)
            gun(2130)
        }
        if(i == 4 ) {
            // $(window).scrollTop(2600)
            gun(2580)
        }
    });
  });

  var mingswiper = new Swiper('.csdswiper .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
  });
  $(".swiperleftarrow").click(function(){
    mingswiper.slidePrev();
    });
    $(".swiperrightarrow").click(function(){
      mingswiper.slideNext();
    });