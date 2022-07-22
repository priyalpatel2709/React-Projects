import React,{ useState } from "react";

var data1 = [
    {
        id: '1',
        Category: 'Hardware',
        Name: 'Xtreme',
    },
    {
        id: '123',
        Category: 'Software',
        Name: 'Obsolete',
    },
    {
        id: '12345',
        Category: 'Software',
        Name: 'V1',
    },
    {
        id: '1234567',
        Category: 'Hardware',
        Name: 'CPU',
    },
];
function Demo (){
// const [category,setCategory]=useState('')    
const categorizedData = data1.reduce((acc, curr) => {
        const { id, Category, Name } = curr;
           
           if (!acc[Category]) {
               acc[Category] = {
                   items: [],
               };
           }
           acc[Category].items.push(Name);
           
           return acc;
 }, {});
 
 let arr=Object.keys(categorizedData)
 console.log(arr.map(e=>e));
//  Object.keys(categorizedData).map((key, index) => {
//     console.log(`Category: ${key}`);
//     categorizedData[key].items.map((item, index) =>
//         console.log(`Item ${index}: ${item}`)
//     );
// });


// console.log(category);
return(
    <>
     {/* <h1>{category}</h1> */}
     <h1>demo</h1>
    </>
)

}    

export default Demo;    
    
    
//      Object.keys(categorizedData).map((key, index) => {
//     console.log(`Category: ${key}`);
//     categorizedData[key].items.map((item, index) =>
//         console.log(`Item ${index}: ${item}`)
//     );
// });