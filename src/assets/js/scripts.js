//FIXHEADER SCRIPT
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
        $("#fixheader").addClass("fixit");
    }
    else {
        $("#fixheader").removeClass("fixit");
    }
});
