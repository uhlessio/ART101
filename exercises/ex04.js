// the clicker button program

let count = 1;

$("#needy-button") .click( function(){ 
    //what to do when button is clicked
    count = count *2;
    $("#needy-button").html("you clicked  me " + count + " times")
});