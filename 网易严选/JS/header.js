$('header li a,.header li a').attr('href', 'javascript:;');
$(window).scroll(() => {
    if ($('html,body').scrollTop() >= 176) {
        $('.header').css('top', 0)
    } else {
        $('.header').css('top', '-51px')
    }
    if ($('html,body').scrollTop() >= 532) {
        $('aside').addClass('fixed')
    } else {
        $('aside').removeClass('fixed')
    }
})
// 返回顶部
$('.toTop').click(() => {
    $('html,body').animate({
        'scrollTop': '0'
    }, 500)
})
// 选项卡
$.get('../JSON/头部分类.json', (str) => {
    $('header .over').hover(function () {
        $('#main').stop().fadeIn(200);
        $('#main .main').html('')
        var index = $(this).index('header .over');
        $.each(str[index].fenlei, (i) => {
            var oBox = $(`
            <div class="box">
                <div class="title">${str[index].fenlei[i].fenlei1}</div>
            </div>
            `);
            $.each(str[index].fenlei[i].fenlei2, (j) => {
                $(`
                <div class="shop">
                    <img src="${str[index].fenlei[i].image[j]}" alt="">
                    <a href="">${str[index].fenlei[i].fenlei2[j]}</a>
                </div>
                `).appendTo(oBox)
            })
            oBox.appendTo('#main .main')
        })
        $('#main').css({
            'left': '50%',
            'marginLeft': -($('#main').width() / 2)
        });
    }, function () {
        $('#main').stop().fadeOut(200)
    })
    $('#main').hover(function () {
        $(this).stop().fadeIn(200)
    }, function () {
        $(this).stop().fadeOut(200)
    })


    $('.header .over').hover(function () {
        $('#main2').stop().fadeIn(200);
        $('#main2 .main').html('')
        var index = $(this).index('.header .over');
        $.each(str[index].fenlei, (i) => {
            var oBox = $(`
            <div class="box">
                <div class="title">${str[index].fenlei[i].fenlei1}</div>
            </div>
            `);
            $.each(str[index].fenlei[i].fenlei2, (j) => {
                $(`
                <div class="shop">
                    <img src="${str[index].fenlei[i].image[j]}" alt="">
                    <a href="">${str[index].fenlei[i].fenlei2[j]}</a>
                </div>
                `).appendTo(oBox)
            })
            oBox.appendTo('#main2 .main')
        })
        $('#main2').css({
            'left': '50%',
            'marginLeft': -($('#main2').width() / 2)
        });
    }, function () {
        $('#main2').stop().fadeOut(200)
    })
    $('#main2').hover(function () {
        $(this).stop().fadeIn(200)
    }, function () {
        $(this).stop().fadeOut(200)
    })
})