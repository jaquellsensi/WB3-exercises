function convertFahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

let  fahrenheit = [212, 90, 72, 32, 0, -40];

for (let i = 0; i < fahrenheit.length; i++) {
    let celsius = parseInt(convertFahrenheitToCelsius(fahrenheit[i]));
    console.log(celsius);
}
