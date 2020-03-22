// question 1

var person = "truls";

// question 2

var person = {
    gender: "male",
    height: 182
};

// question 3

var outOfStock = true;

if(outOfStock === true) {
    console.log("In stock");
}
else {
    console.log("Out of stock");
}

// question 4

var numbers = [6, 54, 17, 108, 256];
    console.log(numbers[6]);
    console.log(numbers[54]);
    console.log(numbers[17]);
    console.log(numbers[108]);
    console.log(numbers[256]);

// question 5

for(var loop = 15; loop <= 25; loop++) {
    console.log(loop);
}

// question 6

for(var loop = 15; loop <= 25; loop < 20) {
    console.log(loop);
}

// question 7

var happyness = [
    {
        name: "tom",
        height: 180,
        happy: true
    },
    {
        name: "sarah",
        height: 160,
        happy: false
    }
];

for(var i = 0; i < happyness.length; i++) {
    console.log(happyness[i].height);
    console.log(happyness[i].happy);
}

// question 8

function whatIDontLike(corona) {
    console.log("I don't like " + corona);
}

whatIDontLike("Corona");

// question 9

function names (surname,lastname){
    var print = lastname
    console.log(print)
}


// question 10

var age = [];
function say(words){
    alert(age);
}
say(23);