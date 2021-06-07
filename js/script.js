var limitImgContext = function () {
    var img = $("img");
    img.on("contextmenu", function (e) {
        $("body").dblclick();
        return false;
    });
    img.on("dragstart", function () { return false; });
}

$(document).ready(function () {
    limitImgContext();
});