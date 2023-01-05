const user = {
    name: "",
    age: ""
}

let newUser = "Country";

user[newUser] = "";

function updateDynamically (key,value) {
    user[key] = value;
    userClone[key] = value;
}
let userClone = {};
function cloneUser (){
    for(let key in user) {
        userClone[key] = user[key];
        updateDynamically("name", "Marley");
        updateDynamically("age", "36");
        updateDynamically("Country", "NewZealand");

    }
    }
cloneUser()

let permissions = {
    canEdit: true,
    canView: true
}
Object.assign(userClone,permissions);
Object.assign(user,permissions,{"canEdit": false});


console.log(userClone);

updateDynamically("name", "Carl Manson");

updateDynamically("age", "33");

updateDynamically("Country", "United States");


for(key in user) {
    console.log(key);
    console.log(user[key]);
}
console.log(user);

let codes = {
    "41": "Germany",
    "34": "Switzerland",
    "1": "Nigeria",

    "23": "United states"
}
for (let key in codes) {
    console.log(key);
    console.log(codes[key]);
}


//Task1
const userInfo = {};

userInfo["Name"] = "John";

userInfo["Surname"] = "Smith";

userInfo["Name"] = "Pete";

delete userInfo["Name"];

console.log(userInfo);

//Task2
let schedule = {};

console.log(isEmpty(schedule));

schedule["08: 30am"] = "get up";

console.log(isEmpty(schedule));


function isEmpty (obj) {
    for(let key in obj) {
        return true
    }
    return false
 
}
//Task3
let salary = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;

function sumSalary(obj) {
    for (let key in obj) {
        if(isEmpty(salary)) {
            sum += obj[key];
        }else {
            return sum
        }
    }
}
sumSalary(salary);
console.log(sum);


//Task 4 

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
let newMenu = {...menu};

function multiplyNumeric(obj) {
    for(let key in obj) {
        if(typeof obj[key] == "number") {
            obj[key] = obj[key]*2
        }
    }
    
}
multiplyNumeric(newMenu);

console.log(newMenu);

let userObject = {
    name: "John",
  sizes: {
    height: 182,
    width: 50
  }
}

let clonedUser = structuredClone(user);
let newClone = structuredClone(userObject);

console.log(clonedUser); // clonedUser === user returns false
console.log(newClone); // newClone === userObject return false


//Reachaility in Javascript

let panel = {
    name: "John",
    config: true
}
let admin = panel;
panel = null;
console.log(admin);


//garbage collection algorithm
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }
  
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });
  console.log(family);
delete family.father;
delete family.mother.husband;

//this keyword and Methods

// let person = {
//     name: "John",
//     age: 23,
//     sayHi() {
//         console.log(person.name);
//     }
// }

// let newPerson = person;
// person = null;

// newPerson.sayHi();

let person2 = {
    name: "John",
    age: 23,
    sayHi2() {
        console.log(this.name);
    }
}

let newPerson2 = person2;
person2 = null;

newPerson2.sayHi2();

//Task
//Creating a calculator

let calculator = {
    a: +prompt("a is?",0),
    b: +prompt("b is ?",0),
    sum() {
        return `The sum of a and b is: ${this.a + this.b}`;
    },
    mul() {
        return `The Product of a and b is: ${this.a * this.b}`;
    }
}
alert(calculator.sum());

alert(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};
console.log(ladder.up().up().down().showStep());

function Calculator () {
    this.a = +prompt("a is ?",0);
    this.b = +prompt("b is ?",0);

    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
       return this.a * this.b;
    
    };
}

let newCalculator = new Calculator();
console.log(newCalculator.sum(),newCalculator.mul());

function Accumulator(startingValue) {
    this.value = startingValue;
    

    this.read = function () {
        this.value += +prompt("Enter a new value to add",0);
    }
}
let newAccumulatedValue = new Accumulator(1);
newAccumulatedValue.read();
alert(newAccumulatedValue.value)

// let str;
// str = new String("Person Profile");
// str.score = 5;


// function updateDynamically(key,value) {
//     str[key] = value;
// }
// updateDynamically("Name", "Vince")

// console.log(str);