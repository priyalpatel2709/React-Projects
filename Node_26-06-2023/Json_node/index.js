const fs = require('fs');

const data = {
  name: 'test',
  age: 19,
  city: 'abc'
};

const jsonData = JSON.stringify(data);

// fs.writeFile('demo.json', jsonData, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File created successfully!');
// });

const obj = fs.readFileSync('demo.json', 'utf8');

const parsedObj = JSON.parse(obj);
console.log(parsedObj);
