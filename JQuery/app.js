//Alert with button
$('<button id="button">Button 1</button>').appendTo('body');
$('#button').click(function() {
    alert('Thanks for clicking');
});

//Alert with text from text area
$('#btn').click(function() {
    alert($('#text').val());
});
//Change background color of div on hover
$('#div1').hover(
    function() {
      $( this ).addClass( "div" );
    }, function() {
      $( this ).removeClass( "div" );
    }
  );

  //Random color to text of paragraph
  $('#p1').click(function() {
    let ranColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    $(this).css('color', ranColor);
  });
   
  let array = ['Bill', 'Bob', 'Mike', 'Andy', 'Joe', 'Trajan', 'Brian', 'Matt', 'AJ', 'Eric'];

 
//Add friends in unordered list
function myFriends() {
    array.forEach(function(item) {
    $('#friendsList').append('<li>' + item + '</li>');

    });

  };
$('#friendBtn').click(myFriends);

