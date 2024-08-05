const name="user"
const repocount=50
console.log(`Hello my name is ${name} and my repocount is ${repocount}.`);

const gamename= new String('Usergroup')
console.log(gamename[0]);

const newstring=gamename.substring(0,4)
console.log(newstring)

const newstring1=gamename.slice(-8,4)
console.log(newstring1)

const mystring="      user@%20google.com"
console.log(mystring.replace('%20',''));
console.log(mystring.trim());
console.log(mystring.split('%20'));


