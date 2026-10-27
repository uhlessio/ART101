// the clicker button program

let count = 0;
let colorcount=0;

let colors=["green", "orange", "brown", "yellow", "gold", "pink", "purple","limegreen","red","teal","hotpink"];

// green, orange, brown, yellow, gold, purple, red, pink

let buttonText=""
$("#needy-button").click(function () {

//what to do when button is clicked

    count = count + 1; 


    console.log(count);
    console.log(colors[colorcount]);

    buttonText="you clicked  me " + count + "times and the color is " + colors[colorcount];

    $("#needy-button").html(buttonText)

    $("body").css("background", colors[colorcount] );

    //$("body").append("<img width='25%' src='" +colors[count-1]  +".jpg'>");

  if (count >=15) {  $("#needy-button") .after("<p>*mmmmmmm*</p> ");   }
  else if (count>=10){  $("#needy-button") .after("<p>*oops*</p> ");   }
  else if (count>=5){  $("#needy-button") .after("<p>*burp*</p> ");   }
  
    //if( (count >= 5) && (count< 13) ) {  $("#needy-button") .after("<p>*fart*</p> ");   }
   
   // if(count >= 10) {  $("#needy-button") .after("<p>*oops*</p> ");   }

    // if( count >= 15 ) {  $("#needy-button") .after("<p>*mmmmmmm*</p> ");   }


    
    // if we run out of colors start from the first one anew

    colorcount = colorcount +1;

if ( colorcount >=11 ) { colorcount=0; }






});
