
function Opneva() {

    height = 500;
    width = 400;
    t = window.innerHeight - height;
    l = window.innerWidth - width - 10;

    window.open('https://bots4app.azurewebsites.net/chat.html?appid=0012ss22sfs23333&avatar=avatarBot.png&botname=Ian - Agente Virtual&placeholder=Ex. Preciso de um sistema, Suporte Técnico&userid=Cliente&username=Você&s=_sCtJ_yiHjQ.cwA.nyc.OM1xde4Obm9oI1RonXvMblBAhJEgUrLftpLNhSxONWs&css=botconfig ', '', 'height=' + height + ', width=' + width + ', left=' + l + ', top=' + t);
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