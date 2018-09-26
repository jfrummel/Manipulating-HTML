$('<button id="button">Button 1</button>').appendTo('body');
$('#button').click(function() {
    alert('Thanks for clicking');
});

$('#btn').click(function() {
    alert($('#text').val());
});
