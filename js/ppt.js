console.log(" ppt :) ");

// let s ='i am string'; console.log(s);
// let n =5; console.log(n);
// document.getElementById("demo").innerHTML = 1212 + 6; //document.getElementById(id)

// let drive  = true,drive1  = false,age =3;
// // let drive2  = false;
// // let age =23;
// if(age>18){
//     console.log('you can drive '  + drive);
// }else{
//     console.log('you cant drive '  + drive1);
// }

// let arry=[1,2,3,'srting']
// console.log(arry);

// let obj={name:'maya',age:12 }
// console.log(obj);

// //variables------------------------------------------------------
// var a = 15;
// if (true) {
//   var a = 5;
//   console.log(a);
// }
// console.log(a); //output =5,5

// let b = 100;
// if (true) {
//   let b = 50;
//   console.log(b);
// }
// console.log(b); //output =50,100

// const c = 500;
// if (true) {
//   const c = 50;
//   console.log(c);
// }
// console.log(c); //output =50,500
//logical opraters------------------------------------------------------------------
//

// let a=true;
// console.log(!a);

// let x=8,y=25,z=5;
// let add = x>y || x>z;
// console.log(add);
//Ternary Operator-------------------------------------------------------
// let x=18,y=2;
// let v;
// (x<y) ? v=true : v=false;
// console.log(v);

// let a=10,b=20;
// const sum = (a,b)=>{
//     return a+b;
// }
// console.log(sum(a,b));
// let c=10,d=20;
// const sub = (c,d)=>{
//     return c-d;
// }
// console.log(sub(c,d));
// //Increment-------------------------------------------

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
//Decrement---------------------------------------------------------------
// let x = 3;
// const y = x--;

// console.log(x,y);

// if else---------------------------------------------------------------
// let age = 23;
// if (age == 18) {
//   console.log(`your age is ${age}`);
// } else if (age == 23) {
//   console.log(`your age is ${age}`);
// } else {
//   console.log("age is not defind");
// }
// loops--------------------------------------------------------------
//for
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// let j = 1;

// while (j < 10) {
//   console.log(j);
//   j++;
// }

// let a = 200;
// do {
//   console.log(a + 1);
//   a++;
// } while (a < 10);
//switch--------------------------------------------------------------------
// let age=9;

// switch (age) {
//     case 18:
//         console.log(`age is ${age}`);
//         break;
//     case 13:
//             console.log(`age is ${age}`);
//             break;
//     case 19:
//             console.log(`age is ${age}`);
//              break;
//     case 10:
//             console.log(`age is ${age}`);
//             break;
                        

//     default:
//         console.log('not definded');
//         break;
// }
//scope--------------------------------------------------------------------
// function demo() {
//   var a=12
// }
// console.log(demo());
// if (12>5){
//       var a=true
// }
// console.log(a);
// const click =()=>{
//     console.log('clicked');
// }
// const [fname, setFname] = useState('');
// <input type="text"/>
//------------------------------------------------------------------------
// const info =[
//     {id:1,name:'maya',state:true  , price :1000},
//     {id:2,name:'jya',state:true   , price :1122},
//     {id:3,name:'taya',state:true  , price :50},
//     {id:4,name:'chaya',state:true , price :10},
//     {id:5,name:'den',state:true  , price :910}
// ]
// const arr =[112,34,43,5434,56456,2432,56,24545]
// console.log(arr);
//-------------------------------Methods-----------------------------------
// const filter = info.filter( e =>e.price < 50)
// const f = arr.forEach( e => {                    //---- FOREACH
//     console.log(e);
// })
// const include =arr.includes(1)                  //------includes--->TRUE/FALSE
// console.log(include );  
// if(include == true){
//     console.log('value he');
// }else{
//     console.log('value nhi he');
// }

// const some = info.some(e =>e.state === false);  //-------SOME--_IN ONE ELEMENT_  ->TRUE/FALSE
// console.log(some);

// const every =info.every(e => e.price > 500  )  //------- EVERY--_IN EVERY ELEMENT_  ->TRUE/FALSE 
// console.log(every);

// const ac = arr.sort((a,b)=>a-b)
// const dc =arr.sort((a,b)=>b-a)
// console.log(ac); 
// console.log(dc); 
// console.log(arr);
 
// const acr = info.sort((a,b)=>{
//    return a.price - b.price
// });
// console.log(acr);

// const acrname = info.sort((a,b)=>{
//     if (a.name.toLowerCase < b.name.toLowerCase) 
//       return -1;
//     if (a.name.toLowerCase >b.name.toLowerCase)
//       return 1;
//     return 0;
// });
// console.log(acrname);
// console.log(info);

// const [id,name,price] = info


