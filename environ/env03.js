let count = 0;
let environmentTitle = "Brinstar Stage";

let environmentElements = ["JigglyPuff", "PokeBall",   "Party Ball", "Samus's GunShip"];

let mainEntity = {
    name: "Ship",
    type: "Space",
    mood: "ominous",
     Moving: false,
   desire: environmentElements[2]
};
let entityCount = 0;
let entityProperties = ["name", "type", "mood", "Moving", "desire"];

$("#needy-button1").click(function () {
    let environment = environmentElements[count];
    count = count + 1;
    if (count > 3) {
       count = 0;
 }

    $("#environment-output").html("<h1>" + environment + "</h1>");
});

$("#needy-button2").click(function () {
    let property = entityProperties[entityCount];
    let entityInfo = property + ": " + mainEntity[property];
    entityCount = entityCount + 1;
    if (entityCount > 4) {
        entityCount = 0;
    }

    $("#environment-output").html("<h1>" + entityInfo + "</h1>");
});
$("#needy-button3").click(function () {
    $("#text h3").show();
});