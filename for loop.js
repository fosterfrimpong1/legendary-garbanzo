//The For Loop
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

for (var count = 5; count < 11; count++){
  console.log(count);
}

//Looping in Reverse
for( let reverseCount = 3; reverseCount >= 0; reverseCount--){
  console.log(reverseCount)
};

//Looping through Arrays
const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + vacationSpots[i])
};

//Nested Loops
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}

var bobsFollowers = ['foster', 'fred', 'ben', 'betty']

var tinasFollowers = ['foster', 'fred', 'daniel']

var mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
};
console.log(mutualFollowers);

//The While Loop
// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard = []
while (currentCard != 'spade'  ){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
}

//Do...While Statements
let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);

var cupsOfSugarNeeded = 10;

var cupsAdded = 0;
 do {
   cupsAdded++;
    console.log(cupsAdded + 'was added')
 } while (cupsAdded < cupsOfSugarNeeded);

 //The break Keyword
 for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}
 
console.log('Orange you glad I broke out the loop!');

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");