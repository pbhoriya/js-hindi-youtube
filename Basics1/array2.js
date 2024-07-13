const arr1=[1,2,3,4]
const arr2=[5,6,7,8]
// arr1.push(arr2)
// console.log(arr1)

// arr1.concat(arr2)
// console.log(arr1)

const allarr=[...arr1,...arr2]
console.log(allarr)

const arr3=[1,2,[3,4,[5,6]]]
const arr4=arr3.flat(Infinity)
console.log(arr4)

console.log(Array.isArray("User"))
console.log(Array.from("User"))//Array bnadega user ko
console.log(Array.from({name:"user"}))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))//ek array bnadega teeno ko



