// 详情页上一页 下一页
$('.zxiangacitive').each(function (i, e) {
    $(e).click(function () {
        $('.zxiangacitive').removeClass('zxiangacitive1');
        $(e).addClass('zxiangacitive1');
    });
});


// 底部栏
$('.fixbottomslider').each(function (i, e) {
    $(e).click(function () {
        $('.fixbottomslider').removeClass('centerbottomslider');
        $(e).addClass('centerbottomslider');
    });
});


$('.leftHeader').on('click',function() {
    var _this = this;
    if (!$(this).hasClass('hover')) {
        $(this).addClass('hover');
        $('.hline1').animate({
            'top': '50%'
        },200,function() {
            $('.hline2').hide();
            $('.indexHeader').css({
                'background': '#262626',
            })
            $('.boxlogo').css('display','none')
            $('.boxlogo2').css('display','block')
        }).css({
            'transform': 'rotate(45deg)',
            'background': '#fff'
        })
        $('.hline3').animate({
            'top': '50%'
        },200,function() {
            $('.hline2').hide();
        }).css({
            'transform': 'rotate(-45deg)',
            'background': '#fff'
        })
        // 显示UI
        // $('.headerSlider').slideDown('300')
        $('.whiteBox').animate({
            left: '0rem'
        },300,function() {
            $('.whiteBox').css('left','auto');
            $('.headerSlider').css({
                'opacity': '1'
            }); 
            $('.whiteBox').animate({
                right: '-7.5rem'
            },300,function() {
                $('.whiteBox').css('right','auto') 
                $('.whiteBox').css('left','-7.5rem') 
                
            })
        })
        setTimeout(() => {
            $('.headerSlider').animate({left: '0rem'},300,function() {
                $('.lislider').css({
                    'opacity': '1',
                    'left': '0rem'
                })
            })
        }, 300);
    } else {
        // 关闭页面
        $(this).removeClass('hover');
        $('.hline1').animate({
            'top': '0%'
        },200, function() {
            $('.hline2').show();
            $('.hline1').css({
                'transform': 'rotate(0deg)',
                'background': 'rgba(43,43,43,1)'
            })
            $('.indexHeader').css({
                'background': '#fff',
            })
            $('.boxlogo').css('display','block')
            $('.boxlogo2').css('display','none')
        })
        $('.hline3').animate({
            'top': '100%'
        },200, function() {
            $('.hline2').show();
            $('.hline3').css({
                'transform': 'rotate(0deg)',
                'background': 'rgba(43,43,43,1)'
            })
        })
        // 隐藏UI
        // $('.headerSlider').slideUp('300')
        $('.headerSlider').animate({left: '-7.5rem'},300,function() {
            $('.lislider').css({
                'opacity': '0'
            });
            $('.headerSlider').css({
                'opacity': '0'
            });
            $('.delay2').css({'left':'.2rem'})
            $('.delay3').css({'left':'.4rem'})
            $('.delay4').css({'left':'.6rem'})
            $('.delay5').css({'left':'.8rem'})
            $('.delay6').css({'left':'1rem'})
            $('.delay7').css({'left':'1.2rem'})
            $('.delay8').css({'left':'1.4rem'})
            $('.delay9').css({'left':'1.6rem'})
            $('.delay10').css({'left':'1.8rem'})
        })
    }
})

$('.lislider').each(function (i, e) {
    $(e).click(function () {
        if (!$(e).hasClass('liactive')) {
            $(e).addClass('liactive')
            $('.animateBox').css('height','0rem');
            $('.boxslider').css('color','#fff');
            $('.spanshu').css('height', '.03rem');
            $('.spanshu').eq(i).css('height', '0rem');
            var clientHeight = $('.liconmian').eq(i).outerHeight()
            $('.animateBox').eq(i).css('height', clientHeight);
            $('.boxslider').eq(i).css('color', '#b20000');
        } else {
            $(e).removeClass('liactive')
            $('.animateBox').css('height','0rem');
            $('.boxslider').css('color','#fff');
            $('.spanshu').css('height', '.03rem');
        }
    });
});
// 阻止点击的冒泡
$('.liconmian').on('click',function(event) {
    event.stopPropagation();
})



































