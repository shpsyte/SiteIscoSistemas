
function Opneva() {

    height = 500;
    width = 400;
    t = window.innerHeight - height;
    l = window.innerWidth - width - 10;

    window.open('chat.html', '', 'height=' + height + ', width=' + width + ', left=' + l + ', top=' + t);


}

function checkScroll() {
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
        $('.navbar').addClass("scrolled");
    } else {
        $('.navbar').removeClass("scrolled");
    }
}

if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
    });
}