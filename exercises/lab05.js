function askNumber(whatNumber) {
    let userNumber = prompt("Guess a number 1 - 20?");

        if (userNumber == 15) { 
            $("#output").html("You guessed correctly !");
        }
         else if (userNumber == 14) {
            $("#output").html("Soooo close");
        }
        else {
            $("#output").html("Guess again");
        }
};

$("good-button").click(function() {
    askNumber(15);
});
