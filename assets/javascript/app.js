//doctype : JavaScript - Trivia Game


console.log ("testing for Trivia Game");


$(document).ready(function() {
$( ".game" ).hide();
$(".start-button").on("click", function(){
    $(".start-screen").hide();
    $( ".game" ).show();
    start();
})

var answer = [
    "undefined",
    "undefined",
    "undefined",
    "undefined",
    "undefined",
    "undefined",
    "undefined",
]

$(".question-one").on("click", function() {
    answer [0] = $(this).attr('data-return');
})
$(".question-two").on("click", function() {
    answer[1] = $(this).attr('data-return');
})
$(".question-three").on("click", function() {
    answer[2] = $(this).attr('data-return');  
})
$(".question-four").on("click", function() {
    answer[3] = $(this).attr('data-return');
})
$(".question-five").on("click", function() {
    answer[4] = $(this).attr('data-return');
})
$(".question-six").on("click", function() {
    answer[5] = $(this).attr('data-return');
})
$(".question-seven").on("click", function() {
    answer[6] = $(this).attr('data-return');
})



// need a timer function for 30 seconds
var intervalId;
var time = 30;

function start() {
    intervalId = setInterval(count, 1000);
  }

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return seconds;
  }

  function count() {
    time--;
  
    var converted = timeConverter(time);
    console.log(converted);
  
    $("#time-display").text("You have " + converted + " seconds left");
    if (time===0){
        $( ".game" ).hide();
        results ();
        clearInterval(intervalId);
        console.log ("time over");
    }
  }



// function to calculate results
var wins = 0;
var loss = 0;
var notAnswered = 0;

function results () {
    for (var i = 0; i < 7; i++){
        if (answer[i] === "true") {
            wins += 1;
        }
        else if (answer[i] === "false") {
            loss += 1;
        }
        else if (answer[i] === "undefined") {
            notAnswered += 1;
        }
    }
    $("#declare").text ("time's up! lets see how you did");
    $("#wins").text ("correct answers : " + wins);
    $("#loss").text ("wrong answers : " + loss);
    $("#no-answer").text ("questions not answered : " + notAnswered);

    console.log ("correct answers : " + wins);
    console.log ("wrong answers : " + loss);
    console.log ("questions not answered : " + notAnswered);
}

// function for showing the results
$(".submit-button").on("click", function(){
    $( ".game" ).hide();
    results ();

})



})
