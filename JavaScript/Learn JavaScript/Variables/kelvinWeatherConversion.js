// The forecast today is 293 Kelvin
var kelvin = 293;

// Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
var celsius = kelvin - 273;

// Fahrenheit = Celsius * (9/5) + 32
var fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Newton = Celsius * (33/100)
var newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${newton} degrees in the Newton scale.`);