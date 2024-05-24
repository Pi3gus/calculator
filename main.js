// Get the display element
const display = document.getElementById('display');

// Get all the buttons
const buttons = document.querySelectorAll('button');

// Set up an event listener for each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the value of the button
    const value = button.dataset.number || button.dataset.function;

    // Handle the button click
    if (value === '+') {
      // Add the number to the display
      display.value += '+';
    } else if (value === '-') {
      // Subtract the number from the display
      display.value = parseFloat(display.value) - parseFloat(value);
    } else if (value === '*') {
      // Multiply the number by the display
      display.value = parseFloat(display.value) * parseFloat(value);
    } else if (value === '/') {
      // Divide the display by the number
      display.value = parseFloat(display.value) / parseFloat(value);
    } else if (value === '=') {
      // Evaluate the expression and display the result
      try {
        const result = eval(display.value);
        display.value = result;
      } catch (error) {
        display.value = 'Error';
      }
    } else if (button.id === 'clear') {
      // Clear the display
      display.value = '';
    } else {
      // Add the number to the display
      display.value += value;
    }
  });
});