
// explicit types

let character: string; 
let age: number; 
let isLoggenIn: boolean; 

age = 30; 
// age = 'john'; 

// arrays 
let ninjas : string[] = []; //array of strings + initalize the array so you can use methods like push

ninjas = ['yoshi', 'mario'];
ninjas.push('shaun');

// union types 

let mixed: (string|number|boolean )[] = [];

mixed.push('hello')
mixed.push(20)
mixed.push(false)

console.log(mixed);

let uid: string | number; 

//objects 

let ninjaOne: object; 
ninjaOne = { name: 'yoshi', age: 30 }

let ninjaTwo: {
    name: string, 
    age: number, 
    beltColor: string 
}

//functions 

let greet: Function; 

// greet = 'hello'; 

greet = () => {
    console.log('hello, again')
}

const add = (a: number, b:number, c?: number | string) => {
console.log(a + b);
}

add(5, 10);

const minus = (a: number, b: number): number => {
    return a + b; 
}

let result = minus(10, 7);

type StringOrNum = string | number; 
type ObjWithName =  { name: string, uid: StringOrNum}

const greeting = (user: ObjWithName) => {
    console.log(user.name )
}

// interfaces 

interface IsPerson {
    name: string; 
    age: number; 
    speak(a: string): void; 
    spend(a: number):number; 
}

const me: IsPerson = {
    name: 'shaun', 
    age: 30, 
    speak (text: string): void {
        console.log(text); 
    }, 
    spend(amount:number):number {
        console.log('I spent', amount); 
        return amount; 
    }
 }; 

 const greetPerson = (person: IsPerson) => {
    console.log('hello ', person.name);
 }

 greetPerson(me);

 console.log(me);

 // this is a comment 