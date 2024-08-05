// let username="user1"
// let anothername=username
// console.log(username);
// console.log(anothername);

// anothername="user2"
// console.log(anothername)
// console.log(username)

let firstobj={
    name:"User",
    email:"user@google.com"
}

let secondobj=firstobj;
console.log(firstobj);
console.log(secondobj);

secondobj.email="useruser@google.com";// firstobj email also changed because object is non-primitive and passes actual value that's why original value also get changed whencwe changed the passed value.
console.log(firstobj);
console.log(secondobj);
