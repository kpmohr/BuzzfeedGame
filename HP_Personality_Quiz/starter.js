console.log('starter2.js linked');

jQuery(function() {


//How to pull the name from the landing page to the quiz page
$("#nameForm").submit(function(){
    var $name = $('#formInput').val();
    console.log($name);
    // alert("Submitted " + name);
});

if($('#gamePage2Body').load()) {
  var $pathArray = window.location.href.split( '=' );
  console.log($pathArray);

var $nameArray = $pathArray[1];
console.log($nameArray);
$('.headerFormInfo').text('Which House are you ' + $nameArray + '?');
}

//Start of the quiz information
  var $hufflepuffScore = 0;
  var $ravenclawScore = 0;
  var $slytherinScore = 0;
  var $gryffindorScore = 0;

//How the quiz functions
function quizRun(){

//Question 1
    $('.1a').one('click', function() {
          $(this).css('background-color', '#13D1EF');
          $gryffindorScore +=1;
       console.log('Gryffindor: ' + $gryffindorScore);
          $('.1b').off('click');
          $('.1c').off('click');
          $('.1d').off('click');
        }),

    $('.1b').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $slytherinScore +=1;
        console.log('slytherin: ' + $slytherinScore);
          $('.1a').off('click');
          $('.1c').off('click');
          $('.1d').off('click');
        }),

    $('.1c').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $ravenclawScore +=1;
        console.log('Ravenclaw: ' + $ravenclawScore);
          $('.1b').off('click');
          $('.1a').off('click');
          $('.1d').off('click');
        }),

    $('.1d').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $hufflepuffScore +=1;
        console.log('Hufflepuff: ' + $hufflepuffScore);
          $('.1b').off('click');
          $('.1c').off('click');
          $('.1a').off('click');
        })

//Question 2
    $('.2a').one('click', function() {
          $(this).css('background-color', '#13D1EF');
          $slytherinScore +=1;
        console.log('slytherin: ' + $slytherinScore);
          $('.2b').off('click');
          $('.2c').off('click');
          $('.2d').off('click');
        }),

    $('.2b').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $gryffindorScore +=1;
       console.log('Gryffindor: ' + $gryffindorScore);
          $('.2a').off('click');
          $('.2c').off('click');
          $('.2d').off('click');
        }),

    $('.2c').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $ravenclawScore +=1;
        console.log('Ravenclaw: ' + $ravenclawScore);
          $('.2b').off('click');
          $('.2a').off('click');
          $('.2d').off('click');
        }),

    $('.2d').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $hufflepuffScore +=1;
        console.log('Hufflepuff: ' + $hufflepuffScore);
          $('.2b').off('click');
          $('.2c').off('click');
          $('.2a').off('click');
        })

//Question 3
    $('.3a').one('click', function() {
          $(this).css('background-color', '#13D1EF');
          $gryffindorScore +=1;
       console.log('Gryffindor: ' + $gryffindorScore);
          $('.3b').off('click');
          $('.3c').off('click');
          $('.3d').off('click');
        }),

    $('.3b').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $slytherinScore +=1;
        console.log('slytherin: ' + $slytherinScore);
          $('.3a').off('click');
          $('.3c').off('click');
          $('.3d').off('click');
        }),

    $('.3c').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $ravenclawScore +=1;
        console.log('Ravenclaw: ' + $ravenclawScore);
          $('.3b').off('click');
          $('.3a').off('click');
          $('.3d').off('click');
        }),

    $('.3d').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $hufflepuffScore +=1;
        console.log('Hufflepuff: ' + $hufflepuffScore);
          $('.3b').off('click');
          $('.3c').off('click');
          $('.3a').off('click');
        })

//Question 4
    $('.4a').one('click', function() {
          $(this).css('background-color', '#13D1EF');
          $hufflepuffScore +=1;
        console.log('Hufflepuff: ' + $hufflepuffScore);
          $('.4b').off('click');
          $('.4c').off('click');
          $('.4d').off('click');
        }),

    $('.4b').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $gryffindorScore +=1;
       console.log('Gryffindor: ' + $gryffindorScore);
          $('.4a').off('click');
          $('.4c').off('click');
          $('.4d').off('click');
        }),

    $('.4c').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $ravenclawScore +=1;
        console.log('Ravenclaw: ' + $ravenclawScore);
          $('.4b').off('click');
          $('.4a').off('click');
          $('.4d').off('click');
        }),

    $('.4d').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $slytherinScore +=1;
        console.log('slytherin: ' + $slytherinScore);
          $('.4b').off('click');
          $('.4c').off('click');
          $('.4a').off('click');
        })

