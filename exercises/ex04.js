// The Button Clicker Program 

let count = 0;
let colors= ["Orchid", "Coral", "HotPink", "Plum"];

let buttonText="";


$("#needy-button").click( function (){
    // what to do when the button is clicked 
count = count + 1; 

console.log(count);

buttonText= "Kissed" + count + "times" + colors[count-1];

$("needy-button").html(buttonText);
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
