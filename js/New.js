// new Function--------------------------------------------------------------------------------
let sum = new Function ('a','b','return a+b')
// console.log(sum(1,3)); 
let arr=['$1','$2','100']
let str =arr.join('+').replace(/\$/g, "")
let ans=eval(str.toString())
console.log(ans);