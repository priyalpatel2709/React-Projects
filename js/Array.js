console.log('array1 :)')
// //array destructuring
// const a = [1,2,3,4,5]

// let [t1,t3,t4,t5] = a;
// console.log(`most usefull ${t1}`);

//take value  by  user


// const [fname, setFname] = useState('');
// <input type="text" name="fristname" value={fname} onChange={(e)=>setFname(e.target.value)} />
// <input type="button" onClick={()=>myFunction(fname,lname,addame)} value="Submit form"></input>
// const arr = [1,2,3,4,5]

// const newarr = arr.map(function(data){
//     return data + 2;
// });
// console.log(newarr);
//-------------------------[...array]------------------------------------------------------------------]
// let sum = (...input) =>{
//  console.log(...input);
//  let total = 0;
//  for (let i of input){
//      total += i;
//  }
//  console.log(total);
// } 

// sum(1,2,3,4)
//-----------------------------------------BIND to give function to object-----------------------------
// const stutend = {
//         name : 'den',
//         id : 1,
//     };
// const stutend1 = {
//         name : 'don',
//         id : 2,
//         stander : 2,
//     }    
// function alldata(marks) {
//     console.log(`my name is ${this.name} and my id is ${this.id} and my mark is ${marks}`);
//     function stander(){
//       console.log(`i am in class  3 `);
//   }
//   stander()
// }



// let newstudend3= alldata.bind(stutend);
// // newstudend3();
// console.log(newstudend3(12));
//-------------------------------for_in  {object}---------------------------------------------------
// const stu ={
//     name : 'maya',
//     number :1,
//     address : {
//         city : 'vadodra',
//         pin : 7
//     }
// }

// for(let i in stu)
// console.log(i,stu[i])
//-------------------------------for_of  [array]--------------------------------------
// let arr=[]
// arr[0]=1
// arr[5]=6
// for(let n of arr){
//     console.log(n);
// }
//---------------------------------------------Destructuring--------------------------------------
// let arr = [1,2,3,4,5,6,7,8]
// let [a,,c,...d] =arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// const preson ={
//     name :'may',
//     age : 17,
//     walk() {console.log(this);},
//     talk() {'talking'}
// }
// const w= preson.walk
// console.log(w);
//--------------------array_methods-------------------------------------------
// const info =[
//     {id:1,name:'maya',state:true  , price :10},
//     {id:2,name:'jya',state:true   , price :12},
//     {id:3,name:'taya',state:true  , price :45},
//     {id:4,name:'chaya',state:true , price :100},
//     {id:5,name:'den',state:false  , price :90}
// ]

// const f = info.filter((e)=>{
//     return info.price <=50
// })
// console.log(f);
// var a=12;
// let b= 32;
// function app(){
//     var c=12
//     console.log(a,b,c);
// }
// app()
// console.log(a);
 
// let arr=[10,2,1]

// function sumOfDifferences(arr) {
//     for(let i of arr){
//     (arr[i]-arr[i+1])+(arr[i+i]-arr[i+2])
//       }
//   }
//   sumOfDifferences()

// Sum Numbers
// function sum (...numbers) {
//     //     "use strict";
//       let number = 0;
//       for(let i in numbers){
//        number = number + i 
//       }
// };
// sum(1,23,4,45,66)

// let sum = (...input) =>{
//  console.log(...input);
//  let total = 0;
//  for (let i of input){
//      total += i;
//  }
//  console.log(total);
// } 

// sum(1,2,3,4,5,34,34)

// Sum Numbers
// function sum (...numbers) {
//     //     "use strict";
//     //   if(numbers==[0]){
//     //     return 0
//     //   }else{
//       let num = 0;
//       for(let i in numbers){
//        num = number + i 
//       }
//        } 
        
//     // };
// sum(1,2.3,4584)    

// var arr = [4, 8, 7, 13, 12]
// var sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);


// let sum = (...input) =>{
//  if(sum==[0]){
//     [].reduce((a, b) => a + b, 0)
//  }else{
//     [1, 2, 3, 4].reduce((a, b) => a + b, 0)
//  }
//  [1, 2, 3, 4].reduce((a, b) => a + b, 0)
// } 

// sum(1,2,3,4)

