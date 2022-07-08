console.log('array');
// import * as demo  from './Array.js'
// import den from './Array'
// // //sort - This method used to sort the array in place in a given order according to the compare() function.
// // // let a = [4, 2, 5, 6, 1, 2, 7];
// // // console.log(a);
// // // console.log(a.sort().reverse);

// // // let b = ['henry' ,'rocky' ,'leah' ,'frank','jason' ];
// // // console.log(b);
// // // console.log(b.sort());

// // // let dcs=b.reverse()
// // // console.log(dcs);
// // // const a= 5;
// // // const  app = () => { 
// // //    var b= 10; 
// // //    var a= 123;
// // //    console.log(a);
// // // //    console.log(b);
// // // }
// // // console.log(a);
// // // // console.log(b);
// // // app()
// // //--------------------------------loops-----------------------------------------------
// // // for (let i = 1; i < 8; i++){

// // //     for (let j = 1;j < i;j++) {
// // //         document.write('*')
// // //     }
// // //     document.write('<br>')
// // // }
// //     // for (let i = 1; i <= 5 ; i++){
        
// //     //     for (let j = 1; j <= i; j++) {
// //     //         document.write(j)
// //     //     }
// //     //    document.write('<br>')
// //     // }


// // // for (let i = 1; i <= 5 ; i++){
// // //     for (let k=1;k <=(5-i);k++)
// // //     {
// // //         document.write(" &nbsp; ")
// // //     }
// // //     for(let j=1;j<=i;j++)
// // //     {
// // //         document.write('*')
// // //     }
// // //     document.write('<br/>')

// // // }

// // // let x= -55645; 
// // // let y = 445;
// // // let z= 45646

// // // if(x>y && x>z ){
// // //    if(y>z){
// // //    console.log(x + ", " + y + ", " +z)
// // //    }else
// // //    {
// // //    console.log(x + ", " + z + ", " +y)
// // //    }
// // // }
// // // else if(y>x && y>z) {
// // //     if(x>z){
// // //     console.log(y + ", " + x + ", " +z);    
// // //     }else{
// // //     console.log(y + ", " + z + ", " +x);  
// // //     }
// // // }
// // // else if(z>x &&z>y){
// // //     if (x>y) {
// // //     console.log(z + ", " + x + ", " +y);    
// // //     }else{
// // //         console.log(z + ", " + y + ", " +x);   
// // //     }
// // // }

// // // else{
// // //     console.log('ja la tu');
// // // }

// // // for (let index = 0; index <= 15; index++) {
// // //     // console.log(index);

// // // if(index===0){
// // //     console.log('value is zero');
// // // }    
// // // else if (index % 2=== 0) {
// // //     console.log(index + 'is even');
// // // }else{
// // //     console.log(index + 'is odd');
// // // }    
// // // }

// // //------------------------------html table by loop----------------------------------------

// // // var r,c;
// // // rno=prompt('enter number of row')
// // // cno=prompt('enter number of column')
// // // document.write('<table border="2px" width="100" height="100"  >');
// // // for(r=1;r<=rno;r++){
// // //     document.write('<tr>');
// // //     for(c=1;c<=cno;c++)
// // //     {
// // //         document.write(`<th>   ${r}:${c}    </th>`);
// // //     }
// // //     document.write('</tr>');
// // // }
// // // document.write('</ table>');
// // //---------------------------------------------------------------------------------------
// // //break-------
// // // let a = 1;
// // // do {
    
// // //     if (a==5) {
        
// // //         a += 1;
// // //         continue;
// // //     }
// // //     console.log(a);
// // //     a ++;
// // // } while (a<=10);
// // // console.log('done');
// // // let arr=[10,2,1]
// // // console.log(arr);
// // // let arr=[10,2,1]
// // // function sumOfDifferences(arr) {
// // //     // console.log(arr);
// // //     let sum=0;
// // //     for(let i=0;i<arr.length;i++){
// // //     sum = arr[i] - arr[i+1]
// // //     console.log(sum);
// // //     }
// // //   }
// // // sumOfDifferences([10,2,1])


// // // let arr = [2, 1, 10];

// // // arr.sort((a,b) => b - a);

// // // let sum = 0;
// // // for (let i = 0; i < arr.length - 1; ++i) {
// // //     sum += arr[i] - arr[i + 1];
// // // }

// // // console.log(sum);

// // // function sumOfDifferences(arr) {
// // //     return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// // //   }
  
// // //   console.log(sumOfDifferences([]));
// // //   console.log(sumOfDifferences([10]));
// // //   console.log(sumOfDifferences([10, 1, 2]));

