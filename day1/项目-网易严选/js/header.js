$.get('../json/header.json', function (str) {
    $(str).each(function (i) {
        $(`
        <li><a>${str[i].title}</a></li>
        `).appendTo(".down")
    })
    $('.down li').on('mouseenter',function () {
        $('.ul_div').css("opacity", "1")
        var index = $(this).index()
        if (str[index].fenlei) {
            $('.ul_div').html("")
            $(str[index].fenlei).each(function (j) {
                var fenlei = str[index].fenlei[j]
                $(`
                <dl class="ul_ul">
                    <dd>${fenlei.fenlei1}</dd>
                </dl>
                `).appendTo('.ul_div')
                $(fenlei.fenlei2).each(function (x) {
                    console.log(x)
                    $(`
                    <dt>
                        <img src="${fenlei.image[x]}" alt="" width="50px">
                        <span>${fenlei.fenlei2[x]}</span>
                    </dt>`).appendTo($('.ul_ul').eq(j))
                })
            })
        }
    })
    
    
})