const entree = 'Enchiladas';
console.log(entree);

// Trying to reassign a const variable
entree = 'Tacos'; // This line of code causes an error because we tried to change the value of a const
/*
    Why use const instead of var or let? Because const is a variable type assigned to data
    whose value cannot and will not be changed throughout the program.
    
    Examples of const:
    const age = 20; 
    const job = 'developer';
    const name; <-- SyntaxError: missing initializer
    const num = 10;
    num = 20; <-- Compiler Error: Cannot assign to 'num' because it is a constant or read-only property
*/