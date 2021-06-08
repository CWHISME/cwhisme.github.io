var limitImgContext = function () {
    var imgList = document.getElementsByTagName("img");
    for (var i = 0; i < imgList.length; i++) {
        img = imgList[i];
        img.oncontextmenu = (function (e) {
            document.getElementsByTagName("body")[0].click();
            return false;
        });
        img.ondragstart=( function () { return false; });
    }
}

window.onload=(function () {
    limitImgContext();
});