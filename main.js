// my scripts 

// my objects

const person1 = {
  name: "Simon Peters",
  lastName: "SAKPLA",
  fullName: function(){
    return this.name + " " + this.lastName;
  },
  age: "23",
  sex: "M",
  school: "KNUST"
};

const person2 = {
  name: "Jenniferrrrrrrrrr",
  age: "21",
  sex: "F",
  school: "KNUST (BIT)"
};


console.log('Hello World!');
let x = addNumbers(5, 6);
let y = addNumbers(21, 6);

console.log(x + y);

console.log(person2.name);
console.log(`Length is ${person2.name.length}`);

console.log(`His name is ${person1.name}, ${person1.age}, full name is ${person1.fullName()};
and she is ${person2.name}, ${person2.age}.`);

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

console.log(text);
console.log(newText);
console.log(newText.replace("W3Schools", "SP Bureau"));


/*
function insetInPage{
  
}
*/

// html manipulation 
document.getElementById("greeting-js").innerHTML='Hi world, JavaScript here';


// show time now
function showTime(){
  console.log(Date());
  document.getElementById('time').innerHTML=Date();
};

/*
// show arrays
const mypeople = ["Simon Peters", "Jenniferrrrrrrrrr", "Blay", "Sweet Melanin", "Delight"];
let peopleLength = mypeople.length;

let text = "<ul>";

for (let p = 0; p < peopleLength; p++) {
  text += "<li>" + mypeople[p] + "</li>";
}

text += "</ul>";

document.getElementById("array").innerHTML=text;

*/

/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;
*/

// show time on load
function showTimeOnLoad(){
  console.log(Date());
  document.getElementById('default-time').innerHTML=Date();
};

// my functions
function addNumbers(num1, num2){
  let ans = num1 ^ num2;
  console.log("Answer is: " + ans);
  return ans;
};


// time of day greeting 
//function greetings(){
  
//  let dateNow = new Date(2023, 7, 28, 9, 45);
  let dateNow = new Date(2018, 11, 24, 19, 33);
  let hourNow = dateNow.getHours;
  
  let greeting;
  if (hourNow < 12){
    greeting = "Good morning!";
  }
  else if(hourNow => 12 && hourNow < 17){
    greeting = "Good afternoon!";
  }
  else{
    greeting = "Good evening!"
  }
  document.getElementById("greetings").innerHTML=greeting;
//}
