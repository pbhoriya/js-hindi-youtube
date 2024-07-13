// const JsUser={
//     name:"User",
//     age:18,
//     email:"user1234@gmail.com",
//     location:"Jaipur",
//     isLoggedIn:false,
//     lastLoginDay:["Mon","Sat"],
// }

// //printing or accessing object
// console.log(JsUser)
// console.log()
// console.log(JsUser.name)
// console.log(JsUser["age"])

// Using symbol
const mySym=Symbol("key1")
 const JsUser={
     name:"User",
     age:18,
     email:"user1234@gmail.com",
     location:"Jaipur",
     isLoggedIn:false,
     lastLoginDay:["Mon","Sat"],
     [mySym]:"mykey1"
}
 console.log(JsUser)
 console.log()

 // To change details of objects
 JsUser.email="group1234@gmail.com"
 console.log(JsUser)
 console.log(JsUser["email"])

 Object.freeze(JsUser)//email freeze ho gya h ab change ya update nhi hoga
JsUser.email="user1234@gmail.com"

//Using function to add variable in JsUser object
JsUser.greeting=function(){
    console.log("Hello")
}
console.log(JsUser.greeting);


JsUser.greetingTwo = function(){
    console.log(`Hello,${this.name}`)
}
