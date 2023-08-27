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
and she is ${person2.name}, ${person2.age}.`)

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

