let count = 0
function askNumber(whatNumber) {
    let userNumber=prompt

    if (userNumber == whatNumber) {
        $("#output").html("You got it!");
    }
    else {
        $("#output").html("Noooooope");
    }
}
$("#good-button").click(function () {
    askNumber(5);
    count = count +1; 
    console.log(count);
});
