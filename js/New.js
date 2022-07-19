// // new Function--------------------------------------------------------------------------------
let sum = new Function ('a','b','return a*b')
console.log(sum(2,3));
// let arr=['$1.9000','$2.1','100']
// let str =arr.join('+').replace(/\$/g,"")
// let ans=eval(str.toString())
// console.log(ans);
const items = [
  {
    id: 1,
    name: "a sword",
    slot: "wield",
    isWorn: true,
    damage: 50,
    defense: 0,
  },
  {
    id: 2,
    name: "a battle-axe",
    slot: "wield",
    isWorn: false,
    damage: 70,
    defense: -10,
  },
  {
    id: 3,
    name: "a cloth cap",
    slot: "head",
    isWorn: false,
    damage: 0,
    defense: 5,
  },
  {
    id: 4,
    name: "a helmet",
    slot: "head",
    isWorn: false,
    damage: 0,
    defense: 20,
  },
  {
    id: 5,
    name: "a pair of leggings",
    slot: "legs",
    isWorn: false,
    damage: 0,
    defense: 25,
  },
  {
    id: 6,
    name: "a pair of black pants",
    slot: "legs",
    isWorn: false,
    damage: 0,
    defense: 5,
  },
  {
    id: 7,
    name: "a cloth skirt",
    slot: "legs",
    isWorn: false,
    damage: 0,
    defense: 2,
  },
  {
    id: 8,
    name: "a coal lantern",
    slot: "light",
    isWorn: true,
    damage: 0,
    defense: 1,
  },
];
// let t=items.filter(e=>!e.isWorn)

// console.log(t);
// let s = "slot";
// let myMap = [...new Map(t.map((e) => [e[s], e])).values()];

let Mapy=new Map()
let key=items.map(e=>e.slot)
let val=items.map(e=>e)

console.log(Mapy);

