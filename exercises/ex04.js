// The Button Clicker Program 

let count = 0;
let colors= ["Green","Orange","Brown","Yellow", "Gold", "Purple", "Red", "Pink"];

let buttonText="";


$("#needy-button").click( function (){
    // what to do when the button is clicked 
count = count + 1; 

console.log(count);
console.log(colors[count-1]);

buttonText= "Kissed" + count + "times" + colors[count-1];

$("needy-button").html(buttonText);

$("body").css( "background-color", colors[count-1] );

//$("body").append(" <img width='50' src="" + colors[count-1] + ".jpg">");
// if we run out of colors in array start from the beginning one again

if(count >= 9) { count = 0;}







});

colors[1]; // returns "Coral"




let myCat={
   name: "Lazy",
   ears: 2,
   color: "pink",
   hasKittens: true,
   purr: function (){ console.log("purrrrrr")},
};
myCat.ears // will return 2
