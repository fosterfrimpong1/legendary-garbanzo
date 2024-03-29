//Function Declarations//
function getReminder(){
  console.log('Water the plants')
};

function greetInSpanish(){
  console.log('Buenas Tardes')
};

//Calling a Function//
function sayThanks (){
  console.log('Thank you for your purchase! We appreciate your business.')
};
sayThanks();
sayThanks();
sayThanks();

//Parameters and Arguments//
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

sayThanks('Cole');
sayThanks('Foster');

//Default Parameters//
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
 
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

//Return!
function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined

function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}
function monitorCount(rows, columns){
return rows * columns;

}
const numOfMonitors =monitorCount(5,4);
console.log(numOfMonitors);


//Helper Functions!

function multiplyByNineFifths(number) {
  return number * (9/5);
};
 
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};
 
getFahrenheit(15); // Returns 59

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors (rows, columns){
  return monitorCount(rows, columns) * 200
}

const totalCost = costOfMonitors(5, 4)

console.log(totalCost);

//Function Expressions!
const plantNeedsWater = function(day){
  if (day==='Wednesday'){
    return true;
  } else{
    return false;
  }
};
plantNeedsWater('Tuesday')
console.log(plantNeedsWater('Tuesday'));

//Arrow Functions!
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};

const plantNeedWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
plantNeedWater('Wednesday')
console.log(plantNeedWater('Wednesday'));

//Concise Body Arrow Functions!
//if a function looks like this//
const greaterThanFive = (num) => {
  return num > 5 ? true : false;
};

//to make a concise body, we would remove the parenthesis!
const greaterThanFive = num =>  num > 5 ? true : false;


const plantNeedsWater = day => 
 day === 'Wednesday' ? true : false;


 //Block and Scope//

  const city = 'New York City';
function logCitySkyline (){
 
  let skyscraper = 'Empire State Building'
   return 'The stars over the ' + skyscraper + ' in ' + city;
};
console.log(logCitySkyline());

//Global Scope//

let satellite = 'The Moon'
let galaxy = 'The Milky Way'
let stars = 'North Star'

function callMyNightSky(){

  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

//Block Scope//
function logVisibleLightWaves(){

  const lightWaves = 'Moonlight'
  console.log(lightWaves)
};
console.log(logVisibleLightWaves())
console.log(lightWaves)

const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};
 
logSkyColor(); // blue 
console.log(color); // ReferenceError

//Practice good scoping//
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic'){
    let lightWaves = 'Northern Lights'
    console.log(lightWaves)
  }
  
  console.log(lightWaves);
};

logVisibleLightWaves();

//Functions as Data
const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};

const busy = announceThatIAmDoingImportantWork;
 
busy(); // This function call barely takes any space!

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo()

console.log(isTwoPlusTwo.name);



//Functions as Parameters

const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}
 
higherOrderFunc(anotherFunc);

higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
});

const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
var checkA = val + 2
var checkB = func(val);
  return checkA === checkB ? func(val) : 'inconsistent results'; 
}


console.log(checkConsistentOutput(addTwo, 10));
