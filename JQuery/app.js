$('<button id="button">Button 1</button>').appendTo('body');
$('#button').click(function() {
    alert('Thanks for clicking');
});

$('#btn').click(function() {
    alert($('#text').val());
});

$('#div1').hover(
    function() {
      $( this ).addClass( "div" );
    }, function() {
      $( this ).removeClass( "div" );
    }
  );

  $('#p1').click(function() {
    let ranColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    $(this).css('color', ranColor);
  });

  $('#friendsBtn').click(function() {
    let friends = ['Bill', 'Bob', 'Mike', 'Andy', 'Joe', 'Trajan', 'Brian', 'Matt', 'AJ', 'Eric'];
    friends.forEach(function(friend) {
        $('#friendsList').append("<li>" + friend + "</li>");
    });
  });
