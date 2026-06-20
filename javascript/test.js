console.log("hello world")
const var0 =123 //constant variable 
let var1="string type" /*this is also a variable data type and we use this reguarly in our code because of the scope 
issue, let doesn't change the value of this variable in this program even if at some other place the same 
variable name is used
let can take all types of values such as int, string, bool
bigint for larger input sizes
string can be written as ""
boolean can be written as true or false
null is a standalone value that represents the absence of any value
undefined is when value id defined but not initialized
*/
var var2="123234" //variable data type 
variable3="hello"
var4;
// if we declare a variable without initializing it, it will be undefined and printed as undefined in the console
//to print everything at once in table form we can use 
console.table([var0,var1,var2,variable3,var4])
"use strict" //this is used to avoid the use of undeclared variables in the program
//alert() works only in the browser and not in the node.js environment, so we can use console.log() instead of alert() to print the output in the console
console.log(typeof var0)
/* tells the type of the variable, in this case it will print number
if we ask the type of null it will print object, this is a bug in javascript and it is not fixed yet
and for undefined it will print undefined
*/
