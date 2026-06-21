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

