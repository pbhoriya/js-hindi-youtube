const arr1=[1,2,3,4]
console.log(arr1[0])

const arr2=new Array(5,6,7,8)//initializing array using object
console.log(arr2[0])

//Array methods

arr2.push(9,10)
console.log(arr2)
arr2.pop()
console.log(arr2)

arr2.unshift(4)// index 0 pr 4 add ho jyga
console.log(arr2)
arr2.shift()// 4 delete ho jyga
console.log(arr2)

console.log(arr2.includes(7));
console.log(arr2.indexOf(4));

const arr3=arr2.join()
console.log(arr3)

//slice and splice
const arr4=[1,2,3,4,5,6,7,8,9]
const arr5=arr4.slice(1,4)// index 1 se 3 tk ki value print hogi.
console.log(arr4)
console.log(arr5)
console.log()
const arr6=arr4.splice(1,4)// index 1 se 4 tk ki value alg hi ho jygi aur arr4 m remaining value bachegi bs
console.log(arr4)
console.log(arr6)