// function ab(a,b) {
//     for(let i=a;i<=b;i++){
//        return i+=1;
//     }
// }
// ab(1,5)
// console.log(ab);

// let a=[1,3,3]
// const sum = a.reduce((a,b)=>{
//     return a+b
// },0);

// console.log(sum);

// function ac(){
//     // let a=2*2
//      return 
//     console.log('asdasd'); 
// }
// ac()
//------------------------------------------------------------------------------------------------
//------------------ARRAY-------------------------------------------------------------------------

// let arr=[1,2,3,4,5]

// let filter=arr.filter(x=>x>4)
// let filter1=arr.filter(x=>x*4)
// let map =arr.map(x=>x>4)
// let map1=arr.map(x=>x*2)

// console.log(arr);
// console.log(filter);
// console.log(filter1);
// console.log(map);
// console.log(map1);

// const info =[
//     {id:1,name:'maya',state:true  , price :10},  
//     {id:2,name:'jya',state:true   , price :12},
//     {id:3,name:'taya',state:true  , price :45},
//     {id:4,name:'chaya',state:true , price :100},
//     {id:5,name:'den',state:false  , price :90},
//     {id:600,name:'abc',state:false  , price :90},
//     {id:7,name:'xyz',state:false  , price :10},
// ]


// let every1 = info.every(check)
// console.log(every1);
// console.log(info);
// let p2=info.map(x=>`price is ${x.price} and ID is ${x.id}`)
// console.log(p2);     

// let f2=info.filter(x=>{
//     if(x.price=x.price){

//     }    
// })
// console.log(f2); 
// let arr=[13,1,2,3,4,5,34,45,56,67,78]
 


// function checkAge(age) {
//     return age > 18;
// }
// // let qw=arr.every(checkAge)
// // console.log(qw);

// let find =arr.findIndex(checkAge)
// console.log(find);


