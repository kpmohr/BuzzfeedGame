console.log('starter2.js linked');

jQuery(function() {

//Stops buttons/form from submitting on page load
$('.button').click(function(event){
    event.preventDefault();
});

$('.button').submit(function(event){
    event.preventDefault();
});

$('button').submit(function( event ) {
  event.preventDefault();
});

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
$('.startText').text('To begin the quiz ' + $nameArray + ' press the button below!');
}

//Start of quiz scoring
var $totalScore = 0;

//How Quiz runs
function quizRun(){

//Question 1
    $('.1a').one('click', function() {
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.1b').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.1c').one('click', function(){
          $totalScore +=1;
          console.log($totalScore);
        }),

    $('.1d').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

//Question 2
    $('.2a').one('click', function() {
          $totalScore +=1;
          console.log($totalScore);
        }),

    $('.2b').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.2c').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.2d').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

//Question 3
    $('.3a').one('click', function() {
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.3b').one('click', function(){
          $totalScore +=1;
          console.log($totalScore);
        }),

    $('.3c').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.3d').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

//Question 4
    $('.4a').one('click', function() {
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.4b').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.4c').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.4d').one('click', function(){
          $totalScore +=1;
          console.log($totalScore);
        }),

//Question 5
    $('.5a').one('click', function() {
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.5b').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.5c').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.5d').one('click', function(){
          $totalScore +=1;
          console.log($totalScore);
        }),

//Question 6
    $('.6a').one('click', function() {
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.6b').one('click', function(){
          $totalScore +=1;
          console.log($totalScore);
        }),

    $('.6c').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.6d').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

//Question 7
    $('.7a').one('click', function() {
          $totalScore +=1;
          console.log($totalScore);
        }),

    $('.7b').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.7c').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.7d').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

//Question 8
    $('.8a').one('click', function() {
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.8b').one('click', function(){
          $totalScore +=1;
          console.log($totalScore);
        }),

    $('.8c').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.8d').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

//Question 9
    $('.9a').one('click', function() {
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.9b').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.9c').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.9d').one('click', function(){
          $totalScore +=1;
          console.log($totalScore);
        }),

//Question 10
    $('.10a').one('click', function() {
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.10b').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        }),

    $('.10c').one('click', function(){
          $totalScore +=1;
          console.log($totalScore);
        }),

    $('.10d').one('click', function(){
          $totalScore +=0;
          console.log($totalScore);
        })

    findScore();

  };

  quizRun();


function findScore(){
  var timesClicked = 0;

    $('li').on('click', function() {
        timesClicked++;
        if (timesClicked >= 10) {
        var $score = console.log('Your score is: ' + $totalScore +'/10');
        }
    });
};

//How the question changes everytime

//Start button to question 1
  $('#startButton').on('click', function(){
    $('#start').fadeOut();
    $('#start').css('display', 'none');
    $('#questionOne').css('display', 'show');
    $('#questionOne').removeClass('questionDiv');
  });

//Question 1 to Question 2
  $('#q1Submit').on('click', function(){
    $('#questionOne').fadeOut();
    $('#questionOne').addClass('questionDiv');
    $('#questionTwo').css('display', 'show');
    $('#questionTwo').removeClass('questionDiv');
  });

  //Question 2 to Question 3
  $('#q2Submit').on('click', function(){
    $('#questionTwo').fadeOut();
    $('#questionTwo').addClass('questionDiv');
    $('#questionThree').css('display', 'show');
    $('#questionThree').removeClass('questionDiv');
  });

  //Question 3 to Question 4
  $('#q3Submit').on('click', function(){
    $('#questionThree').fadeOut();
    $('#questionThree').addClass('questionDiv');
    $('#questionFour').css('display', 'show');
    $('#questionFour').removeClass('questionDiv');
  });

  //Question 4 to Question 5
  $('#q4Submit').on('click', function(){
    $('#questionFour').fadeOut();
    $('#questionFour').addClass('questionDiv');
    $('#questionFive').css('display', 'show');
    $('#questionFive').removeClass('questionDiv');
  });

  //Question 5 to Question 6
  $('#q5Submit').on('click', function(){
    $('#questionFive').fadeOut();
    $('#questionFive').addClass('questionDiv');
    $('#questionSix').css('display', 'show');
    $('#questionSix').removeClass('questionDiv');
  });

    //Question 6 to Question 7
  $('#q6Submit').on('click', function(){
    $('#questionSix').fadeOut();
    $('#questionSix').addClass('questionDiv');
    $('#questionSeven').css('display', 'show');
    $('#questionSeven').removeClass('questionDiv');
  });

  //Question 7 to Question 8
  $('#q7Submit').on('click', function(){
    $('#questionSeven').fadeOut();
    $('#questionSeven').addClass('questionDiv');
    $('#questionEight').css('display', 'show');
    $('#questionEight').removeClass('questionDiv');
  });

  //Question 8 to Question 9
  $('#q8Submit').on('click', function(){
    $('#questionEight').fadeOut();
    $('#questionEight').addClass('questionDiv');
    $('#questionNine').css('display', 'show');
    $('#questionNine').removeClass('questionDiv');
  });

    //Question 9 to Question 10
  $('#q9Submit').on('click', function(){
    $('#questionNine').fadeOut();
    $('#questionNine').addClass('questionDiv');
    $('#questionTen').css('display', 'show');
    $('#questionTen').removeClass('questionDiv');
  });

    //Question 10 to Answer Div
  $('#q10Submit').on('click', function(){
    $('#questionTen').fadeOut();
    $('#questionTen').addClass('questionDiv');
    $('#answerDiv').css('display', 'show');
    $('#answerDiv').removeClass('questionDiv');
    $('.answerScore').text($nameArray+' your Score is: '+$totalScore);
    if($totalScore <= 3){
      $('#answerResponce').addClass('lotrImage');
    } else if($totalScore <= 6){
        $('#answerResponce').addClass('hpImage');
    } else if($totalScore <= 9) {
        $('#answerResponce').addClass('swImage');
    } else if ($totalScore === 10) {
        $('#answerResponce').addClass('winnerImage');
        $('.answerScore').append('!!!!!!!!!');
    }
  });




  });


