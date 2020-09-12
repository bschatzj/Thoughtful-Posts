window.onload()

$("span:contains(' mind?')").parent().parent().replaceWith("<div><button id='buttonOverlay'>Are you sure you want to post?</button></div>")
$("span:contains('your mind,')").parent().parent().parent().parent().parent().parent().parent().replaceWith("<div><button id='buttonOverlay'>Are you sure you want to post?</button></div>")

$("form").parent().parent().replaceWith("<div><button id='buttonOverlay'>Are you sure you want to post?</button></div>")
