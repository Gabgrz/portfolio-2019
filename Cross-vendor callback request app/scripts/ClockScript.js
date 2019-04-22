function checkTime(i) {
    if (i < 10) {i = "0" + i;}  // add zero in front of numbers < 1
    return i;
}

function localTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    app.pages.MainPage.descendants.TextBox3.getElement().innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(localTime, 500);
}

function pstTime() {
    var today = new Date();
    var utc = today.getTime() - (today.getTimezoneOffset() * 20000);
    var nd = new Date(utc + (3600000*360));
    var h = nd.getHours();
    var m = nd.getMinutes();
    var s = nd.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    app.pages.MainPage.descendants.TextBox4.getElement().innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(pstTime, 500);
}