$(function () {
    $('#header').load('./header.html')
    $('#footer').load('./footer.html')
    $('#cbl').load('./cebianlan.html')
    var swiper = new Swiper('#swiper1', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})