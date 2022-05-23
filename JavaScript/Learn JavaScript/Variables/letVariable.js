let changeMe = true;
changeMe = false;
console.log(changeMe);
/*
    If no value is assignemed to a value using the let keyword, then it will automanically have the value 'undefined'
    Why use let instead of var? let allows you to access the varibale in that scope, where var is more global?

    Example:
    for (let i = 0; i < 5; i++)
    {
        // i accessible
    }
    // i not accessible

    for (var i = 0; i < 5; i++)
    {
        // i accessible
    }
    // i accessible
*/