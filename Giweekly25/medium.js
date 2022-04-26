// Create a program that accepts a number (1-12) as input and logs to the console that number
// and its corresponding month. For example: if the user enters the number 3, then it should return the
// month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

let entry = Number(prompt("Enter a number 1-12"));

if(entry === 1){
    console.log("January");
    alert("You chose January!");
}

 if(entry === 2){
    console.log("February");
    alert("You chose February!");
}

 if(entry === 3){
    console.log("March");
    alert("You chose March!");
}

 if(entry === 4){
    console.log("April");
    alert("You chose April!");
}

 if(entry === 5){
    console.log("May");
    alert("You chose May!");
}

 if(entry === 6){
    console.log("June");
    alert("You chose June!");
}

 if(entry === 7){
    console.log("July");
    alert("You chose July!");
}

 if(entry === 8){
    console.log("August");
    alert("You chose August!");
}

 if(entry === 9){
    console.log("September");
    alert("You chose September!");
}

 if(entry === 10){
    console.log("October");
    alert("You chose October!");
}

if(entry === 11){
    console.log("November");
    alert("You chose November!");
}

if(entry === 12){
    console.log("December");
    alert("You chose December!");
}


else {
    console.log("Error");
    alert("ERROR choose another number 1-12.");
}