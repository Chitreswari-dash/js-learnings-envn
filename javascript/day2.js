//to convert a string to number we can use the Number() function
let str="123"
let value_of_str=Number(str)
console.log(value_of_str) //this will print 123 as a number
console.log(typeof value_of_str) //this will print number
//null value if converted to number will be 0
//undefined value if converted to number will be NaN
//string value if converted to number will be NaN
//type of Nan is number
let bool=1
let boolean=Boolean(bool)
console.log(boolean) //this will print true
console.log(typeof boolean) //this will print boolean
//null in boolean will be false
//string in boolean will be true
//1 is true and 0 is false in boolean
let num=123
let number=String(num)
console.log(number) //this will print "123" as a string
console.log(typeof number) //this will print string
//null in string will be "null"
//undefined in string will be "undefined"
//boolean in string will be "true" or "false"

let val=3
let negval=-val
console.log(negval) //this will print -3
//concatenation of string and number will be string
//concatenation of string and boolean will be string
let str1="hello"
let str2=" world"
let str3=str1+str2
console.log(str3) //this will print "hello world"
//string at the first and anything else later will be string
//integer at the first and anything else later will be number
//if we write 3+8+"hello" it will be "11hello" because 3+8 will be evaluated first and then concatenated with "hello
// if we write "hello"+3+8 it will be "hello38" because "hello"+3 will be evaluated first and then concatenated with 8
//+true will be 1 and +false will be 0 
//+null will be 0 and +undefined will be NaN
console.log("2">1)
//this will print true because 2 is greater than 1 and in javascript when we compare a string with a number, 
//it will convert the string to a number and then compare
//null is considered as 0 in comparison and undefined is considered as NaN in comparison
//strict equality operator (===) will not perform type coercion and will return false if the types are different
console.log("2"===2) //this will print false because the types are different
console.log(2===2) //this will print true because the types are same and values are same