// // // var arr = [4, 8, 7, 13, 12]
// // // var sum = 0;
// // // for (let i = 0; i < arr.length; i++) {
// // //     sum += arr[i];
// // // }
// // // console.log(sum);
// // // Sum Numbers
// // // function sum (...numbers) {
// // //     //     "use strict";
// // //     //   if(numbers==[0]){
// // //     //     return 0
// // //     //   }else{
// // //       let num = 0;
// // //       for(let i = 1; i < sum.length - 1; ++i){
// // //        num += i 
       
// // //       }
// // //       console.log(num); 
// // //       } 
// //     // }
// // // sum([1,2,3,34,35,456])
// // // console.log('arrr');
// // // function ab(a,b) {
// // //     for(let i=a;i<=b;i++){
// // //        return i;
// // //     }
// // // }

// // // console.log(ab(1,5));

// // // function abbrevName(name){

// // //     // code away
// // //     const fullName = name.split(' ');
// // //     const initials = fullName.shift().charAt(0)+ "." + fullName.pop().charAt(0);
// // //     return initials.toUpperCase();
// // // }
// // // abbrevName('Pri PAt')

// // // function hero(bullets,dragons ){
// // //     //Get Coding!
// // //       if(dragons*2 <= bullets  ){
// // //         return true;
// // //         }else{
// // //         return false;
// // //         }
// // // }
// // // console.log(hero(1500,751));
// // // function makeNegative(num) {
// // //     if(num <= 0){
// // //       return  num
// // //     }
// // //     else{
// // //       return '-' + num
// // //     }
// // //   }
// // // console.log(makeNegative(0));  
// // const info =[
// //   {id:1,name:'maya',state:true  , price :10},
// //   {id:2,name:'jya',state:true   , price :112},
// //   {id:3,name:'taya',state:true  , price :45},
// //   {id:4,name:'chaya',state:true , price :145},
// //   {id:5,name:'den',state:false  , price :90},
// //   {id:6,name:'abc',state:false  , price :97},
// //   {id:7,name:'xyz',state:false  , price :189},
// //   {id:8,name:'qwe',state:false  , price :195},
// //   {id:9,name:'rty',state:false  , price :1785},
// //   {id:10,name:'uio',state:false  , price :10000},
// // ]
// // // console.log(info);

// // let age=info.reduce((a,b)=>{
// //   if(a[b.price]){
// //    a[b.price] = ++a[b.price];
// //   }else{
// //     a[b.price]=1
// //   }
// //   return a
// // },{})
// // // console.log(age);

// // let filter=info.filter((x)=>x.price >= 10000  ).map(x=>x.name)
  
    



// // console.log(filter);


// // // document.getElementById("demo").innerHTML = filter;
// // let arr=[12,34,45,56,67,78,12]

// // let f= arr.entries();
// // // console.log(f);
// // for (x of arr){
// //   console.log(x);
// // }
// // let obj={
// //   name :'da',
// //   age :12,
// // }
// // console.log(typeof(arr));
// // // for(let i in obj){
// // //     console.log(i);
// // // }


// // for(let i in arr){
// //   console.log(i);
// // }
// // let text = "ABCDEFG"
// // const myArr = arr.indexOf(12,1)

// // document.getElementById("demo").innerHTML = myArr;
// // document.getElementById("demo1").innerHTML = arr;

// // function countSheeps(arrayOfSheep) {
// //   // TODO May the force be with you
// //   var result = 0
// //   for (eachsheep of arrayOfSheep){
// //   if (eachsheep === true){
// //   result ++
// //   }
// //   }
// //   return result
// // }
// // let arrayOfSheep=[true,true,false]
// // countSheeps(arrayOfSheep)

// // let q1=["this", "is", "a", "really", "long", "sentence"]
// // let a =q1.join(' ')

// // console.log(a);

// // function sumMix(x){
// //   let sum = 0
// //   let srt =''
// //    for(let i in x){
//   //  if(typeof(x[i]) == typeof(srt)){
//     //  sum += parseInt(x[i])
// //     //  console.log("x[i]");
// //    }else
// //      sum += x[i]
// //    } 
// //    console.log(sum);
// //  }
// // let x=[1,4,'5','5']
// // sumMix(x)
// // n=5
// // arr=[]
// // for(let i=1;i<=n;i++){
  
// //   console.log([i]);
// // }
 
// // arr.reverse(i)


// // let zoo = new Map();

