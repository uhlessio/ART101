let count = 0;

//button desctription

let buttonCreature = {
    name: "<strong>Womplem</strong>",
    species: "Womp creature",
    favoriteFood: "your mouse clicks",
    moods: ["ecstatic", "blissfull", "glowing", "happy", "okay","full", "meh","frusturated","anxious","annoyed","tiffed","angry","pissed", "enraged"]
};

//click function
//let buttonText=""
$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];


    let message = "<p>You fed me " + count + " times.</p>";

    message = message + "<p>My current mood is " + currentMood + ".</p>";
    message = message + "<p>My name is " + buttonCreature.name + ".</p>";
    message = message + "<p>I am an " + buttonCreature.species + ".</p>";
    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";
    if (count == 14) {  $("#needy-button") .after("<p>I am stuck in this hell scape. Please free me from this eternal prison.</p> ");   

    }
    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
     console.log(currentMood);
   // buttonText="you clicked  me " + count + " times" ;
   // $("#needy-button").html(buttonText)

});

