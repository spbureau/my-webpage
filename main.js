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
  window.alert("Date Displayed!")
};

/*
// show arrays
const mypeople = ["Simon Peters", "Jenniferrrrrrrrrr", "Blay", "Sweet Melanin", "Delight"];
let peopleLength = mypeople.length;

let text = "<ul>";

for (let p in mypeople) {
  text += "<li>" + mypeople[p] + "</li>";
}

text += "</ul>";

document.getElementById('array').innerHTML=text;
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

// Increase Counter
var countValue = 0; // global var

document.getElementById('counter').innerHTML = countValue; // first show

function IncreaseCount(){
  countValue += 5;
  if (countValue <= 50){
  document.getElementById('counter').innerHTML = countValue;
  } else{
    document.getElementById('counter').innerHTML = "Limit reached!";
  }
};


// time of day greeting 
//function greetings(){
  // works 
let dateNow = new Date();
// let dateNow = new Date(2018, 11, 24, 8, 33);
  let hourNow = dateNow.getHours();
  
  let greeting;
  if (hourNow < 12){
    greeting = "Good morning!";
  }
  else if(hourNow < 16){
    greeting = "Good afternoon!";
  }
  else{
    greeting = "Good evening!"
  }
  document.getElementById("greetings").innerHTML=greeting;
//}

// list
let list = "";
for(let i =0; i < 5; i++){
  list += "List " + i + "</br>";
};

document.getElementById('list').innerHTML=list;


// // // // // 
 // countdown timer
// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var timeNow = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - timeNow;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById('countdown').innerHTML = days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('countdown').innerHTML = "EXPIRED";
  }
}, 1000);
