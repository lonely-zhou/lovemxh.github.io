var deviceWidth = document.documentElement.clientWidth;
/*alert(deviceWidth); */
/*求设备宽度*/
if (deviceWidth > 750)
    deviceWidth = 750;
document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';

$(window).resize(function () {
    location.reload()
});

var year = document.getElementById('year');
var hours = document.getElementById('hours');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

function show() {
    var dateStar = new Date('2020-9-7').getTime();
    var dateStar = new Date('2020/9/7').getTime();
    var dateNow = new Date().getTime();
    var dateS_N = dateNow - dateStar;
    var datePut = Math.floor(dateS_N / (24 * 3600 * 1000));
    var dateHours = new Date().getHours();
    var dateMinute = new Date().getMinutes();
    var dateSecond = new Date().getSeconds();

    year.innerHTML = datePut;
    hours.innerHTML = dateHours;
    minute.innerHTML = dateMinute;
    if (dateSecond < 10) {
        second.innerHTML = '0' + dateSecond;
    } else {
        second.innerHTML = dateSecond;
    }
    var timeID = setTimeout(show, 1000);
}

// 背景动态改变
// if (deviceWidth < 410) {
//     document.body.style.backgroundImage = "url(img/bk.jpg)";
// }
// if (deviceWidth > 410) {
    document.body.style.background = "linear-gradient(45deg, rgba(254, 172, 94, 0.5), rgba(199, 121, 208, 0.5), rgba(75, 192, 200, 0.5))";
    document.body.style.backgroundPosition = "center 0";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment="fixed";
    document.body.style.backgroundSize="cover";
// }
