var bars = [
    'Siggys',
    'Blind Tiger',
    'Zum Schneider',
    'One Month',
    'Home Sweet Home',
    'Union Pool'
];

// Our List of Friends
var friends = [
    'Robert',
    'Tony',
    'Lee',
    'Sister',
    'that girl you forgot to text back',
    'Kayne West'
];

var randomNumber = Math.floor(Math.random()*bars.length);

var barname = bars[randomNumber];
var friendname = friends[randomNumber];

document.write("How about you go to <strong>" + barname + "</strong> with <strong>" + friendname + "</strong>?");