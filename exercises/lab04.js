let count = 0;
let buttonCreature = { name: "Mellisuga Helenae", species: "Bee Hummingbird", favoritefood: "Ramgoat Dashalong", moods: ["loving", "glowing", "inspiring", "hopeful", "excited", "joyus",]};

$("#hum").click(function()
    { count = count + 1;
    let arrayPosition = count - 1;
    let currentMood = buttonCreature.moods[arrayPosition];
    let message = "<p> You clicked me " + count + " times.</p>";
    message = message + "<p> My current mood is " + currentMood + ".</p>";

    message = message + "<p> My name is " + buttonCreature.name + ".</p>";
    message = message + "<p> I am a " + buttonCreature.species + ".</p>";
    message = message + "<p> My favorite food is " + buttonCreature.favoritefood + ".</p>";

    $("#output").html(message);



    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
 });



