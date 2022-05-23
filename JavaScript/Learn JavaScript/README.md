# JavaScript: This folder at a glance
This folder contains basic JavaScript practice that I have done. As I go through the practice, I want to put everything I learn here so I can come back in the future and get the idea of what I did all in one spot.

If you want to search for anything, CTRL + F and look to see if the keyword is on this page. If it is, hopefully it helps.

# Main ideas
## Declaring and using variables
### var

### let

### const
We use const when we know that the value of a variable will not change throughout the program. Using const will not allow us to change the value of that variable at anytime in our program. We must also declare an initializer when we declare a const. The following is a few basic examples of const:  
  
const age = 20;  
const job = 'developer';  
const name; // SyntaxError: missing initializer  
const num = 10;  
num = 20; // Compiler Error: Cannot assign to 'num' because it is a constant or read-only property  
