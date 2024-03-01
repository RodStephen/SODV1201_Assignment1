//Weather
// Named function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
  }
  // Named function to convert Celsius to Fahrenheit
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  // Event handler for Celsius button click
  $(document).ready(function () {
    $('#toCelsiusBtn').click(function () {
      var temperature = parseFloat($('#temperature').val());
      var celsius = fahrenheitToCelsius(temperature);
      $('#result').html(`Temperature in Celsius: ${celsius.toFixed(2)}°C`);
    });
  });
  // Event handler for Fahrenheit button click
  $(document).ready(function () {
    $('#toFahrenheitBtn').click(function () {
      var temperature = parseFloat($('#temperature').val());
      var fahrenheit = celsiusToFahrenheit(temperature);
      $('#result').html(`Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}°F`);
    });
  });