// document.write(id,name,price)
// document.write('hi').
//-----------------------Array.form()-------------------------------------------------

// const obj = 'name'
//  const objarr = Array.from(obj);
//  console.log(objarr);
//-----------------------Array.of()-------------------------------------------------------
// const input= Array.of(1,2,3,4,5)
// console.log(input);


// let sum = (input) =>{
//  console.log(input);
//  let total = 0;
//  for (let i of input){
//      total += i;
//  }
//  console.log(total);
// } 
//sort - This method used to sort the array in place in a given order according to the compare() function.
// let a = [4, 2, 5, 6, 1, 2, 7];

//     const ac = arr.sort((a,b)=>a-b)

// let b = ['henry' ,'rocky' ,'leah' ,'frank','jason' ];
// console.log(b.sort());
//-------------------------codewars-----------------
// function maskify(cc) {
//     return cc.replace('1234','#')
//   }
//  maskify('123465')
//  let text = "Mr Blue has a blue house and a blue car";
//  let result = text.replace(/blue/g, "red");
// let str = '122334245'
// let res = str.replace(/122/, "*");
// console.log(res);
 

//   function convert (srt){
//     for(let i=0;i <= str.length;i++){
//        srt.replace('#')
//     }
// }
// convert('1234566') 

// let a=13
// console.log(a);
// let b=(x)=>{
//     let x=23
//     console.log(x);
// }
// b(13242)
// console.log(b);

// function b(){
//     let a=12;
//     console.log(a);
// }
// b()
// console.log(a);

// if(12>5){
//     let a=5
// }
// console.log(a);
// console.log('start');
// // function a() {
// //     console.log('inside');
// // }a()
// setTimeout(() => {
//     console.log('inside');
// }, 2000);

// console.log('end');
// let arr=['a','b','c','d']
// let newarr=arr.forEach(e=>console.log(typeof(e)))
// let map=arr.map(e=>e)


// console.log(typeof(map));

// let arr=[1,2,3,4,5]
// let arr1=[...arr]

// var mySet = new Set([...arr]);
// var valuesToRemove = new Set([...arr1]);

// function removeAll(originalSet, toBeRemovedSet) {
//   [...toBeRemovedSet].forEach(function(v) {
//     originalSet.delete(v); 
//   });
// }

// // console.log([...mySet]);
// removeAll(mySet, valuesToRemove);
// console.log([...mySet]);

// function oddOrEven(array) {
//     //enter code here
//     let total=array.reduce((previousValue, currentValue) => previousValue + currentValue)
//        if(total%2==0){
//         console.log('evern');
//        }else{
//         console.log('odd');
//        }
//  }
// console.log(oddOrEven([1023, 1, 2]));
// function evenNumbers(array,n) {
//     // good luck
//     return array.filter(a=> a%2==0).splice(-n)
//   }
//  console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)); 
// function declareWinner(fighter1, fighter2, firstAttacker) {
//   if(firstAttacker>fighter1)
// }
// const sequenceSum = (begin, end, step) => {
//     let sum=0;
//     for(let i=begin;i<=end;i+=step){
//        sum+=i
//     }
//     return sum
//  };
// //  console.log(sequenceSum(2,6,2))
// function sumOfN(n) {
//     if(n<0){
//         console.log('-ve');
//         let arr=[];
//       for(let i=n;i>=n+1;i--){
//        arr.push(i)
//        console.log(arr);
//     }
//     let newarr=arr.map(e=>e*(e-1)/2)
//     return (newarr);
//     }else{
//       let arr=[0];
//       for(let i=1;i<=n+1;i++){
//        arr.push(i)
//     }
//     let newarr=arr.map(e=>e*(e-1)/2)
//     return (newarr);
// }
// };
// function sumOfN(n) {
//         let arr=[0]
//     let j=1;
//     let temp=0
//     let m=0
//     if(n<0){
//         m=n*(-1)
//         console.log(m);
//     }else{
//         m=n
//     }
//     for(let i=0;i<m;i++){
//      temp+=j;
//      if(n<0)
//         {
//             let temp1=temp*(-1)
//             arr.push(temp1)}
//     else
//        { 
//         arr.push(temp)
//     }
//     j++
    
// }
// return arr
// };
// console.log(sumOfN(-7));
// function roundToNext5(n){
//     // ...
//     // let temp=(1.4)*(n/5.0) * 5

//     return Math.ceil((n/5.0) * 5)
// }
// console.log(roundToNext5(1))
function getSum( a,b )
{
   //Good luck!
   if(b<0){
            m=n*(-1)
            console.log(m);
   }
  sum = 0;
  for(let i=a;i<=b;i++){
    console.log(i);
  sum+=i
  }
  console.log("sum is");
  return sum
}
console.log(getSum(0,-1));