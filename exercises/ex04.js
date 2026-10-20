// The Button Clicker Program 

let count = 0;

$("#needy-button").click( function (){
    // what to do when the button is clicked 
count = count + 111; 
$("#needy-button").html("Kissed" + count + "times");

});