// // zoo.set('a',5);
// // zoo.set('b',9);
// // zoo.set('c',7);
// // zoo.set('d',6);
// // zoo.set('e',4);
// // let ab=zoo.get('e')

// // console.log(zoo);
// // console.log(ab);
// let set = new Set();

// set.add('a')
// set.add('q')
// set.add('w')
// set.add('e')
// set.add('r')
// set.add('t')
// set.add('c')
// set.delete('c')
// set.add(2)

// set.has('a')
// // set.add(true)
// // set.add(null)
// // set.clear()
// console.log(set); 

// // let ac=((function (a){
// //   a=12
// //   delete a;
// //   return a
// // }
// // (5)
// // ))
// // console.log(ac);
// let myobj ={
//   name : 'den',
//   age : 12,
//   shope : ['food','milk',12],
//   obj :{
//      id :123,
//      address : 'vadodra',
//      city : ['surat',12,{state : 'guj'}]
//   }
// }

// let myjson = JSON.stringify(myobj)

// let newjson =JSON.parse(myjson)

// console.log(newjson.obj.city[2].state); //guj
// console.log(newjson.shope[1]);         //milk 


// let a =()=>{
//   console.log(this);
//   // return 0
// }
// a()
// console.log(this);
// function b (){
//   console.log(this);
// }
// b()
// let add=(a,b)=>{
//   if(a >0 && b>0 ){
//     r = a+b
//     return r
//   }else{
//    return `enter +ve `
//   }
// }
// // add(4,-4)
// console.log(add(4,4));

// function descendingOrder(n){
//   if(n >= 0){
//   return (
//     parseFloat(
//       n
//         .toString()
//         .split('')
//         .reverse()
//         .join('')
//     ) * Math.sign(n)
//   )
// }else{
//   console.log('dfsdf');
// }
// }

// console.log(descendingOrder(1021));

// let n =123456789
// let s =n
//       .toString()
      
//       .replace(/234/gi,'')
      
// // let  arr= s.split(' ')
// console.log(s);

// let arr=[100,23,45,67,567,67,779,809,456]
// console.log(arr);
// console.log(arr.length);
// let sarr=arr.sort((a,b)=>a-b)
// arr.sort((a,b)=>a-b)
// console.log(arr);
// console.log(sarr);
// let lastele=arr[arr.length-1]
// let [a]=arr;
// let [...b]=sarr;
// console.log(b);
// console.log(a);
// console.log(lastele-b);
// let obj ={
//     name : 'raj',
//     age : 23,
//     address : {
//         city : 'vadodra',
//         state : ['guj.','MP','UP']
//     }
// }
// let {name,age,address} =obj;
// // console.log(address.state[0]);
// let j =
//     {
//        "name" : "raj",
//        "id" : 12,
//        "age" : null,
//        "abc" : true
//    }

// // 
// // console.log(j);
// let s =JSON.stringify(j)
// let p =JSON.parse(s)
// console.log(s);
// console.log(p);
// console.log(s);
// console.log(p);
// console.log(demo.addm(1,2,3,4));

// console.log(demo.add(21));
// console.log(demo.x);
// console.log(den(1,2,3,4,5,6,7,10));

// let arr=[10000,1,2,3,34,54,3,545,324]
// arr.sort((a,b)=> a-b)
// let [x]=arr;
// let lea=arr[arr.length-1] 
// console.log(lea-x);

// let str = '12345jghjg67890'
// let pedd=str.replace(/[a-z]/gi,'x')
// const getMaskedNumber = (number) => {
//     const endDigits = number.slice(-4);
//     return endDigits.padStart(number.length, '*');
// }
// numbers.forEach(n => console.log(`${n} => ${getMaskedNumber(n)}`))
// let numbers = ['123456789'];

// // let ed=numbers.slice(-4)
// let sn =numbers.toString()
// // console.log(sn);
// // console.log(sn.length);
// let srt=sn.padStart(6,'*')
// // console.log(srt);
// srt2='rterterter'
// // console.log(srt2.length); 
// let res=srt2.replace(/[srt2.length]/g,'*')
// let ss=srt2.padStart(srt2.length,'$')
// console.log(res);

// function add (a,b=5){
//     return a+b
// }
// const ab=(c,d)=>



// console.log(add(5,10));
arr=[1,2,3,4,5,6,7]
const initialState = {
    count: 0,
    favoriteThings: []
}
initialState.favoriteThings.push(arr)
console.log(initialState.favoriteThings);


// arr=[1,2,3,4,5,6,7]
// let ooj={
//     a:1,
//     arr :[]

// }
// ooj.arr.push(12)
// console.log(ooj.arr);


