$(window).on("scroll", function () {
    if ($(this).scrollTop() > 20) {
        $(".bgtop").addClass("bgtopshad");
        $(".sideMenuBg").addClass("sidenavsmall");
    }
    else {
        $(".bgtop").removeClass("bgtopshad");
        $(".sideMenuBg").removeClass("sidenavsmall");
    }
});