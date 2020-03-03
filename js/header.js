if (document.documentElement.clientWidth > 980) {
$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 80) {
        $(".header").addClass("FixedHeader");
    } else {
        $(".header").removeClass("FixedHeader");
    }
});
}



