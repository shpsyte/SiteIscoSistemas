function isTiny() {
  if (window.innerWidth < 800 || window.innerHeight < 600) {
    return true
  } else {
    return false
  }
}

function isMobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true
  } else {
    return false
  }
}

function OpenWhats() {
  let msg =
    'Ol%C3%A1!%20poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%20que%20a%20Isco%20oferece?'
  let _url =
    'https://web.whatsapp.com/send?phone=5541999325815' + '&text=' + msg

  if (isTiny() || isMobile()) {
    _url = 'https://api.whatsapp.com/send?phone=5541999325815'
  }

  window.open(_url, '_blank')
}

function Opneva() {
  height = 500
  width = 400
  t = window.innerHeight - height
  l = window.innerWidth - width - 10

  window.open(
    'https://bots4app.azurewebsites.net/chat.html?appid=0012ss22sfs23333&avatar=avatarBot.png&botname=Ian - Agente Virtual&placeholder=Ex. Preciso de um sistema, Suporte Técnico&userid=Cliente&username=Você&s=_sCtJ_yiHjQ.cwA.nyc.OM1xde4Obm9oI1RonXvMblBAhJEgUrLftpLNhSxONWs&css=botconfig ',
    '',
    'height=' + height + ', width=' + width + ', left=' + l + ', top=' + t
  )
}

function checkScroll() {
  var startY = $('.navbar').height() * 2 //The point where the navbar changes in px

  if ($(window).scrollTop() > startY) {
    $('.navbar').addClass('scrolled')
  } else {
    $('.navbar').removeClass('scrolled')
  }
}

if ($('.navbar').length > 0) {
  $(window).on('scroll load resize', function() {
    checkScroll()
  })
}

$('#subirTopo').hide()

$('a#subirTopo').click(function() {
  Opneva('suporte')
})

$(window).scroll(function() {
  if ($(window).scrollTop() > 400) {
    $('#subirTopo').fadeIn()
  } else {
    $('#subirTopo').fadeOut()
  }
})
