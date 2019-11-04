// 清除默认事件
$(document).mousedown(() => {
    return false;
})
// 加载头部尾部
$('#header').load('./header.html');
$('#footer').load('./footer.html');
// 轮播图1
var swiper1 = new Swiper('.swiper1', {
    autoplay: {
        // 延时时间
        delay: 2000,
        /* 
        用户操作swiper之后，是否禁止autoplay。默认为true：停止。
        如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
        操作包括触碰，拖动，点击pagination等。
        */
        disableOnInteraction: false,
    },
    // 是否循环
    loop: true,
    // 以下两个属性都加上可以减少80%问题
    observer: true,
    observeParents: true,
    // 左右切换按钮
    navigation: {
        nextEl: '#swiper1 .next1',
        prevEl: '#swiper1 .prev1',
    },
    // 分页器
    pagination: {
        el: '.sp1',
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    }
});
swiper1.el.onmouseover = function () {
    swiper1.autoplay.stop();
}
swiper1.el.onmouseleave = function () {
    swiper1.autoplay.start();
}
// 滑动切换
for (i = 0; i < swiper1.pagination.bullets.length; i++) {
    swiper1.pagination.bullets[i].onmouseover = function () {
        this.click();
    };
}

// 轮播图2
var swiper2 = new Swiper('.swiper2', {
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.swiper2 .next1',
        prevEl: '.swiper2 .prev1',
    },
})
$('#next1').click(() => {
    $('.swiper2 .next1').click()
})
$('#prev1').click(() => {
    $('.swiper2 .prev1').click()
})
// 新品首发
$.get('../JSON/新品首发.json', (str) => {
    $.each(str, (i) => {
        $('.content2 .box').eq(i).find('.img1').attr('src', str[i].img1);
        $('.content2 .box').eq(i).find('.new').html(str[i].span1);
        $('.content2 .box').eq(i).find('.main>span').html(str[i].promContent);
        $('.content2 .box').eq(i).find('.bottom>span').html(str[i].span1);
        $('.content2 .box').eq(i).find('.price1 span').html(str[i].price);
        $('.content2 .box').eq(i).find('h4>span').html(str[i].h4);
        $('.content2 .box').eq(i).find('p>span').html(`￥${str[i].price}`);
        $('.content2 .box').eq(i).find('del').html(str[i].yuanjia);
        $('.content2 .box').eq(i).hover(function () {
            $(this).find('.img1').attr('src', str[i].imgHover);
        }, function () {
            $(this).find('.img1').attr('src', str[i].img1);
        })
    })
})


// 轮播图3
var swiper3 = new Swiper('.swiper3', {
    autoplay: {
        // 延时时间
        delay: 2000,
        /* 
        用户操作swiper之后，是否禁止autoplay。默认为true：停止。
        如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
        操作包括触碰，拖动，点击pagination等。
        */
        disableOnInteraction: false,
    },
    // 是否循环
    loop: true,
    // 以下两个属性都加上可以减少80%问题
    observer: true,
    observeParents: true,
    // 左右切换按钮
    navigation: {
        nextEl: '.next3',
        prevEl: '.prev3',
    },
    // 分页器
    pagination: {
        el: '.sp3',
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    }
});
swiper3.el.onmouseover = function () {
    swiper3.autoplay.stop();
}
swiper3.el.onmouseleave = function () {
    swiper3.autoplay.start();
}
// 滑动切换
for (i = 0; i < swiper3.pagination.bullets.length; i++) {
    swiper3.pagination.bullets[i].onmouseover = function () {
        this.click();
    };
}

