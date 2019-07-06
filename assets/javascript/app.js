//doctype : JavaScript - Trivia Game


console.log ("testing for Trivia Game");

$(document).ready(function() {
//var isreturn_str = $('#first-question').data('return');
//var isreturn_str = $(this).data('return');
//console.log (isreturn_str);
//console.log (typeof isreturn_str);


//var isreturn = (isreturn_str === 'true');




$(".question-one").on("click", function() {
    //var isreturn_str = $('.labelclick').data('return');
    //var isreturn_str = $('#first-question').data('return');
//    $("input").each(function(){
//            var isreturn_str = $(this).data('return');
//            console.log (isreturn_str);
//console.log (typeof isreturn_str);
      //});
    //var isreturn_str = $('.question').data('return'); doesnt work
 
//var isreturn_str = $(this).data('return');
//var test2 = $('#first-question').val();
//var test2 = $(".labelclick").data("return");
          // In this case, the "this" keyword refers to the button that was clicked
          answer [0] = $(this).attr('data-return');
//var test2 = $(this).val();
//var test2 = $(".labelclick").val()
//console.log (isreturn_str);
//console.log (typeof isreturn_str);
      
console.log (answer [0]);




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

$(".question-two").on("click", function() {
    answer[1] = $(this).attr('data-return');
    console.log ("2" + answer[1])
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

$(".submit-button").on("click", function(){

    $( ".game" ).hide();
    results ();

})



})
