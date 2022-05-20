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