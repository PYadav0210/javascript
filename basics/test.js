const accountId = 1234
let accountEmail = "ypurshotam50@gmail.com"
var accountPassword = 123455
console.log(accountId);
console.table([accountId, accountEmail, accountPassword]);

let score = "Fuck off";
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// Object literals
const mysym = Symbol("hello1")
const jsuser = {
    [mysym] : "mykeyvalue",
  name : "Dotted",
  age : 16,
  email: "ypurshotam50@gmail.com"

}

jsuser.greeting = function(){
    console.log("Hello Greeting")
}
jsuser.greetingTwo = function(){
    console.log(`Hello Greeting, ${this.email}`)
}
console.log(jsuser["email"])
console.log(jsuser["age"])
console.log(typeof jsuser[mysym])
console.log(jsuser.greeting())
console.log(jsuser.greetingTwo())


//functions
function addTwoNumbers(num1, num2){
    return num1+num2
}
console.log(addTwoNumbers(3,33))


const object = {
    user:"nameone", 
    id : 123,

}
function funcs(paran){
    console.log(`Username is ${paran.user} and number is ${paran.id}`);

}
funcs(object);

//++++++++++++++++++++++++++++++++++++++++++++
const user = {
    username: "Dotted",
    price: 999,
   welcomeMessage:function(){
    console.log(`My username id ${this.username} and price is ${this.price}`)
     
   }
  

}
user.welcomeMessage()