// let find =arr.findIndex(f)
// console.log(find);
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let i in arr){
//     console.log(i);
// }
// let [arr1,arr2,...a3] =arr
// console.log(a3);
// function countSheeps(arrayOfSheep) {
//     // TODO May the force be with you
//     var result = 0
//     for (eachsheep of arrayOfSheep){
//     if (eachsheep === true){
//     result ++
//     }
//     }
//     return result
// }
// let arrayOfSheep=[true,true,false]
// countSheeps(arrayOfSheep)

// function str(s,n) {
//     console.log(s.slice(n)); 
// }

// str('Intermediate',6)

// const myObj = {
//     name: "John",
//     age: 30,
//     cars: [
//       {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//       {name:"BMW", models:["320", "X3", "X5"]},
//       {name:"Fiat", models:["500", "Panda"]}
//     ]
// }
// let aa=JSON.stringify(myObj)
// console.log(aa);


// console.log(myObj.cars);
// for(let i in myObj.cars ){


//     for (let j in myObj.cars[j].models){
//         console.log(myObj.cars[i].models.[j]);
//     }
        
// }
// console.log(Object.values(myObj));
//2to6
// let arr=[1,2,3,4,5,6,7,8,9,10]
// //       0,1,,2,3,4,5,6,7,8,9
// arr.splice(1,8)

// // console.log(arr);
// function add(n){
//     return n**2;
// }
// const x= 'maya'

// export {add,x}


//  export default function addm (...abc){
// // console.log(a);
//  let t = 0;
//   for(let i of abc){
//       t += i
//   }
//   return t;
// }
// export {addm,add,x
 
// console.log(addm(1,2,3,4,5,6,7));
// let  str='werwersdfg'
// let arr=str.split('')

// console.log(arr);
// let a = typeof(arr)
// console.log(a);
// let j = {
//     "name" : "raj",
//     "id" : 12,
//     "age" : null,
//     "abc" : true
// }
// let js=JSON.stringify(j)
// let ss = JSON.parse(js)
// console.log(js);
// console.log(ss);
// function getMonthName(mo) {
//     mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
//     let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
//                   'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     if (months[mo]) {
//       return months[mo];
//     } else {
//       throw 'InvalidMonthNo'; // throw keyword is used here
//     }
//   }
  
//   try { // statements to try
//     monthName = getMonthName(myMonth); // function could throw exception
//   }
//   catch (e) {
//     monthName = 'unknown';
//     logMyErrors(e); // pass exception object to error handler (i.e. your own function)
//   }
// console.log(getMonthName(12));  
// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log('Outer loops: ' + x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log('Inner loops: ' + z);
//     z += 1;
//     if (z === 4 && x === 4) {
//       break labelCancelLoops;
//     } else if (z === 4) {
//       break;
//     }
//   }
// }
// let str='qwerwertytru'
// let str1=2121

// let arr=Array.from(str)
// let sp =str.split('')
// console.log(arr);
// console.log(typeof(str));
// console.log(typeof(sp));

// function add(a,b){
//     function sqa(x){
//           return x*x
//     }
//     return sqa(a)+sqa(b)
// }
// console.log(add(5,5));

// let arr=[1,2,3,4,5,6,7,8,9,0]
// let arr1=Array(42)
// console.log(arr1.length);

// let colors = ['red', 'green', 'blue']
// for (let i of colors) {
//     console.log(colors[i])
// }
// let array = ['first', 'second', undefined, 'fourth']
// array.forEach(function(element) {
//   console.log(element)
// })
//------------------------------------let const -------------------------------------
// let a='abc';
// if(true){
//     const a=12
//     console.log(a);
//     if(true){
//         const a=true
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);
// console.log(b);
// console.log(c);
// let obj={
//     a : 1,
//     b: 'name',
//     c : function () {
//       return this.a + 1
//     } 
// }
// console.log(obj.c());
// const p=Object.create(obj)
// p.a=5
// console.log(p.c());
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2,1)
// // let c=fruits.slice(2)
// console.log(fruits);
// console.log(c);
// console.log(x);
// function* genId () {
//   let id =1
//   while(true){
//     yield id
//     id++
//   }
// }
// console.log(genId().next());
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.toString('');
// let text1 = fruits.join(' ');
// console.log(text);
// console.log(text1);
// function sortByLength (array) {
//   return array.sort((a,b)=>a.length-b.length)
  
  
// };
// console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]));
// function findShort(s){
//   arr=s.split(' ')
//   lw= arr.sort((a,b)=>a.length-b.length)
//  let [a]=lw
//  let  len=a.length
//  return (len);
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// function openOrSenior(data){
//   // ...
//   let arr=[]
//   for(let i=0;i<data.length;i++){
//     let temp =data[i]

//     if(temp[0]>=55 ){
//       arr.push('s')
//     }else{
//       arr.push('o')
//     }
//   }
//     console.log(arr);
// }
// console.log(openOrSenior([[45, -2],[55,21],[19, -2],[104, 20]]));
// let age=19;
// let prom=new Promise(function(s,r){
//     if(age > 18){
//         s ('done')
//     }else{
//         r ('fail')
//     }
// })

// console.log(prom);
// function doubleChar(str) {
//     // Your code here
//     str1=''
//     str2=''
//     for(let i of str){
//         str1=i.repeat(2)
//         str2+=str1
//     }
//     return str2
// }
// function doubleChar(str) {
//     return str.replace(/(.)/g, "$1$1")
//   }
// console.log(doubleChar("aAbcd"));
// function spongeMeme(sentence) {
//   let arr=sentence.split('')
//  let str=arr.map((e,i)=>{
//     if(i%2==0){
//      return  e.toUpperCase()
//     }else{
//      return e.toLowerCase()
//     }
    

//   })
//   return (str.join(''));
  
// }
// console.log(spongeMeme("stop Making spongebob Memes!"));
// function alternate(n, firstValue, secondValue){
//   let arr=[]
//   for(let i=0;i<n;i++){
//     if(i%2==0){
//       arr.push(firstValue)
//     }else{
//       arr.push(secondValue)
//     }
//   }
// return arr

// }
// console.log(alternate(5, true, false));

    
/**
 * Challenge: Map over the thingsArray to generate
 * a <p> element for each item and render them on the page
 * below the button
 */
// let a = thingsArray.map( e=>console.log(e))
const thingsArray = ["Thing 1", "Thing 2",'t3']
function add(){ 
    
    for(let i of thingsArray){
        console.log(i)
    }
}
// console.log(a);
add()

