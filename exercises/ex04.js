// The Button Clicker Program 


// we create a variable named "count", the initial value is 0

let count =0;
let colorsCount=0; // new line

// an indexed array of data
let colors=["green", "orange", "brown", "yellow", "gold", "purple", "red", "pink"];

let buttonText="";

// we listend for when an html element with id "needy-button" is clicked and then...

$("#needy-button").click( function (){ 
    // what to do when the button is clicked
    // first, set a new value for "count", which is the current value + 1

    count = count +1; 

    console.log(count);
    console.log(colors[colorsCount]); // changed line

    // now let's find our button and set a new text for it

    buttonText="I was kissed " + count + " times and color is " + colors[colorsCount]; // changed line

    $("#needy-button").html( buttonText ); 

    $("body").css( "background-color", colors[colorsCount] ); // changed line

    //$("body").append(" <img width='50' src='" +colors[count-1]  +".jpg'>" );

    // if we are run out of colors start fron the first one anew

    if ( (count >= 1) && (count < 5) ) { $("#needy-button").after("<p>my mood is ... improving</p>"); }
    if ((count >= 5) && (count < 10)) { $("#needy-button").after("<p>my mood is ... enlightened</p>"); }
    if (count >= 10) { $("#needy-button").after("<p>my mood is ... questioning reality</p>"); }

    colorsCount = colorsCount +1; // new line

    if ( colorsCount >= 8 ) { colorsCount = 0;  } // new line
    });

   





































