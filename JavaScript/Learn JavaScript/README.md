# JavaScript: This folder at a glance
This folder contains basic JavaScript practice that I have done. As I go through the practice, I want to put everything I learn here so I can come back in the future and get the idea of what I did all in one spot.

If you want to search for anything, CTRL + F and look to see if the keyword is on this page. If it is, hopefully it helps.

# Main ideas
## Declaring and using variables
### var
Why use var? var is a global variable unless it is defined within a function. We can also redefine a var variable, even within the same scope. Some examples of var are as follows:  
var age = 25; // Number  
var name = "John"; // String  
var developer = true;// Boolean  
var location = null; // Null  
var task; // undefined  

### let
Why use let instead of var? let allows you to access the variable in that scope, where var is more global. If no value is assigned to a value using the let keyword, then it will automanically have the value 'undefined'. The two following examples show the scope differences of let and var:   
for (let i = 0; i < 5; i++)  
{  
&emsp;// i accessible  
}  
// i not accessible  
  
for (var i = 0; i < 5; i++)  
{  
&emsp;// i accessible  
}  
// i accessible  
  
### const
We use const when we know that the value of a variable will not change throughout the program. Using const will not allow us to change the value of that variable at anytime in our program. We must also declare an initializer when we declare a const. The following is a few basic examples of const:  
  
const age = 20;  
const job = 'developer';  
const name; // SyntaxError: missing initializer  
const num = 10;  
num = 20; // Compiler Error: Cannot assign to 'num' because it is a constant or read-only property    
