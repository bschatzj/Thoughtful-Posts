

$("span:contains(' mind?')").parent().parent().replaceWith("<div><button onclick='alert('hi)' id='buttonOverlay'>Are you sure you want to post?</button></div>")


const myButton = Document.getElementById("buttonOverlay")


function myAlert() { alert('hi') }
//("span:contains('your mind,')").parent().parent().parent().parent().parent().parent().parent().replaceWith("<div><button id='buttonOverlay'>Are you sure you want to post?</button></div>")

//$("div:contains('Comment')").parent().parent().replaceWith("<div><button id='buttonOverlay'>Are you sure you want to post?</button></div>")

//$("div:contains('Comment')").replaceWith("<div><button id='buttonOverlay'>Are you sure you want to post?</button></div>")
