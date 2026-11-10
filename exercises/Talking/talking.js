
// A says
let messagesA = ["How you doin?", "Perchè?", "oof", "take this"];
let counterA = 0;
// B says
let messagesB = ["super mid", "Im hung over", "yuppp"];
let counterB = 0;

//when A is clicked
//A speaks when counterA = counterB
$("#character-a").click(function () {
    if (counterA == 3) {
        $("#answers").css("display", "flex");
        $("#chat").append("<p>Flipper: " + messagesA[counterA] + "</p>")
        counterA = counterA + 1
        counterB = 10000;
    }
    else if (counterA == counterB) {

        $("#chat").append("<p>Flipper: " + messagesA[counterA] + "</p>")

        counterA = counterA + 1
    }
});

//when B is clicked
//B speaks when counterB < counterA
$("#character-b").click(function () {

    if (counterB < counterA) {

        $("#chat").append("<p>Bouncer: " + messagesB[counterB] + "</p>")

        counterB = counterB + 1
    }

});

//make the color buttons work
$("#answer-green").click(function () {

    $("body").css("background-color","green");
    $("#chat").append("<p>Bouncer: woahhhh</p>");
    $("#answers").css("display", "none");
});
$("#answer-pink").click(function () {

    $("body").css("background-color","pink");
     $("#chat").append("<p>Bouncer: balls</p>");
     $("#answers").css("display", "none");
});
