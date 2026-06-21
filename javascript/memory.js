/*
there are two types of memory in javascript
1. stack memory
2. heap memory

stack memory is used to store primitive data types and function calls.
heap memory is used to store reference data types.
stack gives a copy of the value to the variable, while heap gives a reference to the value.

*/ 

const name="chitra"
const repo=12
//to concartenate string and number we can use template literals
const result=`${name} has ${repo} repos`
console.log(result)
//to declare string using object we can use new keyword
const name=new String("chitra")
//this string is stored in heap memory and name variable is stored in stack memory
//it is in the key value pair format, key is name and value is "chitra"
//we can access value of any position in the string using index number
//console.log(name.__proto__) this will give the prototype of the string object
// all these methods can be see in the browser console 
/*
to slice a string we can do it in two ways
1. using slice method
2. using substring method
const str="chitra"
console.log(str.slice(0,3)) this will give "chi"
console.log(str.substring(0,3)) this will give "chi"
trim method is used to remove white spaces from the string
console.log(str.trim())

in an url we can replace the spaces with %20 using replace method
const url="https://www.google.com/search?q=javascript memory"
console.log(url.replace(" ","%20"))
url.includes() method is used to check if a string contains a substring or not
console.log(url.includes("javascript")) this will give true
url.split() method is used to split a string into an array of substrings
console.log(url.split(" ")) this will give ["https://www.google.com/search?q=javascript", "memory"]

 */
