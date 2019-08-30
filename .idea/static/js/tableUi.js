function onLoginClick_nk(e) {
    setCookie('accessToken', 'accessToken');
    setCookie('useId', 'useId');
    setCookie('useType', 'useType');
    setCookie('clientType', 'clientType');
}

function setCookie(c_name, value) {
    setCookieAndTimeOut(c_name, value, 10);
}

function setCookieAndTimeOut(c_name, value, days) {
    var str = c_name + "=" + escape(value);
    if (days > 0) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        str += ";Path=/;domain=" + ".lh.com";
        str += ";expires=" + date.toGMTString();
    }
    document.cookie = str;
}

layui.use('table', function () {
    var table = layui.table;
    var myurl = "http://www.lh.com:2000/api-a-bkf-/authority/user/getUserList?";
    var tableIns = table.render({
        elem: '#test'
        , method: 'post'
        , dataType: 'josn'
        , url: myurl               // ,xhrFields: {
        , where: {'id': '1'}
        , cols: [[
            {field: 'id', width: 220, title: 'ID', sort: true, fixed: 'left'}
            , {field: 'userName', width: 220, title: '用户名', hide: true}
            , {field: 'sex', width: 220, title: '性别', sort: true, align: 'center'}
            , {field: 'age', width: 220, title: '年龄', align: 'right'}
            , {field: 'id', width: 220, title: 'ID1', sort: true}
            , {field: 'userName', width: 220, title: '用户名1'}
            , {field: 'sex', width: 220, title: '性别1', sort: true}
            , {field: 'age', width: 220, title: '年龄1'}
            , {field: 'id', width: 220, title: 'ID2', sort: true}
            , {field: 'userName', width: 220, title: '用户名2'}
            , {field: 'sex', width: 220, title: '性别2', sort: true}
            , {field: 'age', width: 220, title: '年龄2', fixed: 'right'}
        ]]
        , toolbar: true
        , groups: 10
        , prev: '上一页'
        , next: '下一页'
        , first: '首页'
        , last: '尾页'
        // ,skin: 'line' //行边框风格
        , even: false //开启隔行背景
        , size: 'sm' //小尺寸的表格
        , width: 1200
        , height: 615 //固定值
        , totalRow: true
        , totalRowText: '合计：'
        , page: true
        , done: function (res, curr, count) {
            var totalMap = res.totalData;
            if (totalMap != null) {
                var dfTotal = totalMap.age1.value;
                var counter = totalMap.counter.value;
                // var jfTotal = formatJe(totalMap.two);
                //5，6是那一列
                $(".layui-table-total div:eq(3)").html(dfTotal);
                $(".layui-table-total div:eq(0)").html('合计');
                $(".layui-table-total div:eq(2)").html('人数：' + counter);
            }
        }
    });


});

function setCookie(c_name, value) {
    console.log(c_name);
    setCookieAndTimeOut(c_name, value, 10);
}

function setCookieAndTimeOut(c_name, value, days) {
    var str = c_name + "=" + escape(value);
    if (days > 0) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        str += ";Path=/;domain=.lh.com"
        str += ";expires=" + date.toGMTString();
    }
    document.cookie = str;
}

