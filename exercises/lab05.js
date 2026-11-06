function askNumber(whatNumber) {
    let userNumber = prompt("Guess 1-20?");

    if (userNumber == whatNumber) {
        $("#output").html("You guessed correct!");
    }
    else {
        $("#output").html("Guess again");
    }
}

$("#good-button").click(function () {
    askNumber(15);
});

