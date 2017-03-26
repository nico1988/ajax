//to use below ,you must import the jquery.js
$.ajax({
    type: 'post',
    // url: './11.php?code=' + code,
    url: 'your.php',//here you set you php.file
    data : {code:code},
    dataType: 'json',//xml json text html script jsonp
    success: function(data) {                    
        var info = document.getElementById('info');
        if (data.flag == 0) {
            info.innerHTML = '没有这本书';
        } else {
            var tag = '<ul><li>书名：' + data.bookname + '</li><li>作者：' + data.author + '</li><li>描述：' + data.desc + '</li></ul>';
            info.innerHTML = tag;
        }
    }
});
