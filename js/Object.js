console.log('object :)')
//<---------------------------normal object----------------------------------->
// // let car = {
// //     name1 : 'c1',
// //     topspeed : 100,
// //     run : going,
    
// // }
//-----------------------------------------------
 


//<-----------------------------CONSTRUCTOR----------------------------------->
// function Car(na,ts1,state1) {
//     this.name1 = na;
//     this.topspee = ts1;
//     this.run = state1;
//    }

// }
// <----------------------ADDIND INTO CONSTRUCTOR----------------------------->
// Car.prototype.model = "f2"
// Car.prototype.data1 = function(){
//     return this.name1 + ' ' + this.run;
// }


// let car1 = new Car('c1', 100 , 'going')
// let car2 = new Car('c2', 400 , 'going')
// let car3 = new Car('c3', 500 , 'going')
// let car4 = new Car('c4', 600 , 'going')
// let car5 = new Car('c5', 700 , 'going')

// console.log(car5.data1());
//<---------------------------NESTED OBLECT--------------------------->
// let a = {
//     name1:'raj',
//     id:123,
//     personalinfo : {
//         email : "den123",
//         address: {
//             city : 'vadodra',
//             state : 'guj',
//             country : 'india',
//         }
//     }
// };

// console.log(a.personalinfo.address.country);
//<-------------------------------------OBJECT.CREATE ----------------------->
// let a = Object.create({
//     name : 'raja',
//     id : 12,
// });


// console.log(a.name);

// function Employee(name,id,salary){
//     this.name=name;
//     this.id=id;
//     this.salary=salary;
// }
// Employee.prototype.slogan = function(){
//         return `this is good company ${this.name}`;
// }
// let a = new Employee('raj',12,12000);

// console.log(a.slogan());
// child classs------------------------->
// function Programmer(name,id,salary,language){
//     Employee.call(this,name,id,salary);
//     this.language='language';
// }
//  let ram = new Programmer('ram',12,1232343,'html')
//  console.log(ram.slogan());
// <--------------------------------___ES6________--------------------------->
// class Employee{
//     constructor(givenName,givenId,givenSalary,givenYear){
//     this.name=givenName;
//     this.id=givenId;
//     this.salary=givenSalary;
//     this.JY=givenYear;
//     }

//     joinYear(){
//         return 2020 -this.JY ;
//     }

//     static add(a,b){
//         return a+b;
//     }
// }
// let a = new Employee('raj',23,12323,2015);
// console.log(a);

// class Programmer extends Employee{
//     constructor(givenName,givenId,givenSalary,givenYear,givenLan){
//         super(givenName,givenId,givenSalary,givenYear);
//         this.lan=givenLan;
//     }

// }

// let p = new Programmer('chaya',12,12345,2004,'js')
// console.log(p.lan)
const demo= (name,a)=> {
    return 'hello ' + name + a;
};
console.log(demo('raj',23))

const sqr = num => num*num

console.log(sqr(5));