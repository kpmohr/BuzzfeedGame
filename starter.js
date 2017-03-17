console.log('starter2.js linked');

jQuery(function() {


$('#houseQuiz').mouseover(function()
     {
        $('body').css('background-image', 'url(image/harryPotter.jpg)')
     });
$('#houseQuiz').mouseout(function()
     {
       $('body').css('background-image', 'url(image/lotr.jpg)')
     });

$('#nerdQuiz').mouseover(function()
     {
        $('body').css('background-image', 'url(image/starWars.jpg)')
     });
$('#nerdQuiz').mouseout(function()
     {
       $('body').css('background-image', 'url(image/lotr.jpg)')
     });

});
