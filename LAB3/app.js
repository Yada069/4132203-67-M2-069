let x = 10; 
var y = "hallo"
const z = 20.2;

//ตัวแปลArray
const arr = [1,"Test",3,4,5];
const car = [];
car[0] = "BMW";
car[1] = "Audi";
const fruit = new Array("Apple", "Banana", "Orange");
const profile = [[1,2,3], "name","age"];

console.log(profile[0][1]);
console.log(fruit);

//array methods
fruit.push("Mango");
fruit.shift();
console.log(fruit);

arr.map((item) => {
    console.log(item);
});

//Object
const person = {
    fristName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: ["blue", "black"],
    fullName: function(){
        return this.fristName + " " + this.lastName;
    }
};

person.adress = {
    sterrt: "5th Avenue",
    city: "New York"
};

console.log(person.fullName());

//function
function sum(a,b) {
    return a + b;
}
    
function sub(a, b){
    console.log(a - b);
}

const mul = (a, b) =>{
    return a * b;
}

const div = (a, b) => a/b;

const result = sum(10,20);
console.log(result);

document.getElementById("message1").innerHTML = "Hallo World";