//Question 5
    $('.5a').one('click', function() {
          $(this).css('background-color', '#13D1EF');
          $hufflepuffScore +=1;
        console.log('Hufflepuff: ' + $hufflepuffScore);
          $('.5b').off('click');
          $('.5c').off('click');
          $('.5d').off('click');
        }),

    $('.5b').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $ravenclawScore +=1;
        console.log('Ravenclaw: ' + $ravenclawScore);
          $('.5a').off('click');
          $('.5c').off('click');
          $('.5d').off('click');
        }),

    $('.5c').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $slytherinScore +=1;
        console.log('slytherin: ' + $slytherinScore);
          $('.5b').off('click');
          $('.5a').off('click');
          $('.5d').off('click');
        }),

    $('.5d').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $gryffindorScore +=1;
       console.log('Gryffindor: ' + $gryffindorScore);
          $('.5b').off('click');
          $('.5c').off('click');
          $('.5a').off('click');
        })

//Question 6
    $('.6a').one('click', function() {
          $(this).css('background-color', '#13D1EF');
          $hufflepuffScore +=1;
        console.log('Hufflepuff: ' + $hufflepuffScore);
          $('.6b').off('click');
          $('.6c').off('click');
          $('.6d').off('click');
        }),

    $('.6b').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $slytherinScore +=1;
        console.log('slytherin: ' + $slytherinScore);
          $('.6a').off('click');
          $('.6c').off('click');
          $('.6d').off('click');
        }),

    $('.6c').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $ravenclawScore +=1;
        console.log('Ravenclaw: ' + $ravenclawScore);
          $('.6b').off('click');
          $('.6a').off('click');
          $('.6d').off('click');
        }),

    $('.6d').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $gryffindorScore +=1;
       console.log('Gryffindor: ' + $gryffindorScore);
          $('.6b').off('click');
          $('.6c').off('click');
          $('.6a').off('click');
        })

//Question 7
    $('.7a').one('click', function() {
          $(this).css('background-color', '#13D1EF');
          $hufflepuffScore +=1;
        console.log('Hufflepuff: ' + $hufflepuffScore);
          $('.7b').off('click');
          $('.7c').off('click');
          $('.7d').off('click');
        }),

    $('.7b').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $slytherinScore +=1;
        console.log('slytherin: ' + $slytherinScore);
          $('.7a').off('click');
          $('.7c').off('click');
          $('.7d').off('click');
        }),

    $('.7c').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $gryffindorScore +=1;
       console.log('Gryffindor: ' + $gryffindorScore);
          $('.7b').off('click');
          $('.7a').off('click');
          $('.7d').off('click');
        }),

    $('.7d').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $ravenclawScore +=1;
        console.log('Ravenclaw: ' + $ravenclawScore);
          $('.7b').off('click');
          $('.7c').off('click');
          $('.7a').off('click');
        })

//Question 8
    $('.8a').one('click', function() {
          $(this).css('background-color', '#13D1EF');
          $ravenclawScore +=1;
        console.log('Ravenclaw: ' + $ravenclawScore);
          $('.8b').off('click');
          $('.8c').off('click');
          $('.8d').off('click');
        }),

    $('.8b').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $hufflepuffScore +=1;
        console.log('Hufflepuff: ' + $hufflepuffScore);
          $('.8a').off('click');
          $('.8c').off('click');
          $('.8d').off('click');
        }),

    $('.8c').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $gryffindorScore +=1;
       console.log('Gryffindor: ' + $gryffindorScore);
          $('.8b').off('click');
          $('.8a').off('click');
          $('.8d').off('click');
        }),

    $('.8d').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $slytherinScore +=1;
        console.log('slytherin: ' + $slytherinScore);
          $('.8b').off('click');
          $('.8c').off('click');
          $('.8a').off('click');
        })

//Question 9
    $('.9a').one('click', function() {
          $(this).css('background-color', '#13D1EF');
          $gryffindorScore +=1;
       console.log('Gryffindor: ' + $gryffindorScore);
          $('.9b').off('click');
          $('.9c').off('click');
          $('.9d').off('click');
        }),

    $('.9b').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $slytherinScore +=1;
        console.log('slytherin: ' + $slytherinScore);
          $('.9a').off('click');
          $('.9c').off('click');
          $('.9d').off('click');
        }),

    $('.9c').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $ravenclawScore +=1;
        console.log('Ravenclaw: ' + $ravenclawScore);
          $('.9b').off('click');
          $('.9a').off('click');
          $('.9d').off('click');
        }),

    $('.9d').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $hufflepuffScore +=1;
        console.log('Hufflepuff: ' + $hufflepuffScore);
          $('.9b').off('click');
          $('.9c').off('click');
          $('.9a').off('click');
        })

