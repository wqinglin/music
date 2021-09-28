$(function () {
    //搜索框获得焦点
    $('.search').focus();
    //默认收藏0
    let i = 0;
    //获得"空空如也"
    let dd = $(".collect1").text();
    //为表格中音乐添加监听事件
    $(".aa").click(function () {
        //获取点击事件的文本内容
        let txt = $(this).html();
        //获得已经收藏的文本内容
        let change = $(".collect1").text();
        //去重
        if (change.indexOf(txt) == -1) {
            //收藏框为空
            if( i=== 0 ){
                //则空空如也
                $(".collect1").empty();
            }
            //添加节点
            $(".collect1").prepend("<li><a href='javascript:;'>" + txt + "</a></li>");
            //修改音乐收藏数
            $("#btn2").val("收藏(" + (i + 1) + ")");
            //收藏累加
            ++i;
        } else {
            //温馨提示
            alert("您已经添加了哦~ 不要重复添加哦~")
        }
    })
    //为搜索框增加监听事件
    $(".search").click(function () {
        $(this).attr('style','background-color:#ffffcc');
        //取消默认文本内容
        $(this).removeAttr("placeholder");
        //获取搜索历史框
        var aaaa = $(this).siblings(".seek-up");
        //停止上次动画
        aaaa.stop().slideDown();
        
    })
    //事件冒泡 鼠标移出搜索框
    $(".select").mouseleave(function () {
        //停止上次动画
        $(".seek-up").stop;
        //隐藏搜索历史记录
        $(".seek-up").slideUp(1000);
        //鼠标移除则失去焦点
        $(".search").blur();
    })
    //为收藏栏添加绑定事件
    $(".btn1").hover(function () {
        //展开动画
        $(".collect1").stop().slideDown(1000);
    });
    //收藏按钮父级添加绑定事件  相当于冒泡
    $(".inner-collect").mouseleave(function () {
        //收起动画
        $(".collect1").stop().slideUp(1000);
    })
    //为搜搜索框添加键盘监听事件
    $(".select").keypress(function (event) {
        // 当enter时
        if (event.keyCode == 13) {
            //console.log($(".search").val());
            //获取文本框中的内容
            let value = $(".search").val();
            //获取文本框已有内容
            let change1 = $(".seek-up").text();
            //去重
            if (change1.indexOf(value) == -1) {
                //将内容添加至历史记录
                $(".seek-up").prepend("<li><a href='javascript:;'>" + value + "</a></li>");
            }
        }
    })
    //为浏览器右侧滑块添加监听事件
    $(window).scroll(function () {
        //调兼容；获取浏览器中的滑块移动距离
        var offset = $("html,body").scrollTop();
        //当距离>50显示滑块
        if (offset > 50) {
            $(".back-top").show();
        } else {
            //当距离<50隐藏滑块
            $(".back-top").hide();
        }
    });
})
