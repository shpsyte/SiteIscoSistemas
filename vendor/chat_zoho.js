var $zoho = $zoho || {}; $zoho.salesiq = $zoho.salesiq || { widgetcode: "baca12e1c3cd40025a2c9eb799c52ffe83688771976f0f1a5db50923bd33a2705d5fe629768af6d9a03793700d9418c2", values: {}, ready: function () { } }; var d = document; s = d.createElement("script"); s.type = "text/javascript"; s.id = "zsiqscript"; s.defer = true; s.src = "https://salesiq.zoho.com/widget"; t = d.getElementsByTagName("script")[0]; t.parentNode.insertBefore(s, t); d.write("<div id='zsiqwidget'></div>");

try {
  setTimeout(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    const cgccpf = urlParams.get('cgccpf');
    if (email || cgccpf)
      $zoho.salesiq.visitor.question('Olá, preciso de suporte. ' + (cgccpf ? cgccpf : '') + (email ? email : ''));
    $zoho.salesiq.chat.start();
  }, 2000)
} catch (e) {
  consolelog(e)
} 