//Question 10
    $('.10a').one('click', function() {
          $(this).css('background-color', '#13D1EF');
          $ravenclawScore +=1;
        console.log('Ravenclaw: ' + $ravenclawScore);
          $('.10b').off('click');
          $('.10c').off('click');
          $('.10d').off('click');
        }),

    $('.10b').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $hufflepuffScore +=1;
        console.log('Hufflepuff: ' + $hufflepuffScore);
          $('.10a').off('click');
          $('.10c').off('click');
          $('.10d').off('click');
        }),

    $('.10c').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $gryffindorScore +=1;
       console.log('Gryffindor: ' + $gryffindorScore);
          $('.10b').off('click');
          $('.10a').off('click');
          $('.10d').off('click');
        }),

    $('.10d').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $slytherinScore +=1;
        console.log('slytherin: ' + $slytherinScore);
          $('.10b').off('click');
          $('.10c').off('click');
          $('.10a').off('click');
        })

//Question 11
    $('.11a').one('click', function() {
          $(this).css('background-color', '#13D1EF');
          $gryffindorScore +=1;
       console.log('Gryffindor: ' + $gryffindorScore);
          $('.11b').off('click');
          $('.11c').off('click');
          $('.11d').off('click');
        }),

    $('.11b').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $hufflepuffScore +=1;
        console.log('Hufflepuff: ' + $hufflepuffScore);
          $('.11a').off('click');
          $('.11c').off('click');
          $('.11d').off('click');
        }),

    $('.11c').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $slytherinScore +=1;
        console.log('slytherin: ' + $slytherinScore);
          $('.11b').off('click');
          $('.11a').off('click');
          $('.11d').off('click');
        }),

    $('.11d').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $ravenclawScore +=1;
        console.log('Ravenclaw: ' + $ravenclawScore);
          $('.11b').off('click');
          $('.11c').off('click');
          $('.11a').off('click');
        })

//Question 12
    $('.12a').one('click', function() {
          $(this).css('background-color', '#13D1EF');
          $hufflepuffScore +=1;
        console.log('Hufflepuff: ' + $hufflepuffScore);
          $('.12b').off('click');
          $('.12c').off('click');
          $('.12d').off('click');
        }),

    $('.12b').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $ravenclawScore +=1;
        console.log('Ravenclaw: ' + $ravenclawScore);
          $('.12a').off('click');
          $('.12c').off('click');
          $('.12d').off('click');
        }),

    $('.12c').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $gryffindorScore +=1;
       console.log('Gryffindor: ' + $gryffindorScore);
          $('.12b').off('click');
          $('.12a').off('click');
          $('.12d').off('click');
        }),

    $('.12d').one('click', function(){
          $(this).css('background-color', '#13D1EF');
          $slytherinScore +=1;
        console.log('slytherin: ' + $slytherinScore);
          $('.12b').off('click');
          $('.12c').off('click');
          $('.12a').off('click');
        })

    findWinner();


};

quizRun();

