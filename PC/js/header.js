



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

// 头部蓝
// 头部栏伸缩

$(function() {
    setTimeout(function() {
        $('.ih_5con').css('height','auto')
        $('.ih_4con').css('height','auto')
        $('.imain_6con').css('height','auto')
    },1000)
})
$('.ih_4con').slideUp()
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

$('.ih_5').each(function(i,e) {
    $(e).on('mouseenter',function() {
        console.log('进入',i)
        $('.ih_5con').stop()
        $('.ih_5con').slideUp()
        $('.ih_5con').eq(i).slideDown()
    })
    $(e).on('mouseleave',function() {
        $('.ih_5con').stop()
        // $('.ih_4con').slideUp()
        // console.log('leave',i)
        $('.ih_5con').eq(i).slideUp()
    })
})

// 哈哈
$('.ih_5con').slideUp()

$('.ih_3').on('mouseleave',function() {
    // console.log('离开父级')
    $('.ih_5con').stop()
    $('.ih_5con').stop()
    $('.ih_5con').stop()
    $('.ih_5con').slideUp()
})
// 二维码
$('.imain_6con').slideUp()
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