$.get('../JSON/index.json', (str) => {
    // 人气推荐
    var index = 0;
    $('.content3 li').click(function () {
        index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.content3 .main').html('')
        $.each(str[index], (i) => {
            $(`
            <div class="box">
                <div class="top">
                    <img src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png" alt=""
                        class="img">
                    <img src="${str[index][i].img2}"
                        alt="" class="img2">
                    <div class="bom">
                        <div class="left">
                            <div class="new">${str[index][i].new}</div>
                            <div class="price"><span>${str[index][i].span}</span><i>${str[index][i].i}</i></div>
                        </div>
                        <div class="right">
                            ${str[index][i].right}
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="tit">
                        <span>${str[index][i].new}</span>
                    </div>
                    <h4><span>${str[index][i].title}</span></h4>
                    <p class="Price"><span>${str[index][i].price}</span><del>${str[index][i].del}</del></p>
                </div>
            </div>
            `).appendTo('.content3 .main')
        })
    })
    $.each(str[index], (i) => {
        $(`
        <div class="box">
            <div class="top">
                <img src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png" alt=""
                    class="img">
                <img src="${str[index][i].img2}"
                    alt="" class="img2">
                <div class="bom">
                    <div class="left">
                        <div class="new">${str[index][i].new}</div>
                        <div class="price"><span>${str[index][i].span}</span><i>${str[index][i].i}</i></div>
                    </div>
                    <div class="right">
                        ${str[index][i].right}
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="tit">
                    <span>${str[index][i].new}</span>
                </div>
                <h4><span>${str[index][i].title}</span></h4>
                <p class="Price"><span>${str[index][i].price}</span><del>${str[index][i].del}</del></p>
            </div>
        </div>
        `).appendTo('.content3 .main')
    })

    // 轮播图4
    $.each(str[2], (i) => {
        $(`
        <div class="swiper-slide"><img src="${str[2][i]}" alt=""></div>
        `).appendTo('.swiper4 .swiper-wrapper')
    })
    var swiper4 = new Swiper('.swiper4', {
        // 是否循环
        loop: true,
        // 以下两个属性都加上可以减少80%问题
        observer: true,
        observeParents: true,
        // 左右切换按钮
        navigation: {
            nextEl: '.next4',
            prevEl: '.prev4',
        },
        // 分页器
        pagination: {
            el: '.sp4',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        }
    });
    // 滑动切换
    for (i = 0; i < swiper4.pagination.bullets.length; i++) {
        swiper4.pagination.bullets[i].onmouseover = function () {
            this.click();
        };
    }

    // 居家生活
    $.each(str[3], (i) => {
        $(`
        <div class="box">
            <div class="top">
                <img src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png" alt=""
                    class="img1">
                <img src="${str[3][i].img2}"
                    alt="" class="img2">
                <div class="end">
                    <div class="left">
                        <div class="tit">${str[3][i].tit}</div>
                        <div class="main">${str[3][i].main}<i>${str[3][i].i}</i></div>
                    </div>
                    <div class="right">${str[3][i].right}</div>
                </div>
            </div>
            <div class="bottom">
                <span>${str[3][i].tit}</span>
                <h4><span>${str[3][i].h4}</span></h4>
                <p class="price">¥${str[3][i].price}</p>
            </div>
        </div>
        `).appendTo('.content5 .btm');

        $('.content5 .box').eq(i).hover(function () {
            $(this).find('.img2').attr('src', str[3][i].img3)
        }, function () {
            $(this).find('.img2').attr('src', str[3][i].img2)
        })
    })

    // 服饰鞋包
    $.each(str[4], (i) => {
        $(`
        <div class="box">
            <div class="top">
                <img src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png" alt=""
                    class="img1">
                <img src="${str[4][i].img2}"
                    alt="" class="img2">
                <div class="end">
                    <div class="left">
                        <div class="tit">${str[4][i].tit}</div>
                        <div class="main">${str[4][i].main}<i>${str[4][i].i}</i></div>
                    </div>
                    <div class="right">${str[4][i].right}</div>
                </div>
            </div>
            <div class="bottom">
                <span>${str[4][i].tit}</span>
                <h4><span>${str[4][i].h4}</span></h4>
                <p class="price">¥${str[4][i].price}<del>${str[4][i].del}</del></p>
            </div>
        </div>
        `).appendTo('.content6 .btm');

        $('.content6 .box').eq(i).hover(function () {
            $(this).find('.img2').attr('src', str[4][i].img3)
        }, function () {
            $(this).find('.img2').attr('src', str[4][i].img2)
        })
    })

    // 轮播图5
    $.each(str[5], (i) => {
        $(`
        <div class="swiper-slide"><img src="${str[5][i]}" alt=""></div>
        `).appendTo('.swiper5 .swiper-wrapper')
    })
    var swiper5 = new Swiper('.swiper5', {
        // 是否循环
        loop: true,
        // 以下两个属性都加上可以减少80%问题
        observer: true,
        observeParents: true,
        // 左右切换按钮
        navigation: {
            nextEl: '.next5',
            prevEl: '.prev5',
        },
        // 分页器
        pagination: {
            el: '.sp5',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        }
    });
    // 滑动切换
    for (i = 0; i < swiper5.pagination.bullets.length; i++) {
        swiper5.pagination.bullets[i].onmouseover = function () {
            this.click();
        };
    }

    // 美食酒水
    $.each(str[6], (i) => {
        $(`
        <div class="box">
            <div class="top">
                <img src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png" alt=""
                    class="img1">
                <img src="${str[6][i].img2}"
                    alt="" class="img2">
                <div class="end">
                    <div class="left">
                        <div class="tit">${str[6][i].tit}</div>
                        <div class="main">${str[6][i].main}<i>${str[6][i].i}</i></div>
                    </div>
                    <div class="right">${str[6][i].right}</div>
                </div>
            </div>
            <div class="bottom">
                <span>${str[6][i].tit}</span>
                <h4><span>${str[6][i].h4}</span></h4>
                <p class="price">¥${str[6][i].price}<del>${str[6][i].del}</del></p>
            </div>
        </div>
        `).appendTo('.content7 .btm');

        $('.content7 .box').eq(i).hover(function () {
            $(this).find('.img2').attr('src', str[6][i].img3)
        }, function () {
            $(this).find('.img2').attr('src', str[6][i].img2)
        })
    })

    // 轮播图6
    $.each(str[7], (i) => {
        $(`
        <div class="swiper-slide"><img src="${str[7][i]}" alt=""></div>
        `).appendTo('.swiper6 .swiper-wrapper')
    })
    var swiper6 = new Swiper('.swiper6', {
        // 是否循环
        loop: true,
        // 以下两个属性都加上可以减少80%问题
        observer: true,
        observeParents: true,
        // 左右切换按钮
        navigation: {
            nextEl: '.next6',
            prevEl: '.prev6',
        },
        // 分页器
        pagination: {
            el: '.sp6',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        }
    });
    // 滑动切换
    for (i = 0; i < swiper6.pagination.bullets.length; i++) {
        swiper6.pagination.bullets[i].onmouseover = function () {
            this.click();
        };
    }

    // 个护清洁
    $.each(str[8], (i) => {
        $(`
        <div class="box">
            <div class="top">
                <img src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png" alt=""
                    class="img1">
                <img src="${str[8][i].img2}"
                    alt="" class="img2">
                <div class="end">
                    <div class="left">
                        <div class="tit">${str[8][i].tit}</div>
                        <div class="main">${str[8][i].main}<i>${str[8][i].i}</i></div>
                    </div>
                    <div class="right">${str[8][i].right}</div>
                </div>
            </div>
            <div class="bottom">
                <span>${str[8][i].tit}</span>
                <h4><span>${str[8][i].h4}</span></h4>
                <p class="price">¥${str[8][i].price}<del>${str[8][i].del}</del></p>
            </div>
        </div>
        `).appendTo('.content8 .btm');

        $('.content8 .box').eq(i).hover(function () {
            $(this).find('.img2').attr('src', str[8][i].img3)
        }, function () {
            $(this).find('.img2').attr('src', str[8][i].img2)
        })
    })

    // 轮播图7
    $.each(str[9], (i) => {
        $(`
        <div class="swiper-slide"><img src="${str[9][i]}" alt=""></div>
        `).appendTo('.swiper7 .swiper-wrapper')
    })
    var swiper7 = new Swiper('.swiper7', {
        // 是否循环
        loop: true,
        // 以下两个属性都加上可以减少80%问题
        observer: true,
        observeParents: true,
        // 左右切换按钮
        navigation: {
            nextEl: '.next7',
            prevEl: '.prev7',
        },
        // 分页器
        pagination: {
            el: '.sp7',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        }
    });
    // 滑动切换
    for (i = 0; i < swiper7.pagination.bullets.length; i++) {
        swiper7.pagination.bullets[i].onmouseover = function () {
            this.click();
        };
    }

    // 母婴亲子
    $.each(str[10], (i) => {
        $(`
        <div class="box">
            <div class="top">
                <img src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png" alt=""
                    class="img1">
                <img src="${str[10][i].img2}"
                    alt="" class="img2">
                <div class="end">
                    <div class="left">
                        <div class="tit">${str[10][i].tit}</div>
                        <div class="main">${str[10][i].main}<i>${str[10][i].i}</i></div>
                    </div>
                    <div class="right">${str[10][i].right}</div>
                </div>
            </div>
            <div class="bottom">
                <span>${str[10][i].tit}</span>
                <h4><span>${str[10][i].h4}</span></h4>
                <p class="price">¥${str[10][i].price}<del>${str[10][i].del}</del></p>
            </div>
        </div>
        `).appendTo('.content9 .btm');

        $('.content9 .box').eq(i).hover(function () {
            $(this).find('.img2').attr('src', str[10][i].img3)
        }, function () {
            $(this).find('.img2').attr('src', str[10][i].img2)
        })
    })

    // 轮播图8
    $.each(str[11], (i) => {
        $(`
        <div class="swiper-slide"><img src="${str[11][i]}" alt=""></div>
        `).appendTo('.swiper8 .swiper-wrapper')
    })
    var swiper8 = new Swiper('.swiper8', {
        // 是否循环
        loop: true,
        // 以下两个属性都加上可以减少80%问题
        observer: true,
        observeParents: true,
        // 左右切换按钮
        navigation: {
            nextEl: '.next8',
            prevEl: '.prev8',
        },
        // 分页器
        pagination: {
            el: '.sp8',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        }
    });
    // 滑动切换
    for (i = 0; i < swiper8.pagination.bullets.length; i++) {
        swiper8.pagination.bullets[i].onmouseover = function () {
            this.click();
        };
    }

    // 母婴亲子
    $.each(str[12], (i) => {
        $(`
        <div class="box">
            <div class="top">
                <img src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png" alt=""
                    class="img1">
                <img src="${str[12][i].img2}"
                    alt="" class="img2">
                <div class="end">
                    <div class="left">
                        <div class="tit">${str[12][i].tit}</div>
                        <div class="main">${str[12][i].main}<i>${str[12][i].i}</i></div>
                    </div>
                    <div class="right">${str[12][i].right}</div>
                </div>
            </div>
            <div class="bottom">
                <span>${str[12][i].tit}</span>
                <h4><span>${str[12][i].h4}</span></h4>
                <p class="price">¥${str[12][i].price}<del>${str[12][i].del}</del></p>
            </div>
        </div>
        `).appendTo('.content10 .btm');

        $('.content10 .box').eq(i).hover(function () {
            $(this).find('.img2').attr('src', str[12][i].img3)
        }, function () {
            $(this).find('.img2').attr('src', str[12][i].img2)
        })
    })

    // 轮播图9
    $.each(str[13], (i) => {
        $(`
        <div class="swiper-slide"><img src="${str[13][i]}" alt=""></div>
        `).appendTo('.swiper9 .swiper-wrapper')
    })
    var swiper9 = new Swiper('.swiper9', {
        // 是否循环
        loop: true,
        // 以下两个属性都加上可以减少80%问题
        observer: true,
        observeParents: true,
        // 左右切换按钮
        navigation: {
            nextEl: '.next9',
            prevEl: '.prev9',
        },
        // 分页器
        pagination: {
            el: '.sp9',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        }
    });
    // 滑动切换
    for (i = 0; i < swiper9.pagination.bullets.length; i++) {
        swiper9.pagination.bullets[i].onmouseover = function () {
            this.click();
        };
    }

    // 母婴亲子
    $.each(str[14], (i) => {
        $(`
        <div class="box">
            <div class="top">
                <img src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png" alt=""
                    class="img1">
                <img src="${str[14][i].img2}"
                    alt="" class="img2">
                <div class="end">
                    <div class="left">
                        <div class="tit">${str[14][i].tit}</div>
                        <div class="main">${str[14][i].main}<i>${str[14][i].i}</i></div>
                    </div>
                    <div class="right">${str[14][i].right}</div>
                </div>
            </div>
            <div class="bottom">
                <span>${str[14][i].tit}</span>
                <h4><span>${str[14][i].h4}</span></h4>
                <p class="price">¥${str[14][i].price}<del>${str[14][i].del}</del></p>
            </div>
        </div>
        `).appendTo('.content11 .btm');

        $('.content11 .box').eq(i).hover(function () {
            $(this).find('.img2').attr('src', str[14][i].img3)
        }, function () {
            $(this).find('.img2').attr('src', str[14][i].img2)
        })
    })

    // 轮播图10
    $.each(str[15], (i) => {
        $(`
        <div class="swiper-slide"><img src="${str[15][i]}" alt=""></div>
        `).appendTo('.swiper10 .swiper-wrapper')
    })
    var swiper10 = new Swiper('.swiper10', {
        // 是否循环
        loop: true,
        // 以下两个属性都加上可以减少80%问题
        observer: true,
        observeParents: true,
        // 左右切换按钮
        navigation: {
            nextEl: '.next10',
            prevEl: '.prev10',
        },
        // 分页器
        pagination: {
            el: '.sp10',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        }
    });
    // 滑动切换
    for (i = 0; i < swiper10.pagination.bullets.length; i++) {
        swiper10.pagination.bullets[i].onmouseover = function () {
            this.click();
        };
    }

    // 母婴亲子
    $.each(str[16], (i) => {
        $(`
        <div class="box">
            <div class="top">
                <img src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png" alt=""
                    class="img1">
                <img src="${str[16][i].img2}"
                    alt="" class="img2">
                <div class="end">
                    <div class="left">
                        <div class="tit">${str[16][i].tit}</div>
                        <div class="main">${str[16][i].main}<i>${str[16][i].i}</i></div>
                    </div>
                    <div class="right">${str[16][i].right}</div>
                </div>
            </div>
            <div class="bottom">
                <span>${str[16][i].tit}</span>
                <h4><span>${str[16][i].h4}</span></h4>
                <p class="price">¥${str[16][i].price}<del>${str[16][i].del}</del></p>
            </div>
        </div>
        `).appendTo('.content12 .btm');

        $('.content12 .box').eq(i).hover(function () {
            $(this).find('.img2').attr('src', str[16][i].img3)
        }, function () {
            $(this).find('.img2').attr('src', str[16][i].img2)
        })
    })

    // 大家都在说
    $.each(str[17], (i) => {
        $(`
            <div class="swiper-slide">
                <div class="top">
                    <img src="${str[17][i].img}"
                        alt="">
                </div>
                <div class="bottom">
                    <h4><span>${str[17][i].tit}</span><i>¥${str[17][i].price}</i></h4>
                    <p>${str[17][i].p}</p>
                </div>
            </div>
            `).appendTo('.content14 .swiper-wrapper')
    })
    // 轮播图12
    var swiper12 = new Swiper('.swiper12', {
        autoplay: {
            // 延时时间
            delay: 2000,
            /* 
            用户操作swiper之后，是否禁止autoplay。默认为true：停止。
            如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
            操作包括触碰，拖动，点击pagination等。
            */
            disableOnInteraction: false,
        },
        slidesPerView: 3,
        spaceBetween: 6,
        navigation: {
            nextEl: '.next12',
            prevEl: '.prev12',
        },
        loop: true,
    })
    $('#next').click(() => {
        $('.prev12').click()
    })
    $('#prev').click(() => {
        $('.next12').click()
    })
    swiper12.el.onmouseover = function () {
        swiper12.autoplay.stop();
    }
    swiper12.el.onmouseleave = function () {
        swiper12.autoplay.start();
    }
})