function findWinner(){
//Got idea from stockoverflow: http://stackoverflow.com/questions/6500019/jquery-code-records-how-many-clicks-a-link-has-than-changes-its-url
var timesClicked = 0;

    $('li').on('click', function() {
        timesClicked++;
        if (timesClicked === 12) {
          console.log('*Gryffindor: ' + $gryffindorScore);
          console.log('*slytherin: ' + $slytherinScore);
          console.log('*Ravenclaw: ' + $ravenclawScore);
          console.log('*Hufflepuff: ' + $hufflepuffScore);

            var $winnerValue = Math.max($hufflepuffScore, $slytherinScore, $gryffindorScore, $ravenclawScore);
            console.log($winnerValue);

            var $h3 = $('<h3>');
            var $h4 = $('<h4>');
            var $p = $('<p>');

        if($('#gamePage2Body').load()) {
          var $pathArray = window.location.href.split('=');

          var $nameArray = $pathArray[1];
            }
//How the function pulls in the winners house information
        if($winnerValue ===  $gryffindorScore){
              $('.quiz-result').css('background-color', 'white');
              $h3.append('Which Hogwarts House Do You Belong In?');
              $h4.append('You got: Gryffindor<br> Welcome ' + $nameArray + '!');
              $p.append('You have a heart of a lion. You never give up, never back down and give everything 100%. Good things happen to you because you fight for them. You stand up for yourself and for your friends because you believe in what is right. Your energy is magnetic and makes you a natural leader.');
              $('.quiz-result').addClass('gryffindorImage');
              $('.quiz-result').append($h3);
              $('.quiz-result').append($h4);
              $('.quiz-result').append($p);
            }
        else if($winnerValue === $slytherinScore){
              $('.quiz-result').css('background-color', 'white');
              $h3.append('Which Hogwarts House Do You Belong In?');
              $h4.append('You got: Slytherin<br> Welcome ' + $nameArray + '!');
              $p.append('You’re always ahead of the pack. You know what is cool before anyone else knows and you’re happy to be the trendsetter. You’re smart and ambitious and not afraid to put your all in. You’re destined for greatness and you deserve it because you’re one of a kind.');
              $('.quiz-result').addClass('slytherinImage');
              $('.quiz-result').append($h3);
              $('.quiz-result').append($h4);
              $('.quiz-result').append($p);
            }
        else if($winnerValue === $ravenclawScore){
              $('.quiz-result').css('background-color', 'white');
              $h3.append('Which Hogwarts House Do You Belong In?');
              $h4.append('You got: Ravenclaw<br> Welcome ' + $nameArray + '!');
              $p.append('You’re clever and wise. Your friends often come to you to get advice because you always know what to say. Your creativity allows you to look at things in an out-of-the-box way. And your wit makes you a pleasure to be around.');
              $('.quiz-result').addClass('ravenclawImage');
              $('.quiz-result').append($h3);
              $('.quiz-result').append($h4);
              $('.quiz-result').append($p);
            }
        else if($winnerValue === $hufflepuffScore){
              $('.quiz-result').css('background-color', 'white');
              $h3.append('Which Hogwarts House Do You Belong In?');
              $h4.append('You got: Hufflepuff<br> Welcome ' + $nameArray + '!');
              $p.append('People flock to you because you’re a great friend. You value loyalty and always think of others first. People are lucky to have you in their lives and they know it.');
              $('.quiz-result').addClass('hufflepuffImage');
              $('.quiz-result').append($h3);
              $('.quiz-result').append($h4);
              $('.quiz-result').append($p);
            }
        };
      });
  };




});


  // gryffindorAnswers = [
  //   { question: 1, answer: 'a' },
  //   { question: 2, answer: 'b' },
  //   { question: 3, answer: 'a' },
  //   { question: 4, answer: 'b' },
  //   { question: 5, answer: 'd' },
  //   { question: 6, answer: 'd' },
  //   { question: 7, answer: 'c' },
  //   { question: 8, answer: 'c' },
  //   { question: 9, answer: 'a' },
  //   { question: 10, answer: 'c' },
  //   { question: 11, answer: 'a' },
  //   { question: 12, answer: 'c' },
  // ];

  // slytherinAnswers = [
  //   { question: 1, answer: 'b' },
  //   { question: 2, answer: 'a' },
  //   { question: 3, answer: 'b' },
  //   { question: 4, answer: 'd' },
  //   { question: 5, answer: 'c' },
  //   { question: 6, answer: 'b' },
  //   { question: 7, answer: 'b' },
  //   { question: 8, answer: 'd' },
  //   { question: 9, answer: 'b' },
  //   { question: 10, answer: 'd' },
  //   { question: 11, answer: 'c' },
  //   { question: 12, answer: 'd' },
  // ];

  // ravenclawAnswers = [
  //   { question: 1, answer: 'c' },
  //   { question: 2, answer: 'c' },
  //   { question: 3, answer: 'c' },
  //   { question: 4, answer: 'c' },
  //   { question: 5, answer: 'b' },
  //   { question: 6, answer: 'c' },
  //   { question: 7, answer: 'd' },
  //   { question: 8, answer: 'a' },
  //   { question: 9, answer: 'd' },
  //   { question: 10, answer: 'a' },
  //   { question: 11, answer: 'd' },
  //   { question: 12, answer: 'b' },
  // ];

  // hufflepuffAnswers = [
  //   { question: 1, answer: 'd' },
  //   { question: 2, answer: 'd' },
  //   { question: 3, answer: 'd' },
  //   { question: 4, answer: 'a' },
  //   { question: 5, answer: 'a' },
  //   { question: 6, answer: 'a' },
  //   { question: 7, answer: 'a' },
  //   { question: 8, answer: 'b' },
  //   { question: 9, answer: 'c' },
  //   { question: 10, answer: 'b' },
  //   { question: 11, answer: 'b' },
  //   { question: 12, answer: 'a' },
  // ];
